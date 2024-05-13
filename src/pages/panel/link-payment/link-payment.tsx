import { Button } from "../../../components/button";
import {
  IconArrowRight,
  IconPlus,
  IconSearch,
} from "../../../components/icons/icons";

const LinkPayment: React.FC = () => {
  return (
    <>
      <div className="container w-full flex items-center gap-6 text-sm text-base-content-40 p-4">
        <p>Trpos</p>
        <IconArrowRight width={20} height={20} viewBox="0 0 20 20" />
        <p className="text-success">Ödeme Linkleri</p>
      </div>
      <div className="w-full h-full container p-4 pb-8">
        <div className="w-full h-full bg-actual-white rounded-2.5xl p-6">
          <div className="w-full h-full flex flex-col">
            <div className="w-full flex justify-between items-center">
              <div>
                <h1 className="text-[18px] text-base-content font-medium">
                  Linkleriniz
                </h1>
                <p className="text-xs text-base-content-40 mt-2">
                  Lorem, ipsum.
                </p>
              </div>
              <div className="flex items-center gap-6">
                <Button
                  isOutline={true}
                  className="text-sm !rounded-2xl !border-base-content-20 !text-base-content-20"
                >
                  <IconSearch
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    className="text-base-content"
                  />
                  Ara...
                </Button>

                <Button variant="primary" className="text-sm !rounded-2xl">
                  <IconPlus width={24} hanging={24} viewBox="0 0 24 24" />
                  Yeni Link Oluştur
                </Button>
              </div>
            </div>
            <div className="w-full flex-grow flex justify-center items-center"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LinkPayment;
