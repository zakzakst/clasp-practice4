import { menuInit_ } from "./utils/spreadsheet/menuInit";

const onOpen = () => {
  menuInit_([
    {
      label: "チェックフォーム",
      name: "showCheckForm_",
    },
  ]);
};
