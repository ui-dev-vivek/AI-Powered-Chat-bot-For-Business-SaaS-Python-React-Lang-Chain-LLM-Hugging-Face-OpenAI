import Logo from "@/components/logo/Logo";
import { Description } from "@/components/tailgrids/core/description";
import { Input } from "@/components/tailgrids/core/input";
import { Label } from "@/components/tailgrids/core/label";
import { TextField } from "@/components/tailgrids/core/text-field";

export function Login() {
  return (
    <section className="bg-gray-50 min-h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen">
        <div className="w-full md:mt-0 sm:max-w-md xl:p-0dark:border">
          <div className="flex flex-col justify-center items-center">
            <Logo />
            <p className="font-semibold text-xl mt-2" >Welcome Back</p>
            <p className="font-light text-[12px] text-gray-500">Please enter your details to login to your account</p>
          </div>
          <div className="bg-white rounded-lg shadow  border-1 border-gray-200 mt-6">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form className="space-y-4 md:space-y-6">
                <TextField className="max-w-sm w-full mx-auto grid gap-2">
                  <Label>Email <sup className="text-red-500">*</sup></Label>
                  <Input state="default" placeholder="john.doe@example.com" />
                  <Description className="text-xs">
                    
                  </Description>
                </TextField>
                <TextField className="max-w-sm w-full mx-auto grid gap-2">
                  <Label>Password <sup className="text-red-500">*</sup></Label>
                  <Input state="default" type="password" placeholder="••••••••" />
                  <Description className="text-xs">                    
                  </Description>
                </TextField>
              </form>
            </div></div>
        </div>
      </div>
    </section>
  );
}