var express = require('express'),
    router = express.Router(),
    request = require('request');

router.get('/', function(req, res, next) {

    request.get({
        url: 'https://www.googleapis.com/customsearch/v1',
        qs: {
            q: req.query.q,
            key: 'AIzaSyC9HV5iELexKdY2MHESpgPzUTTlX_QrC5A',
            cx: '014906677786528070915:sonnet7alpa'
        }
    }, function(err, request, result) {
        return res.json({results: result.items});
    });

});

module.exports = router;
