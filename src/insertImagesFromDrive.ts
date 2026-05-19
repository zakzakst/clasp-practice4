import { getDriveImageBlob_ } from "@drive/getDriveImageBlob";
import { getDriveImages_ } from "@drive/getDriveImages";
import { showAlert_ } from "@spreadsheet/showAlert";
import { showDialog_ } from "@spreadsheet/showDialog";

const INSERT_IMAGE_MAX_SIZE = 1000000;
const INSERT_POSITION_OFFSET_X = 1000;

const insertImagesFromDrive = (driveId: string) => {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  const images = getDriveImages_(driveId);
  const insertImages = images.filter(
    (image) => image.size < INSERT_IMAGE_MAX_SIZE,
  );
  const notInsertImages = images.filter(
    (image) => image.size >= INSERT_IMAGE_MAX_SIZE,
  );

  insertImages.forEach((image, index) => {
    const blob = getDriveImageBlob_(image.id);
    sheet.insertImage(blob, 1, 1, index * INSERT_POSITION_OFFSET_X, 0);
  });

  if (notInsertImages.length > 0) {
    const fileNames = notInsertImages.map((image) => image.name);
    showAlert_(
      `サイズが大きいため、以下の画像は挿入できませんでした。\n${fileNames.join("\n")}`,
    );
  }
};

const showInsertImagesDialog_ = () => {
  showDialog_("insertImagesDialog", "ドライブから画像を挿入");
};
