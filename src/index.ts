import { menuInit_ } from "@spreadsheet/menuInit";

const onOpen = () => {
  menuInit_([
    {
      label: "チェックフォーム",
      name: "showCheckForm_",
    },
    {
      label: "画像を挿入",
      name: "showInsertImagesDialog_",
    },
  ]);
};
