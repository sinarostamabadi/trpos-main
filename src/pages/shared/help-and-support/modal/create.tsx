import TextArea from "antd/es/input/TextArea";
import { Input } from "../../../../components/input";
import { Modal } from "../../../../components/modal";
import { SelectInput } from "../../../../components/select";
import { BaseModalProps } from "../../../../types/modal.types";
import { FileUploader } from "../../../../components/uploader";
import { Button } from "../../../../components/button";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux-hooks";
import { addTask, getAllTaskType } from "../../../../redux/actions/helpAndSupport/task";
import { useEffect, useState } from "react";
import { InputErrorComponent } from "../../../../components/inputError";
import { SelectOptionType } from "../../../../types/select-option.type";

type HelpAndSupportInputType = {
  TaskTypeId:string,
  Description:string,
  File:any,
  Title:string
}

export const CreateSupportRequest: React.FC<BaseModalProps> = ({
  state,
  onCloseModal,
}) => {
  const { taskTypes }=useAppSelector(state => state.taskSlice);

  console.log(taskTypes);

  const { isButtonLoading }=useAppSelector(state => state.buttonLoadingSlice);
  const { isSelectLoading }=useAppSelector(state => state.selectSlice);

  const [fileName , setFileName]=useState<string>("");
  const [taskTypesOption , setTaskTypeOption]=useState<SelectOptionType[] | "">("");

  const dispatch=useAppDispatch();

  useEffect(() => {
    dispatch(getAllTaskType());
  } , []);

  useEffect(() => {
    if(taskTypes.length) {
      const taskTypesSelectOptions : SelectOptionType[] = taskTypes.map((taskType) => {
        return {
          value:taskType.id,
          label:<span>{taskType.title}</span>
        }
      })

      setTaskTypeOption(taskTypesSelectOptions);
    }
  } , [taskTypes]);

  const validate=yup.object().shape({
    TaskTypeId:yup.string().required(),
    Description:yup.string().min(5 , "Açıklama 5 karakterden az olamaz.").required(),
    File:yup.mixed().required(),
    Title:yup.string().min(5 , "Başlık Bilgisi 5 karakterden az olamaz.").required()
  })

  const { register , handleSubmit , control , formState:{ errors } }=useForm<HelpAndSupportInputType>({
    resolver:yupResolver(validate),
    mode:"all"
  });

  console.log(errors);

  const onSubmit : SubmitHandler<HelpAndSupportInputType> = (data) => {
    dispatch(addTask(data , onCloseModal!));
  };

  return (
    <Modal
      state={state}
      onCloseModal={onCloseModal}
      title="Yeni Destek Talebi Oluştur"
      subTitle="Lütfen formu doldurunuz."
    >
      <form className="flex flex-col gap-3 pe-2" onSubmit={handleSubmit(onSubmit)}>
        <SelectInput placeholder="Konu" name="TaskTypeId" control={control} options={taskTypesOption ? taskTypesOption : []} error={errors.TaskTypeId?.message} isLoading={isSelectLoading} />
        <div>
          <Input label="Başlık" register={{...register("Title")}} error={errors.Title?.message} />
          {errors.Title &&
            <InputErrorComponent text={errors.Title.message} />
          }
        </div>
        <div>
          <Controller
            name="Description"
            control={control}
            render={({field}) => <TextArea rows={6} placeholder="Mesajınız" className="text_area" {...field} /> } />
            {errors.Description &&
            <InputErrorComponent text={errors.Description.message} />
            }
        </div>
        <FileUploader id="Dekont" fileName={fileName} register={{...register("File" , {
          onChange:(event) => {
            setFileName(event.target.files[0].name);
          }
        })}} />
        <Button type="submit" variant="primary" className="mt-2" isLoading={isButtonLoading}>
          Destek Talebi Oluştur
        </Button>
      </form>
    </Modal>
  );
};
