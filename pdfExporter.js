var fs = require('fs');
var PDFDocument = require('pdfkit');

function exportToPdf(stream) {

    var doc = new PDFDocument();

    doc.pipe(stream);

    doc.fontSize(10)
        .text('Service unavailable. Please resubmit your request.', 100, 100);

    doc.fontSize(10)
        .font('fonts/ipaexg.ttf')
        .text('サービスが利用できません。リクエストを再度実行してください。', 100, 120);

    doc.fontSize(10)
        .font('fonts/simfang.ttf')
        .text('服务不可用，请重新提交您的请求。', 100, 140);

    doc.end();
}

exports.exportToPdf = exportToPdf;