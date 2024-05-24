import { Button } from "../../../../../../components/button";
import { FileUploader } from "../../../../../../components/uploader";

export const StepFourCorporate = () => {
  return (
    <form className="pe-2 mt-3">
      <div className="flex flex-col gap-y-3 mb-3">
        <FileUploader id="Kartı" title="Kimlik Kartı Ön Yüz" />
        <FileUploader id="Levhası" title="Vergi Levhası" />
        <FileUploader id="İmza" title="İmza Sirküsü" />
        <FileUploader
          id="Mobil"
          title="Hesap Dekontu - Mobil Bankacılık Ekran Görüntüsü"
        />
      </div>

      <Button variant="primary" shape="full" className="my-3">
        Devam Et
      </Button>
    </form>
  );
};
