import { useState } from "react"
import { Button } from "../../../../components/button"
import OtpInput from 'react-otp-input';
import { dataState } from "../types/login.types";

type Props={
    data:dataState
}

export const CheckOtp:React.FC<Props> = ({
    data
} : Props) => {

    const [otp , setOtp]=useState<string>("");

    return (
        <div className="w-full max-w-[500px] sm:bg-actual-white sm:p-8 rounded-2.5xl sm:shadow-sm">
                            <div>
                                <h1 className='xl:text-3xl text-base-content font-semibold'>
                                ورود
                                </h1>
                                <p className='text-base-content-light mt-1'>
                                    لطفا کد ارسالی به شماره تلفن
                                    <span lang="en" className="text-sm font-semibold mx-1 border-b">{data.payload.phoneNumber}</span>
                                    را وارد کنید
                                </p>
                            </div>
                            <div className="w-full h-full flex flex-col justify-center items-center mt-6">
                                <OtpInput
                                    value={otp}
                                    onChange={setOtp}
                                    numInputs={6}
                                    renderSeparator={<span className="mx-1">-</span>}
                                    renderInput={(props) => <input {...props} />}
                                    inputType="tel"
                                    inputStyle={{width:"17%" , height:50 , boxShadow:"none" , border:"1px solid rgb(200,200,200)" , borderRadius:5}}
                                />
                                <div className="mt-6">
                                    <Button variant="primary" shape="wide">
                                        تایید و ادامه
                                    </Button>
                                </div>
                            </div>
                        </div>
    )
}