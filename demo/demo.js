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
    dataSource: window.demo.data,
    canMoveFields: true,
    dataHeadersLocation: 'columns',
    width: 1099,
    height: 611,
    theme: 'green',
    toolbar: {
        visible: false
    },
    grandTotal: {
        rowsvisible: false,
        columnsvisible: false
    },
    subTotal: {
        visible: true,
        collapsed: true,
        collapsible: true
    },
    rowSettings: {
        subTotal: {
            visible: true,
            collapsed: true,
            collapsible: true
        }
    },
    columnSettings: {
        subTotal: {
            visible: false,
            collapsed: true,
            collapsible: true
        }
    },
    fields: [
        {
            name: '6',
            caption: 'Amount',
            dataSettings: {
                aggregateFunc: 'sum',
                aggregateFuncName: 'whatever',
                formatFunc: function (value) {
                    return value ? Number(value).toFixed(0) + ' $' : '';
                }
            }
        },
        {
            name: '0',
            caption: 'Entity'
        },
        {
            name: '1',
            caption: 'Product',
        },
        {
            name: '2',
            caption: 'Manufacturer',
            sort: {
                order: 'asc'
            },
            rowSettings: {
                subTotal: {
                    visible: false,
                    collapsed: true,
                    collapsible: true
                }
            },
        },
        {
            name: '3',
            caption: 'Class'
        },
        {
            name: '4',
            caption: 'Category',
            sort: {
                order: 'desc'
            }
        },
        {
            name: '5',
            caption: 'Quantity',
            aggregateFunc: 'sum'
        }
    ],
    rows: ['Manufacturer','Category'],//, 'Category' ],
    columns: ['Class'],
    data: ['Quantity', 'Amount'],
    /*preFilters : {
     'Class': { 'Matches': 'Regular' },
     'Manufacturer': { 'Matches': /^a|^c/ },
     'Category'    : { 'Does Not Match': 'D' },
     // 'Amount'      : { '>':  40 },
     //   'Quantity'    : [4, 8, 12]
     }*/
};

var elem = document.getElementById('rr')

// var pgridwidget = new orb.pgridwidget(config);
// pgridwidget.render(elem);

window.onload = function () {
    var pgridwidget = new orb.pgridwidget(config);
    pgridwidget.render(elem);
};