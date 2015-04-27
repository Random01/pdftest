var server = require('./server'),
    pdfExporter = require('./pdfExporter');

server.start(pdfExporter.exportToPdf);