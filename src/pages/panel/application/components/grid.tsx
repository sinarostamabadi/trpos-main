import PlusFillBlue from "../../../../assets/images/PlusFillBlue.svg";
// import { Button } from "../../../../components/button";
// import { IconArrowDown } from "../../../../components/icons/icons";
// import UserAvatar from "../../../../assets/images/user.png";

export const ApplicationGrid = ({ setShow }: { setShow: () => void }) => {
  return (
    <div className="mt-8">
      <div className="mb-16">
        <p className="font-semibold text-lg mb-5">Kurumsal</p>
        <div className="grid lg:grid-cols-3 gap-5">
          {/* <p className="flex flex-col gap-x-5 p-8 justify-center bg-actual-white rounded-3xl">
            <div className="flex justify-between border-b w-full pb-8">
              <div className="flex">
                <span className="rounded-full mt-3 bg-primary/5 w-10 h-10 text-primary pl-2.5 pt-2">
                  RS
                </span>
                <div className="flex flex-col gap-y-3 ml-6">
                  <span className="text-base-content-40">Firma</span>
                  <span className="text-lg font-semibold">Raven Soft</span>
                </div>
              </div>
              <Button
                isLight
                variant="primary"
                className="!text-primary !rounded-full mt-2"
              >
                <span>Devam Et</span>
                <IconArrowDown className="-rotate-90 -mt-2.5" />
              </Button>
            </div>

            <div className="flex gap-x-5 pt-8">
              <div className="flex gap-x-2">
                <img src={UserAvatar} className="rounded-full w-6 h-6" />
                <span>Bestami</span>
              </div>

              <span className="w-2 h-2 mt-2 bg-black/5 rounded-full"></span>
              <div>
                <span>Yetkiniz: </span>
                <span className="text-primary">Yönetici</span>
              </div>
            </div>
          </p>

          <p className="flex flex-col gap-x-5 p-8 justify-center bg-actual-white rounded-3xl">
            <div className="flex justify-between border-b w-full pb-8">
              <div className="flex">
                <span className="rounded-full mt-3 bg-primary/5 w-10 h-10 text-primary pl-2.5 pt-2">
                  RS
                </span>
                <div className="flex flex-col gap-y-3 ml-6">
                  <span className="text-base-content-40">Firma</span>
                  <span className="text-lg font-semibold">Raven Soft</span>
                </div>
              </div>
              <Button
                isLight
                variant="primary"
                className="!text-primary !rounded-full mt-2"
              >
                <span>Devam Et</span>
                <IconArrowDown className="-rotate-90 -mt-2.5" />
              </Button>
            </div>

            <div className="flex gap-x-5 pt-8">
              <div className="flex gap-x-2">
                <img src={UserAvatar} className="rounded-full w-6 h-6" />
                <span>Bestami</span>
              </div>

              <span className="w-2 h-2 mt-2 bg-black/5 rounded-full"></span>
              <div>
                <span>Yetkiniz: </span>
                <span className="text-primary">Yönetici</span>
              </div>
            </div>
          </p>

          <p className="flex flex-col gap-x-5 p-8 justify-center bg-actual-white rounded-3xl">
            <div className="flex justify-between border-b w-full pb-8">
              <div className="flex">
                <span className="rounded-full mt-3 bg-primary/5 w-10 h-10 text-primary pl-2.5 pt-2">
                  RS
                </span>
                <div className="flex flex-col gap-y-3 ml-6">
                  <span className="text-base-content-40">Firma</span>
                  <span className="text-lg font-semibold">Raven Soft</span>
                </div>
              </div>
              <Button
                isLight
                variant="primary"
                className="!text-primary !rounded-full mt-2"
              >
                <span>Devam Et</span>
                <IconArrowDown className="-rotate-90 -mt-2.5" />
              </Button>
            </div>

            <div className="flex gap-x-5 pt-8">
              <div className="flex gap-x-2">
                <img src={UserAvatar} className="rounded-full w-6 h-6" />
                <span>Bestami</span>
              </div>

              <span className="w-2 h-2 mt-2 bg-black/5 rounded-full"></span>
              <div>
                <span>Yetkiniz: </span>
                <span className="text-primary">Yönetici</span>
              </div>
            </div>
          </p>

          <p className="flex flex-col gap-x-5 p-8 justify-center bg-actual-white rounded-3xl">
            <div className="flex justify-between border-b w-full pb-8">
              <div className="flex">
                <span className="rounded-full mt-3 bg-primary/5 w-10 h-10 text-primary pl-2.5 pt-2">
                  RS
                </span>
                <div className="flex flex-col gap-y-3 ml-6">
                  <span className="text-base-content-40">Firma</span>
                  <span className="text-lg font-semibold">Raven Soft</span>
                </div>
              </div>
              <Button
                isLight
                variant="primary"
                className="!text-primary !rounded-full mt-2"
              >
                <span>Devam Et</span>
                <IconArrowDown className="-rotate-90 -mt-2.5" />
              </Button>
            </div>

            <div className="flex gap-x-5 pt-8">
              <div className="flex gap-x-2">
                <img src={UserAvatar} className="rounded-full w-6 h-6" />
                <span>Bestami</span>
              </div>

              <span className="w-2 h-2 mt-2 bg-black/5 rounded-full"></span>
              <div>
                <span>Yetkiniz: </span>
                <span className="text-primary">Yönetici</span>
              </div>
            </div>
          </p>

          <p className="flex flex-col gap-x-5 p-8 justify-center bg-actual-white rounded-3xl">
            <div className="flex justify-between border-b w-full pb-8">
              <div className="flex">
                <span className="rounded-full mt-3 bg-primary/5 w-10 h-10 text-primary pl-2.5 pt-2">
                  RS
                </span>
                <div className="flex flex-col gap-y-3 ml-6">
                  <span className="text-base-content-40">Firma</span>
                  <span className="text-lg font-semibold">Raven Soft</span>
                </div>
              </div>
              <Button
                variant="error"
                className="!text-actual-white !rounded-full mt-2"
              >
                Onay Bekliyor
              </Button>
            </div>

            <div className="flex gap-x-5 pt-8">
              <div className="flex gap-x-2">
                <img src={UserAvatar} className="rounded-full w-6 h-6" />
                <span>Bestami</span>
              </div>

              <span className="w-2 h-2 mt-2 bg-black/5 rounded-full"></span>
              <div>
                <span>Yetkiniz: </span>
                <span className="text-primary">Yönetici</span>
              </div>
            </div>
          </p> */}

          <span
            className="flex gap-x-5 items-center justify-center p-8 h-[220px] w-[450px] bg-actual-white rounded-3xl cursor-pointer"
            onClick={setShow}
          >
            <img src={PlusFillBlue} width={50} />
            <div className="font-semibold">Yeni Kurumsal Başvuru</div>
          </span>
        </div>
      </div>
      <div className="mb-10">
        <p className="font-semibold text-lg mb-5">Bireysel</p>
        <div className="grid lg:grid-cols-3 gap-5">
          {/* <p className="flex flex-col gap-x-5 p-8 justify-center bg-actual-white rounded-3xl">
            <div className="flex border-b w-full pb-8">
              <img src={UserAvatar} className="rounded-full w-10 h-10 mt-3" />
              <div className="flex flex-col gap-y-3 ml-6">
                <span className="text-base-content-40">İyi günler,</span>
                <span className="text-lg font-semibold">Bestami Çoban</span>
              </div>
            </div>

            <div className="flex gap-x-5 pt-8">
              <div>
                <span>Hesap No: </span>
                <span className="text-primary">1234567890</span>
              </div>
            </div>
          </p> */}
          <span
            className="flex gap-x-5 items-center justify-center h-[220px] w-[450px] bg-actual-white rounded-3xl cursor-pointer"
            onClick={setShow}
          >
            <img src={PlusFillBlue} width={50} />
            <div className="font-semibold">Yeni Bireysel Başvuru</div>
          </span>
        </div>
      </div>
    </div>
  );
};
