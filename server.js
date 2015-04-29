var http = require('http'),
    url = require('url'),
    formidable = require('formidable'),
    util = require('util'),
    pdfMakePrinter = require('pdfmake'),
    fs = require('fs');

function start(exportToPdf) {
    function onRequest(request, response) {
        
        console.log('Request has received');

        if (request.url == '/pdf' && request.method.toLowerCase() == 'post') {
            var form = new formidable.IncomingForm();
            form.parse(request, function (err, fields) {
                
                var fileName = fields.fileName;
                var documentDefinition = JSON.parse(fields.exportData);
                var fontDescriptors = {
                    Roboto: {
                        normal: 'fonts/ProximaNovaRegular.ttf',
                        bold: 'fonts/ProximaNovaSemibold.ttf',
                    }
                };
                var printer = new pdfMakePrinter(fontDescriptors);
                var doc = printer.createPdfKitDocument(documentDefinition);
                doc.pipe(fs.createWriteStream('d:/tmp/' + fileName + '.pdf'));
                doc.end();

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