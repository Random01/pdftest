var http = require('http'),
    url = require('url'),
    formidable = require('formidable'),
    util = require('util');


function start(exportToPdf) {
    function onRequest(request, response) {

        if (request.url == '/pdf' && request.method.toLowerCase() == 'post') {
            var form = new formidable.IncomingForm();
            form.parse(request, function (err, fields) {
                var fileName = fields.fileName;
                var documentDefinition = JSON.parse(fields.exportData);

                response.writeHead(200, {
                    'Content-Type': 'application/pdf',
                    'Content-Disposition': 'attachment; filename=test.pdf'
                });
                exportToPdf(response);
            });

            return;
        }

        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.write('Hello!');
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log('Server has started');
}

exports.start = start;