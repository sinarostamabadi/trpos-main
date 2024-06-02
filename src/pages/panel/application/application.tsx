import { ReactNode, useEffect, useState } from "react";
import { CreateApplication } from "./components/create-application";
import { StepOneIndividual } from "./components/form/individual/step-one-individual";
import { StepTwoIndividual } from "./components/form/individual/step-two-individual";
import { StepThreeIndividual } from "./components/form/individual/step-three-individual";
import { CreateIndividual } from "./modal/individual/create";
import { CreateCorporate } from "./modal/corporate/create";
import { StepOneCorporate } from "./components/form/corporate/step-one-corporate";
import { StepTwoCorporate } from "./components/form/corporate/step-two-corporate";
import { StepThreeCorporate } from "./components/form/corporate/step-three-corporate";
import { StepFourCorporate } from "./components/form/corporate/step-four-corporate";
import { StepFiveCorporate } from "./components/form/corporate/step-five-corporate";
import { ApplicationGrid } from "./components/grid";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks";
import { getAllUserCustomer } from "../../../redux/actions/settings/user-customer";


const Application = () => {
  const { info:userCustomerData }=useAppSelector(state => state.userCustomerSlice);
  const { step : companyApplicationStep } = useAppSelector(state => state.companyApplicationSlice);

  console.log(companyApplicationStep);


  const [individualStep, setIndividualStep] = useState(1);
  const [isShowCreatePage, setIsShowCreatePage] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState<
    "individual" | "corporate" | ""
  >("");

  const dispatch=useAppDispatch();

  useEffect(() => {
    setIndividualStep(1);
  }, []);

  useEffect(() => {
    dispatch(getAllUserCustomer());
  } , []);

  useEffect(() => {
    if(userCustomerData.length) {
      setIsShowCreatePage(false);
    }
  } , [userCustomerData]);

  const individual: Record<number, ReactNode> = {
    1: <StepOneIndividual />,
    2: <StepTwoIndividual />,
    3: <StepThreeIndividual />,
  };
  const corporate: Record<number, ReactNode> = {
    1: <StepOneCorporate />,
    2: <StepTwoCorporate />,
    3: <StepThreeCorporate />,
    4: <StepFourCorporate />,
    5: <StepFiveCorporate />,
  };

  const individualModalTitles: Record<number, string> = {
    1: "Bireysel Başvuru",
    2: "Gerekli Belgeler",
  };
  const corporateModalTitles: Record<number, string> = {
    1: "Kurumsal Başvuru",
    2: "Kurumsal Başvuru",
    3: "Yetkili Bilgileri",
    4: "Gerekli Belgeler",
  };

  return (
    <>
      <CreateIndividual
        state={isModalOpen == "individual"}
        current={individualStep}
        title={individualModalTitles[individualStep]}
        subTitle={individualStep != 3 ? "Lütfen formu doldurunuz." : ""}
        hasCloseButton={individualStep != 3}
        onCloseModal={() => setIsModalOpen("")}
      >
        {individual[individualStep]}
      </CreateIndividual>
      <CreateCorporate
        state={isModalOpen == "corporate"}
        current={companyApplicationStep !}
        title={corporateModalTitles[companyApplicationStep !]}
        subTitle={companyApplicationStep ! != 5 ? "Lütfen formu doldurunuz." : ""}
        hasCloseButton={companyApplicationStep ! != 5}
        onCloseModal={() => setIsModalOpen("")}
      >
        {corporate[companyApplicationStep !]}
      </CreateCorporate>
      {!isShowCreatePage && (
        <ApplicationGrid setShow={(type : typeof isModalOpen) =>setIsModalOpen(type)} />
      )}
      {isShowCreatePage && (
        <CreateApplication createTypeHandler={(type) => setIsModalOpen(type)} />
      )}
    </>
  );
};

export default Application;
