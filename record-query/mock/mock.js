var Mock = require('mockjs');
const data = Mock.mock({
    'page': 1,
    'pagesize': 100,
    'page_amount': 1,
    'list|100': [{
        'clickid|+1': 1,
        'nameofpreferential': '@ctitle(5, 8)',
        'name': '@integer(10000)',
        'channelid': '@sentence(3, 5)',
        'channel': '@ctitle(3, 5)',
        'subchannelparameter': '@url()',
        'notictheresults': '@ip',
        'clickonthetime': '@DATETIME("yyyy-MM-dd HH:mm:ss")',
        'noticethetime': '@DATETIME("yyyy-MM-dd HH:mm:ss")'
    }]
});

export default data;
