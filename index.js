var fs = require('fs');
var PDFDocument = require('pdfkit');

var doc = new PDFDocument();

doc.pipe(fs.createWriteStream('d:/tmp/output.pdf'));

doc.fontSize(25)
    .font('fonts/ipaexg.ttf')
    .text('名前変更を元に戻す 選択した項目をリストに追加', 100, 100);

doc.end();