var express = require('express'),
    router = express.Router(),
    request = require('request'),
    _ = require('underscore');

router.get('/', function(req, res, next) {

    request.get({
        url: 'https://www.googleapis.com/customsearch/v1',
        qs: {
            q: req.query.q,
            key: 'AIzaSyC9HV5iELexKdY2MHESpgPzUTTlX_QrC5A',
            cx: '014906677786528070915:sonnet7alpa'
        }
    }, function(_err, _req, _res) {
        _res = JSON.parse(_res);
        var results = _res.items || [];
        return res.json({
            ok: true,
            username: 'SearchBot',
            attachments: _.map(results, function(item) {
                return {
                    title: item.title,
                    title_link: item.link,
                    text: item.snippet
                };
            })
        });
    });

});

module.exports = router;
