import { Link } from "react-router-dom";
import Img404 from "../../assets/images/404.png";
import { Button } from "../../components/button";

const NotFound = () => {
  return (
    <div className="flex flex-col gap-y-8 items-center">
      <img src={Img404} width={600} className="mx-auto mt-20" />
      <span className="text-info lg:text-3xl md:text-2xl text-xl">
        Aradığınız sayfayı bulamıyoruz.
      </span>
      <Link to={"/dashboard"}>
        <Button
          variant="info"
          className="mx-auto !text-actual-white"
          shape="wide"
        >
          Panele dön
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
