/**
 * Google Apps Script for Biashara-Assistant waitlist
 *
 * SETUP:
 * 1. Open your Biashara Waitlist sheet (or create one with row 1 headers below).
 * 2. Row 1 headers: Timestamp | Business Name | Your Name | WhatsApp Number | Business Type | Email | Additional Info
 * 3. Extensions → Apps Script, paste this code, Save
 * 4. Deploy → New deployment → Web app (Execute as: Me, Who has access: Anyone)
 * 5. Copy the Web app URL and put it in script.js as WAITLIST_SCRIPT_URL
 *
 * This script uses your sheet ID so it always writes to the correct spreadsheet.
 */

var WAITLIST_SHEET_ID = '1QMc0ZJeqD9vlY3mTruFWBlBMbs8c6_vHElGvLsdVptk';

function doPost(e) {
  try {
    var ss = SpreadsheetApp.openById(WAITLIST_SHEET_ID);
    var sheet = ss.getSheets()[0];
    var p = e.parameter || {};
    sheet.appendRow([
      new Date(),
      p.businessName || '',
      p.yourName || '',
      p.phone || '',
      p.businessType || '',
      p.email || '',
      p.additionalInfo || ''
    ]);
    return ContentService.createTextOutput('<html><body>OK</body></html>')
      .setMimeType(ContentService.MimeType.HTML);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
