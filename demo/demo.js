var HtmlNumberInput = require('./HtmlNumberInput');
var React = require("react");
var ReactDOM = require("react-dom");
var orb = require('../src/js/orb.js');
var OrbReactComps = require('../src/js/react/orb.react.compiled');
var GetData = require('./data');


function refreshData() {
    pgridwidget.refreshData(window.demo.data);
}

function changeTheme() {
    pgridwidget.changeTheme('bootstrap');
}

function exportToExcel(anchor) {
    anchor.href = orb.export(pgridwidget);
    return true;
}


let fields = [
    {name: '0', caption: '_id'},
    {name: '1', caption: 'account', label: '部门成员'},
    {
        name: '2', caption: 'customerAccountId', label: '客户账号',
        formatter: function (value, data, cell) {
            return React.createElement('div', {
                style: {
                    cursor: 'pointer'
                },
                dangerouslySetInnerHTML: {
                    __html: data[8] || data[9] || '&#160;'
                },
                onChange: function (_value) {
                    console.log(_value)
                }
            })
        }
    },
    {
        name: '3', caption: 'consumption', label: '消耗值',
        formatter: function (value, data, cell) {
            return React.createElement(HtmlNumberInput, {
                value: value,
                onChange: function (_value) {
                    console.log(_value)
                }
            })
        },
        dataSettings: {
            aggregateFunc: 'sum',
            formatFunc: function (value) {
                return parseInt(value) ? parseInt(value) : '-'
            }
        }
    },
    {
        name: '4', caption: 'plan', label: '计划消耗值',
        formatter: function (value, data) {
            return React.createElement(HtmlNumberInput, {
                value: value,
                onChange: function (_value) {
                    console.log(_value)
                }
            })
        },
        dataSettings: {
            aggregateFunc: 'sum',
            formatFunc: function (value) {
                return parseInt(value) ? parseInt(value) : '-'
            }
        }
    },
    {
        name: '5', caption: 'materialCount', label: '素材数', formatter: function (value, data) {
        return React.createElement(HtmlNumberInput, {
            value: value,
            onChange: function (_value) {
                console.log(_value)
            }
        })
    },
        dataSettings: {
            aggregateFunc: 'sum',
            formatFunc: function (value) {
                return parseInt(value) ? parseInt(value) : '-'
            }
        }
    },
    {
        name: '6', caption: 'materialPlan', label: '计划素材数',
        formatter: function (value, data) {
            return React.createElement(HtmlNumberInput, {
                value: value,
                onChange: function (_value) {
                    console.log(_value)
                }
            })
        },
        dataSettings: {
            aggregateFunc: 'sum',
            formatFunc: function (value) {
                return parseInt(value) ? parseInt(value) : '-'
            }
        }
    },
    {name: '7', caption: 'date', label: '日期'},
    {name: '8', caption: 'accountNickname', label: '客户账号'},
    {name: '9', caption: 'accountUsername', label: '客户账号'}
];
var config = {
    // dataSource: window.demo.data,
    dataSource: GetData(fields),
    canMoveFields: true,
    dataHeadersLocation: 'columns',
    // width: 1500,
    // height: 611,
    theme: 'gray',

    toolbar: {
        visible: false
    },
    upperButtons: {
        visible: false
    },
    columnButtons: {
        visible: false
    },
    scrollBar: {
        visible: true
    },

    grandTotal: {
        rowsvisible: true,
        columnsvisible: false
    },
    subTotal: {
        visible: true,
        collapsed: true,
        collapsible: true
    },
    fields: fields,
    rows: ['account', 'customerAccountId'],//, 'Category' ],
    columns: ['date'],
    data: ['consumption', 'plan', 'materialCount', 'materialPlan']
};

var elem = document.getElementById('rr')

window.onload = function () {
    console.log(config)
    var pgridwidget = new orb.pgridwidget(config);
    // pgridwidget.render(elem);

    // let pgridwidget = new orb.pgridwidget(config);
    // var pivotTableFactory = React.createFactory(OrbReactComps.PivotTable);
    var pivotTable = React.createElement(OrbReactComps.PivotTable, {
        pgridwidget: pgridwidget
    });

    ReactDOM.render(pivotTable, elem);

};