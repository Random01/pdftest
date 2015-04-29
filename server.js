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

        if (request.url == '/pdf' && request.method.toLowerCase() == 'post') {
            var form = new formidable.IncomingForm();
            form.parse(request, function (err, fields) {

                var docDefinition = fixDocumentDefinition(JSON.parse(fields.exportData));
                var stream = fs.createWriteStream('d:/tmp/' + fields.fileName + '.pdf');

                exportToPdf(docDefinition, stream);

                response.writeHead(200, { 'Content-Type': 'text/plain' });
                response.write('Success');
                response.end();
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