var HtmlNumberInput = require('./HtmlNumberInput');
var React = require("react");
var ReactDOM = require("react-dom");
var orb = require('../src/js/orb.js');
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
    {name: '2', caption: 'accountNickname', label: '客户账号'},
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
        visible: true
    },
    upperButtons: {
        visible: true
    },
    columnButtons: {
        visible: true
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
    // fields: [
    //     {name: '0', caption: 'Entity'},
    //     {name: '1', caption: 'Product'},
    //     {name: '2', caption: 'Manufacturer', sort: {order: 'asc'}},
    //     {name: '3', caption: 'Class'},
    //     {name: '4', caption: 'Category', sort: {order: 'desc'}},
    //     {name: '5', caption: 'Quantity'},
    //     {
    //         name: '6',
    //         caption: 'Amount',
    //         dataSettings: {
    //             aggregateFunc: 'avg',
    //             formatFunc: function (value) {
    //                 return Number(value).toFixed(0);
    //             }
    //         }
    //     }
    // ],
    rows: ['account', 'accountNickname'],//, 'Category' ],
    columns: ['date'],
    data: ['consumption', 'plan', 'materialCount', 'materialPlan']

    // grandTotal: {
    //     rowsvisible: true,
    //     columnsvisible: false
    // },
    // subTotal: {
    //     visible: true,
    //     collapsed: true,
    //     collapsible: true
    // },
    //
    // rowSettings: {
    //     subTotal: {
    //         visible: true,
    //         collapsed: true,
    //         collapsible: true
    //     }
    // },
    // columnSettings: {
    //     subTotal: {
    //         visible: true,
    //         collapsed: true,
    //         collapsible: true
    //     }
    // },
    // fields: [
    //     {name: '0', caption: 'Entity'},
    //     {name: '1', caption: 'Product'},
    //     {name: '2', caption: 'Manufacturer', sort: {order: 'asc'}},
    //     {name: '3', caption: 'Class'},
    //     {name: '4', caption: 'Category', sort: {order: 'desc'}},
    //     {name: '5', caption: 'Quantity'},
    //     {
    //         name: '6',
    //         caption: 'Amount',
    //         dataSettings: {
    //             aggregateFunc: 'avg',
    //             formatFunc: function (value) {
    //                 return Number(value).toFixed(0);
    //             }
    //         }
    //     }
    // ],
    // rows: ['Manufacturer', 'Category'],
    // columns: ['Class'],
    // data: ['Quantity', 'Amount'],
    // preFilters: {
    //     'Manufacturer': {'Matches': /n/},
    //     'Amount': {'>': 40}
    // },
//     width: 1110,
//     height: 645
};

var elem = document.getElementById('rr')

// var pgridwidget = new orb.pgridwidget(config);
// pgridwidget.render(elem);

window.onload = function () {
    var pgridwidget = new orb.pgridwidget(config);
    pgridwidget.render(elem);
    ReactDOM.render(React.createElement(HtmlNumberInput, {
        data: 123,
        onChange: function (value, target) {
            console.log(value);
        }
    }), document.getElementById('edit2'));

};