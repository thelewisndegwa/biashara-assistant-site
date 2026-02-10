/**
 * Google Apps Script for Biashara-Assistant waitlist
 *
 * SETUP:
 * 1. Create a new Google Sheet (sheets.new)
 * 2. Row 1 headers: Timestamp | Business Name | Your Name | WhatsApp Number | Business Type | Email | Additional Info
 * 3. Extensions → Apps Script, paste this code, Save
 * 4. Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the Web app URL and put it in script.js as WAITLIST_SCRIPT_URL
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
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
