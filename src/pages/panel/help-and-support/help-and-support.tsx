import { Button } from "../../../components/button";
import { IconPlus } from "../../../components/icons/icons";
import clouds from "../../../assets/images/Clouds.svg";

const HelpAndSupport = () => {
  return (
    <div className="w-full h-full container p-4 mt-4 pb-8">
      <div className="w-full bg-actual-white rounded-2.5xl p-6">
        <div className="w-full h-full flex flex-col">
          <div className="w-full flex justify-between items-center">
            <div>
              <h1 className="text-[18px] text-base-content font-medium">
                Destek Talepleriniz
              </h1>
              <p className="text-xs text-base-content-40 mt-2">Lorem, ipsum.</p>
            </div>
            <div className="flex items-center gap-6">
              <Button variant="primary" className="text-sm !rounded-2xl">
                <IconPlus width={24} hanging={24} viewBox="0 0 24 24" />
                Yeni Talep Oluştur
              </Button>
            </div>
          </div>
          <div className="w-full h-full min-h-[650px] flex-grow flex justify-center items-center">
            <div className="text-center">
              <img src={clouds} alt="" className="mx-auto" />
              <h1 className="text-base-content mt-2">
                Hiç bir detsek talebi oluşturmadın.
              </h1>
              <p className="text-xs text-base-content-40 mt-1">Şimdilik...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpAndSupport;
