import { ReactNode, useState } from "react";
import { CreateApplication } from "./components/create-application";
import { StepOneIndividual } from "./components/form/individual/step-one-individual";
import { StepTwoIndividual } from "./components/form/individual/step-two-individual";
import { StepThreeIndividual } from "./components/form/individual/step-three-individual";
import { CreateIndividual } from "./modal/individual/create";
// import { NoContentApplication } from "./components/no-content";

const Application = () => {
  const [individualStep, setIndividualStep] = useState(1);
  const [corporateStep, setCorporateStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState<
    "individual" | "corporate" | ""
  >("");

  const individual: Record<number, ReactNode> = {
    1: <StepOneIndividual />,
    2: <StepTwoIndividual />,
    3: <StepThreeIndividual />,
  };

  const individualModalTitles: Record<number, string> = {
    1: "Bireysel Başvuru",
    2: "Gerekli Belgeler",
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
      <CreateApplication createTypeHandler={(type) => setIsModalOpen(type)} />
    </>
  );
};

export default Application;
