var http = require('http'),
    url = require('url'),
    formidable = require('formidable'),
    util = require('util'),
    fs = require('fs');

/**
* @param {Object} documentDefinition
* @returns {Object}
*/
function fixDocumentDefinition(documentDefinition) {
    if (documentDefinition
        && documentDefinition.content
        && documentDefinition.content.layout) {

        var hLineWidth = documentDefinition.content.layout.hLineWidth,
            vLineWidth = documentDefinition.content.layout.vLineWidth,
            hLineColor = documentDefinition.content.layout.hLineColor,
            vLineColor = documentDefinition.content.layout.vLineColor;

        documentDefinition.content.layout.hLineWidth = function() { return hLineWidth; };
        documentDefinition.content.layout.vLineWidth = function() { return vLineWidth; };
        documentDefinition.content.layout.hLineColor = function() { return hLineColor; };
        documentDefinition.content.layout.vLineColor = function() { return vLineColor; };
    }

    return documentDefinition;
}

function start(exportToPdf) {
    function onRequest(request, response) {
        
        console.log('Request has received');

        if (request.url == '/pdf') {

            var docDefinition;

            if (request.method.toLowerCase() == 'post') {
                var form = new formidable.IncomingForm();
                form.parse(request, function (err, fields) {
                    
                    docDefinition = fixDocumentDefinition(JSON.parse(fields.exportData));
                    
                    response.writeHead(200, {
                        'Content-Type': 'application/pdf'
                    });
                    
                    exportToPdf(docDefinition, response);
                });
            }

            if (request.method.toLowerCase() == 'get') {
                docDefinition = { content: 'Hello!' };

                response.writeHead(200, {
                    'Content-Type': 'application/pdf',
                    'Content-Disposition': 'attachment; filename=test.pdf'
                });

                exportToPdf(docDefinition, response);
            }

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