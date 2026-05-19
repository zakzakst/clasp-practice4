import { getSheetData_ } from "@spreadsheet/getSheetData";
import { showSidebar_ } from "@spreadsheet/showSidebar";

const getCheckData = (): any[][] | undefined => {
  const sheet = SpreadsheetApp.getActiveSheet();
  if (!sheet) return;
  const data = getSheetData_(sheet);
  const selectedRow = sheet.getActiveCell().getRow();
  return [data[0], data[1], data[selectedRow - 1]];
};

const formDataToSheet = (data: FormData) => {
  // TODO: 入力データをシートに反映（データ表示時に選択行をHTML側で保持して、こちらの関数の引数に連携する必要がある）
  // data.entries().forEach(([name, value]) => {
  //   Logger.log(name, value);
  // });
  const sheet = SpreadsheetApp.getActiveSheet();
  const data2 = getSheetData_(sheet);
  return data2;
};

const showCheckForm_ = () => {
  showSidebar_("checkFormSidebar", "チェックフォーム");
};
