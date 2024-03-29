const { GoogleSpreadsheet } = require("google-spreadsheet");
const credentials = require("@/assets/credentials.json");

export const GoogleSheetService = {
  async loadSheet(docID: any, sheetID: any) {
    const result = [];
    const doc = new GoogleSpreadsheet(docID);
    const creds = credentials;
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo();
    const sheet = doc.sheetsById[sheetID];
    return await sheet.getRows();
    // MyLogger.log("輸出", rows);
    // for (const row in rows) {
    //   result.push((row as any)._rawData);
    // }
    // return result;
  },
  async updateCell(docID: any, sheetID: any, locate: string, value: any) {
    const result = [];
    const doc = new GoogleSpreadsheet(docID);
    const creds = credentials;
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo();
    const sheet = await doc.sheetsById[sheetID];
    await sheet.loadCells("A1:Z100");
    const cell = await sheet.getCellByA1(locate);
    cell.value = value;
    await sheet.saveUpdatedCells();
  },
  async updateCellByRows(docID: any, sheetID: any, row: any) {
    await row.save();
  },
};
