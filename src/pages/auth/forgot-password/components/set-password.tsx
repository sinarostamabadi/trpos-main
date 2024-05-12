import { Button } from "../../../../components/button";
import { Input } from "../../../../components/input";
import { SelectInput } from "../../../../components/select/select";

export const SetPassword = () => {
  return (
    <form
      // onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-[500px] sm:bg-actual-white sm:p-8 mt-[15%] rounded-2.5xl sm:shadow-sm"
    >
      <div>
        <h1 className="xl:text-2xl text-base-content font-semibold">
          Şifreni Belirle
        </h1>
        <p className="xl:text-sm text-[12px] text-base-content-light mt-1 pl-1 opacity-60">
          Sonu 6707 ile biten numarana kod gönderdik. Kimliğinden emin
          olmalıyız.
        </p>
      </div>
      <div className="mt-6">
        <div className="">
          <Input
            type="password"
            label="Yeni Şifreniz"
            className=""
            isPassword={true}
            // register={{ ...register("password") }}
          />
          <Input
            type="password"
            label="Yeni Şifreniz (Tekrardan)"
            className="mt-4"
            isPassword={true}
            // register={{ ...register("confirmPassword") }}
          />
          <SelectInput
            placeholder="Şifre Değiştirme Süresi"
            options={[
              { value: "3 ay", label: "3 ay" },
              { value: "6 ay", label: "6 ay" },
              { value: "1 yıl", label: "1 yıl" },
            ]}
            className="mt-4 w-full"
            // isError={error?.time.message}
            isError={false}
            // register={{ ...register("confirmPassword") }}
          />
        </div>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="medium"
        shape="full"
        className="mt-6"
        // isDisable={Object.keys(errors).length > 0 ? true : false}
        loadingText="giriş yapmak..."
      >
        Devam Et
      </Button>
    </form>
  );
};
