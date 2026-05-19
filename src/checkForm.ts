import { getSheetData_ } from "@spreadsheet/getSheetData";
import { showSidebar_ } from "@spreadsheet/showSidebar";

const getCheckData = (): any[][] | undefined => {
  const sheet = SpreadsheetApp.getActiveSheet();
  if (!sheet) return;
  const data = getSheetData_(sheet);
  const selectedRow = sheet.getActiveCell().getRow();
  return [data[0], data[1], data[selectedRow - 1]];
};

const formDataToSheet = (data: { index: number; value: string }[]) => {
  // TODO: 入力データをシートに反映（データ表示時に選択行をHTML側で保持して、こちらの関数の引数に連携する必要がある）
  Logger.log(data);
};

const showCheckForm_ = () => {
  showSidebar_("checkFormSidebar", "チェックフォーム");
};
