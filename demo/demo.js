var React = require("react");
var ReactDOM = require("react-dom");
var orb = require('../src/js/orb.js');

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


var config = {
    // dataSource: window.demo.data,
    dataSource: [
        [
            "585cd2b158eddc02e51f8781",
            "HJNbiD6Qg",
            "xiaolian22",
            11,
            22,
            44,
            33,
            "2016-12-23"
        ],
        [
            "585cd2b158eddc02e51f8781",
            "HJNbiD6Qg",
            "xiaolian22",
            11,
            22,
            44,
            33,
            "2016-12-22"
        ]
    ],
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
    fields: [
        {name: '0', caption: '_id'},
        {name: '1', caption: 'account', label: '部门成员'},
        {name: '2', caption: 'accountNickname', label: '客户账号'},
        {
            name: '3', caption: 'consumption', label: '消耗值',
            dataSettings: {
                aggregateFunc: 'avg',
                formatFunc: function (value) {
                    return Number(value).toFixed(0);
                }
            }
        },
        {name: '4', caption: 'plan', label: '计划消耗值'},
        {name: '5', caption: 'materialCount', label: '素材数'},
        {name: '6', caption: 'materialPlan', label: '计划素材数'},
        {name: '7', caption: 'date', label: '消耗值'},
    ],
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
};