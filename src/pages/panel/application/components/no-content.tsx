import PlusFillBlue from "../../../../assets/images/PlusFillBlue.svg";

export const NoContentApplication = () => {
  return (
    <div className="p-8">
      <div className="mb-16">
        <p className="font-semibold text-lg mb-5">Kurumsal</p>
        <p className="flex gap-x-5 items-center justify-center h-[200px] w-[450px] bg-actual-white rounded-3xl cursor-pointer">
          <img src={PlusFillBlue} width={50} />
          <div className="font-semibold">Yeni Kurumsal Başvuru</div>
        </p>
      </div>
      <div className="mb-10">
        <p className="font-semibold text-lg mb-5">Bireysel</p>
        <p className="flex gap-x-5 items-center justify-center h-[200px] w-[450px] bg-actual-white rounded-3xl cursor-pointer">
          <img src={PlusFillBlue} width={50} />
          <div className="font-semibold">Yeni Bireysel Başvuru</div>
        </p>
      </div>
    </div>
  );
};
