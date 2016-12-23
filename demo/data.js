var datas = [{
    "_id": "585cd2b458eddc02e51f8782",
    "modified": "2016-12-23T07:31:03.827Z",
    "team": "ry6h9Dp7e",
    "org": "c2307910-95d8-11e6-b22a-b9a1ce20a60e",
    "account": "HJNbiD6Qg",
    "date": "2016-12-22",
    "accountNickname": "xiaolian22",
    "accountUsername": "ixoafj",
    "customerAccountId": "584ff40564a30a186299db4b",
    "consumption": 12,
    "plan": 11,
    "materialPlan": 22,
    "materialCount": 33
}, {
    "_id": "585cd2b458eddc02e51f8782",
    "modified": "2016-12-23T07:31:03.827Z",
    "team": "ry6h9Dp7e",
    "org": "c2307910-95d8-11e6-b22a-b9a1ce20a60e",
    "account": "HJNbiD6Qg",
    "date": "2016-12-22",
    "accountNickname": "ss苏珊珊4",
    "accountUsername": "ixoafj",
    "customerAccountId": "584ff40564a30a186299db4b",
    "consumption": 12,
    "plan": 11,
    "materialPlan": 22,
    "materialCount": 33
}, {
    "_id": "585cd2da58eddc02e51f8784",
    "modified": "2016-12-23T07:31:41.300Z",
    "team": "ry6h9Dp7e",
    "org": "c2307910-95d8-11e6-b22a-b9a1ce20a60e",
    "account": "HJNbiD6Qg",
    "date": "2016-12-22",
    "accountNickname": "拖拖拖",
    "accountUsername": "舒服舒服",
    "customerAccountId": "5850c00dcc26b604413c5c1d",
    "consumption": 22,
    "plan": 1,
    "materialPlan": 22,
    "materialCount": 33
}, {
    "_id": "585cd2b158eddc02e51f8781",
    "modified": "2016-12-23T07:31:07.497Z",
    "team": "ry6h9Dp7e",
    "org": "c2307910-95d8-11e6-b22a-b9a1ce20a60e",
    "account": "HJNbiD6Qg",
    "customerAccountId": "584ff40564a30a186299db4b",
    "date": "2016-12-23",
    "accountNickname": "xiaolian22",
    "accountId": "xiaolian11",
    "consumption": 11,
    "plan": 22,
    "materialCount": 44,
    "accountUsername": "ixoafj",
    "materialPlan": 33
}, {
    "_id": "585cd2d858eddc02e51f8783",
    "modified": "2016-12-23T07:31:44.377Z",
    "team": "ry6h9Dp7e",
    "org": "c2307910-95d8-11e6-b22a-b9a1ce20a60e",
    "account": "HJNbiD6Qg",
    "customerAccountId": "5850c00dcc26b604413c5c1d",
    "date": "2016-12-23",
    "accountNickname": "拖拖拖",
    "accountId": "我的",
    "consumption": 44,
    "plan": 22,
    "materialCount": 22,
    "accountUsername": "舒服舒服",
    "materialPlan": 22
}];

module.exports = function (metadatas) {
    return datas.map((item) => {
        return metadatas.map((metaItem) => {
            return item[metaItem.caption];
        })
    });
};