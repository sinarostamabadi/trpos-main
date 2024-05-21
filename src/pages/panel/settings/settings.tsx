import {
  IconArrowRight,
  IconEmail,
  IconMessages,
  IconPasswordReload,
  IconPen,
  IconPhone,
  IconVoicemail,
} from "../../../components/icons/icons";
import { NumberSelectInput } from "../../../components/number-select";
import { Toggle } from "../../../components/toggle";

const Settings = () => {
  return (
    <div className="outlet grid lg:grid-cols-2 grid-rows-2 gap-8 m-8 grid-cols-1">
      {/* begin:: First row */}
      <div className="bg-actual-white rounded-2xl p-8">
        <p className="flex flex-col">
          <span className="font-bold">Oturum Açma Seçenekleriniz</span>
          <span className="subTitle_text text-sm text-base-content-40 mt-2 font-light">
            Bilgilerinizin güncel olduğundan emin olun.
          </span>
        </p>
        <div className="flex flex-col gap-y-5 mt-8">
          <div className="border-b flex justify-between pb-5">
            <div className="flex gap-x-2">
              <IconPhone width={20} className="mt-1" />
              <div className="flex flex-col">
                <span className="text-sm font-medium">Telefon Numaranız</span>
                <span className="subTitle_text text-xs font-light text-base-content-40">
                  Son değiştirme: 7 Eylül 2023
                </span>
              </div>
            </div>
            <div className="flex gap-x-1">
              <span className="me-2 text-sm font-medium mt-3 inline-block">
                +90 552 895 67 07
              </span>
              <IconPen className="mt-3 cursor-pointer text-primary" />
            </div>
          </div>
          <div className="border-b flex justify-between pb-5">
            <div className="flex gap-x-2">
              <IconEmail width={20} className="mt-1" />
              <div className="flex flex-col">
                <span className="text-sm font-medium">E-Posta Adresiniz</span>
                <span className="subTitle_text text-xs font-light text-base-content-40">
                  Son değiştirme: 7 Eylül 2023
                </span>
              </div>
            </div>
            <div className="flex gap-x-1">
              <span className="me-2 text-sm font-medium mt-3 inline-block">
                bestami.coban@raven.com.tr
              </span>
              <IconPen className="mt-3 cursor-pointer text-primary" />
            </div>
          </div>
          <div className="border-b flex justify-between pb-5">
            <div className="flex gap-x-2">
              <IconPhone width={20} className="mt-1" />
              <div className="flex flex-col">
                <span className="text-sm font-medium">Şifreniz</span>
                <span className="subTitle_text text-xs font-light text-base-content-40">
                  Son değiştirme: Az Önce
                </span>
              </div>
            </div>
            <div className="flex gap-x-1">
              <span className="me-2 text-sm font-medium mt-3 inline-block">
                ********
              </span>
              <IconPen className="mt-3 cursor-pointer text-primary" />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-x-2">
              <IconPasswordReload width={20} className="mt-1" />
              <div className="flex flex-col">
                <span className="text-sm font-medium">
                  Şifre Güncelleme Sıklığı
                </span>
                <span className="subTitle_text text-xs font-light text-base-content-40">
                  Şifrenizi belirli aralıklarla güncelleyin.
                </span>
              </div>
            </div>
            <div className="flex gap-x-1">
              <NumberSelectInput
                isBorderless
                placeholder="Se..."
                options={[
                  { value: 3, label: "3 Ay" },
                  { value: 6, label: "6 Ay" },
                  { value: 12, label: "12 Ay" },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-actual-white rounded-2xl p-8">
        <p className="flex flex-col">
          <span className="font-bold">Başarısız Giriş Denemeleri</span>
          <span className="subTitle_text text-sm text-base-content-40 mt-2 font-light">
            Bilgilerinizin güncel olduğundan emin olun.
          </span>
        </p>
        <div className="flex flex-col gap-y-5 mt-8">
          <div className="border-b flex justify-between pb-5">
            <div className="flex gap-x-2">
              <div className="flex flex-col">
                <span className="text-sm font-medium">
                  Şifre Denemesi Hatası
                </span>
                <span className="subTitle_text text-xs font-light text-base-content-60">
                  17.04.2024 - 11:46:12
                </span>
              </div>
            </div>
            <div className="flex gap-x-1 items-baseline">
              <span className="me-2 text-xs font-normal mt-3 text-base-content-60 inline-block">
                Platform
              </span>
              <p
                className="subTitle_text bg-error text-actual-white text-sm font-medium h-6
                px-2 py-0.5 rounded-lg"
              >
                WEB Panel
              </p>
            </div>
          </div>
          <div className="border-b flex justify-between pb-5">
            <div className="flex gap-x-2">
              <div className="flex flex-col">
                <span className="text-sm font-medium">
                  Şifre Denemesi Hatası
                </span>
                <span className="subTitle_text text-xs font-light text-base-content-60">
                  17.04.2024 - 11:46:12
                </span>
              </div>
            </div>
            <div className="flex gap-x-1 items-baseline">
              <span className="me-2 text-xs font-normal mt-3 text-base-content-60 inline-block">
                Platform
              </span>
              <p
                className="subTitle_text bg-error text-actual-white text-sm font-medium h-6
                px-2 py-0.5 rounded-lg"
              >
                WEB Panel
              </p>
            </div>
          </div>
          <div className="border-b flex justify-between pb-5">
            <div className="flex gap-x-2">
              <div className="flex flex-col">
                <span className="text-sm font-medium">
                  Şifre Denemesi Hatası
                </span>
                <span className="subTitle_text text-xs font-light text-base-content-60">
                  17.04.2024 - 11:46:12
                </span>
              </div>
            </div>
            <div className="flex gap-x-1 items-baseline">
              <span className="me-2 text-xs font-normal mt-3 text-base-content-60 inline-block">
                Platform
              </span>
              <p
                className="subTitle_text bg-error text-actual-white text-sm font-medium h-6
                px-2 py-0.5 rounded-lg"
              >
                WEB Panel
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-x-2">
              <div className="flex flex-col">
                <span className="text-sm font-medium">
                  Şifre Denemesi Hatası
                </span>
                <span className="subTitle_text text-xs font-light text-base-content-60">
                  17.04.2024 - 11:46:12
                </span>
              </div>
            </div>
            <div className="flex gap-x-1 items-baseline">
              <span className="me-2 text-xs font-normal mt-3 text-base-content-60 inline-block">
                Platform
              </span>
              <p
                className="subTitle_text bg-error text-actual-white text-sm font-medium h-6
                px-2 py-0.5 rounded-lg"
              >
                WEB Panel
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* end:: First row */}

      {/* begin:: Second row */}
      <div className="bg-actual-white rounded-2xl p-8 h-fit">
        <p className="flex flex-col">
          <span className="font-bold">İletişim İzinleri</span>
          <span className="subTitle_text text-sm text-base-content mt-2 font-normal">
            Bu ayarları <span className="text-primary font-medium">AÇIK</span>{" "}
            duruma getirerek{" "}
            <span className="text-success hover:text-green-400 duration-300 font-medium underline-offset-4 underline cursor-pointer">
              Ticari Tanıtım İleti İzni’ni
            </span>{" "}
            onaylamaktasınız.
          </span>
        </p>
        <div className="flex flex-col gap-y-5 mt-8">
          <div className="border-b flex justify-between pb-5">
            <div className="flex gap-x-2">
              <IconMessages width={20} />
              <span className="text-sm font-medium mt-1">SMS Mesajları</span>
            </div>

            <Toggle isChecked={true} />
          </div>
          <div className="border-b flex justify-between pb-5">
            <div className="flex gap-x-2">
              <IconEmail width={20} />
              <span className="text-sm font-medium mt-1">
                E-Posta Bültenleri
              </span>
            </div>

            <Toggle isChecked={true} />
          </div>
          <div className="border-b flex justify-between pb-5">
            <div className="flex gap-x-2">
              <IconPhone width={20} />
              <span className="text-sm font-medium mt-1">
                Telefon Çağrıları
              </span>
            </div>

            <Toggle isChecked={true} />
          </div>
          <div className="flex justify-between">
            <div className="flex gap-x-2">
              <IconVoicemail width={22} />
              <span className="text-sm font-medium mt-1">
                Sesli Yanıt Sistemi
              </span>
            </div>

            <Toggle isChecked={false} />
          </div>
        </div>
      </div>
      <div className="bg-actual-white rounded-2xl p-8 h-fit">
        <p className="flex flex-col">
          <span className="font-bold">Onayladığınız Sözleşmeler</span>
          <span className="subTitle_text text-sm text-base-content-40 mt-2 font-light">
            Bilgilerinizin güncel olduğundan emin olun.
          </span>
        </p>
        <div className="flex flex-col gap-y-5 mt-8">
          <div className="border-b flex justify-between pb-5">
            <div className="flex gap-x-2">
              <div className="flex flex-col">
                <span className="text-sm font-medium">
                  KVKK Aydınlatma Metni
                </span>
                <span className="subTitle_text text-xs font-light text-base-content-40">
                  V1.2 - 12.03.2024
                </span>
              </div>
            </div>

            <IconArrowRight className="mt-3 cursor-pointer text-primary" />
          </div>
          <div className="border-b flex justify-between pb-5">
            <div className="flex gap-x-2">
              <div className="flex flex-col">
                <span className="text-sm font-medium">Açık Rıza Metni</span>
                <span className="subTitle_text text-xs font-light text-base-content-40">
                  V1.2 - 12.03.2024
                </span>
              </div>
            </div>

            <IconArrowRight className="mt-3 cursor-pointer text-primary" />
          </div>
          <div className="flex justify-between">
            <div className="flex gap-x-2">
              <div className="flex flex-col">
                <span className="text-sm font-medium">
                  Trpos Kullanıcı Sözleşmesi
                </span>
                <span className="subTitle_text text-xs font-light text-base-content-40">
                  V1.2 - 12.03.2024
                </span>
              </div>
            </div>

            <IconArrowRight className="mt-3 cursor-pointer text-primary" />
          </div>
        </div>
      </div>
      {/* end:: Second row */}
    </div>
  );
};

export default Settings;
