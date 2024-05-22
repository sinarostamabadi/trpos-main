import { Button } from "../../../../../../components/button";
import CheckCircleLight from "../../../../../../assets/images/CheckCircleLight.svg";

export const StepThreeIndividual = () => {
  return (
    <>
      <div className="flex flex-col gap-y-3 items-center text-center mb-3">
        <img src={CheckCircleLight} width={50} className="mx-auto" />
        <span className="text-xl font-bold">
          Tebrikler Başvurunuz Alınmıştır!
          <br /> Şimdi Sıra Bizde.
        </span>
        <p className="text-base-content-60">
          Verdiğiniz bilgileri kontrol edip, size en kısa sürede e-posta ile
          bilgi vereceğiz.
        </p>
      </div>

      <Button variant="primary" shape="full" className="my-3">
        Tamam
      </Button>
    </>
  );
};
