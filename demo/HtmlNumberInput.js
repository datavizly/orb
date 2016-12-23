var React = require('react');

function po_Last_Div(obj) {
    if (window.getSelection) {//ie11 10 9 ff safari
        obj.focus(); //解决ff不获取焦点无法定位问题
        var range = window.getSelection();//创建range
        range.selectAllChildren(obj);//range 选择obj下所有子内容
        range.collapseToEnd();//光标移至最后
    }
    else if (document.selection) {//ie10 9 8 7 6 5
        var range = document.selection.createRange();//创建选择对象
        //var range = document.body.createTextRange();
        range.moveToElementText(obj);//range定位到obj
        range.collapse(false);//光标移至最后
        range.select();
    }
}

module.exports = React.createClass({
    displayName: "HtmlNumberInput",
    state: {editMode: false},

    componentWillMount: function () {
        this.setState({value: this.props.value, result: this.props.result, field: this.props.field});
    },

    componentWillReceiveProps: function (nextProps) {
        this.setState({value: nextProps.value, result: nextProps.result, field: nextProps.field});
    },

    handlerChange: function (value, e) {
        if (!value || value == '-') {
            e.target.innerHTML = this.props.value;
            return;
        }
        let preValue = this.props.value;
        if (value == preValue) {
            e.target.innerHTML = preValue;
            return;
        }

        while (value.startsWith('-') || value.startsWith('0')) {
            value = value.slice(1);
        }

        if (!value && (preValue == '-' )) {
            e.target.innerHTML = '-';
        } else {
            e.target.innerHTML = value;
        }
        if ((value || (!value && preValue && preValue != '-')) && this.props.onChange) {
            this.props.onChange(value || '0', e.target);
        }
    },

    render: function () {

        var self = this;

        let tdStyle = {
            minWidth: 20,
            padding: '0px 0px',
            cursor: 'pointer',
            textAlign: 'right'
        };

        let data = this.state.value;

        return React.createElement('div', {
                style: tdStyle,
                onClick: function (e) {
                    let value = (e.target.innerHTML || '').trim();
                    if (value == '-') {
                        e.target.innerHTML = '0';
                    }

                    po_Last_Div(e.target)
                }
            },
            React.createElement('div', {
                contentEditable: true,
                style: {},

                onKeyUp: function (e) {
                    let c = e.keyCode;
                    if (!((c >= 48 && c <= 57) || (c >= 96 && c <= 105) || c == 8 || c == 13 || (c >= 37 && c <= 40))) {
                        e.preventDefault();
                        return;
                    }

                    let value = (e.target.innerHTML || '').trim();
                    while (value != '0' && value.startsWith('0')) {
                        value = value.slice(1);
                    }
                    e.target.innerHTML = value;
                    po_Last_Div(e.target);
                },
                onKeyDown: function (e) {
                    let c = e.keyCode;
                    if (!((c >= 48 && c <= 57) || (c >= 96 && c <= 105) || c == 8 || c == 13 || (c >= 37 && c <= 40))) {
                        e.preventDefault();
                        return;
                    }

                    if (c == 13) {
                        e.preventDefault();
                        e.target.blur();

                    }
                },
                onBlur: function (e) {
                    self.handlerChange(e.target.innerHTML, e);
                },
                dangerouslySetInnerHTML: {
                    __html: data || (!(data === 0) ? '-' : 0)
                }
            })
        );
    }
});
