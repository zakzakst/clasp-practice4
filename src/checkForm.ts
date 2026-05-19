import { getSheetData_ } from "@spreadsheet/getSheetData";
import { showSidebar_ } from "@spreadsheet/showSidebar";

const getCheckData = (): { rowIndex: number; values: any[][] } | undefined => {
  const sheet = SpreadsheetApp.getActiveSheet();
  if (!sheet) return;
  const data = getSheetData_(sheet);
  const selectedRow = sheet.getActiveCell().getRow();
  return {
    rowIndex: selectedRow,
    values: [data[0], data[1], data[selectedRow - 1]],
  };
};

const formDataToSheet = (
  rowIndex: number,
  inputData: { colIndex: number; value: string }[],
) => {
  const sheet = SpreadsheetApp.getActiveSheet();
  inputData.forEach((data) => {
    if (data.value) {
      sheet.getRange(rowIndex, data.colIndex).setValue(data.value);
    }
  });
};

const showCheckForm_ = () => {
  showSidebar_("checkFormSidebar", "チェックフォーム");
};
