import { Button } from "../../../components/button";
import {
  IconArrowRight,
  IconPlus,
} from "../../../components/icons/icons";
import { Modal } from "../../../components/modal";
import { useEffect, useState } from "react";
import { Divider } from "../../../components/divider";
import { Input } from "../../../components/input";
import { SelectInput } from "../../../components/select";
import { CheckBox } from "../../../components/checkboxes";
import { FileUploader } from "../../../components/uploader";
import { NoContentInstitutionalWebManagement } from "./components/no-content";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks";
import { getAllWebsite } from "../../../redux/actions/institutional/website";
import { CreateInstitutionalWebsiteModal } from "./modal/create";
import { TopLoader } from "../../../components/top-loader";
import { GridInstitutionalWebManagement } from "./components/grid";

const WebManagement: React.FC = () => {
  const { info:websites }=useAppSelector(state => state.websiteSlice);
  const { isContentLoading }=useAppSelector(state => state.contentLoadingSlice);

  console.log(websites);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const dispatch=useAppDispatch();

  useEffect(() => {
    dispatch(getAllWebsite({
      pageNumber:0,
      pageSize:0
    }));
  } , []);

  const closeModalHandler = () => {
    isModalOpen && setIsModalOpen(false);
  };

  

  return (
     <>
     {
       isContentLoading ? <TopLoader /> : (
         websites.length ? <GridInstitutionalWebManagement setIsOpenModal={setIsModalOpen} /> :
         <NoContentInstitutionalWebManagement setIsOpenModal={setIsModalOpen} />
       )
     }
     <CreateInstitutionalWebsiteModal state={isModalOpen} onCloseModal={closeModalHandler} />
    </>
  )
};

export default WebManagement;
