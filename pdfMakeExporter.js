var pdfMakePrinter = require('pdfmake');

/**
*
*/
function pdfMakeExporter(documentDefinition, stream) {
    var fontDescriptors = {
        Roboto: {
            normal: 'fonts/ProximaNovaRegular.ttf',
            bold: 'fonts/ProximaNovaSemibold.ttf',
        }
    };
    var printer = new pdfMakePrinter(fontDescriptors);
    var doc = printer.createPdfKitDocument(documentDefinition);
    doc.pipe(stream);
    doc.end();
}

exports.pdfMakeExporter = pdfMakeExporter;