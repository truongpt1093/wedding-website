// ============================================================
// GOOGLE APPS SCRIPT - RSVP to Google Sheets
// ============================================================
// HƯỚNG DẪN SETUP:
// 1. Vào: script.google.com → New Project
// 2. Paste toàn bộ code này vào
// 3. Nhấn Deploy → New Deployment → Web App
// 4. Execute as: Me | Who has access: Anyone
// 5. Copy URL → paste vào config.json → rsvp.googleSheetUrl
// ============================================================

const SHEET_NAME = 'RSVP';

function doPost(e) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  try {
    // Parse dữ liệu từ form
    let data;
    try {
      data = JSON.parse(e.postData.contents);
    } catch (parseErr) {
      data = e.parameter;
    }

    // Mở hoặc tạo sheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);

    // Tạo sheet + header nếu chưa có
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      const headers_row = [
        'STT', 'Thời Gian', 'Họ Tên', 'Số Điện Thoại',
        'Tham Dự', 'Số Người', 'Khách Mời URL', 'Lời Nhắn'
      ];
      sheet.getRange(1, 1, 1, headers_row.length).setValues([headers_row]);
      sheet.getRange(1, 1, 1, headers_row.length)
        .setBackground('#c9a96e')
        .setFontColor('#ffffff')
        .setFontWeight('bold');
      sheet.setFrozenRows(1);
    }

    // Đếm số dòng hiện tại
    const lastRow = sheet.getLastRow();
    const stt = lastRow; // Dòng 1 là header, nên STT = lastRow

    // Thêm dữ liệu mới
    const newRow = [
      stt,
      data.timestamp || new Date().toLocaleString('vi-VN'),
      data.name || '',
      data.phone || '',
      data.attend || '',
      data.guests || 1,
      data.guest_url_param || '',
      data.note || ''
    ];

    sheet.appendRow(newRow);

    // Auto-resize cột
    sheet.autoResizeColumns(1, 8);

    return ContentService
      .createTextOutput(JSON.stringify({success: true, message: 'RSVP đã được lưu!'}))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: err.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Xử lý preflight OPTIONS
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({status: 'ok', message: 'Wedding RSVP API is running!'}))
    .setMimeType(ContentService.MimeType.JSON);
}
