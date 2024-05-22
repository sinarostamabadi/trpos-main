import { IconFileUpload } from "../icons/icons";
import { UploaderProps } from "./uploader.types";

export const FileUploader: React.FC<UploaderProps> = ({ title, warning }) => {
  return (
    <div className="w-full px-4 py-7 flex justify-center items-center border-2 border-dashed to-base-content-20 rounded-2xl">
      <label
        htmlFor="FileInput"
        className="text-center flex flex-col justify-center items-center gap-1 cursor-pointer"
      >
        <IconFileUpload />
        <p className="text-sm">{title ? title : "Dekont Yükle"}</p>
        {warning && <span className="text-error font-medium text-sm">{warning}</span>}
        <p className="text-xs text-base-content-40">Sürükle bırak ya da Seç</p>
      </label>
      <input type="file" name="" id="FileInput" className="hidden" />
    </div>
  );
};
