/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAppContext } from "@/app/AppProvider";
import {
  loginBodyType,
  registerResType,
} from "@/schemaValidations/authe.schema";
import authApiRequest from "@/HttpRequest/authRequest";
import { handleErrorApi } from "@/lib/utils";
import { useRouter } from "next/navigation";

const cx = classNames.bind(styles);

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

function FormLogin() {
  const router = useRouter();
  const { setUser } = useAppContext();
  // 1. Define your form.
  const form = useForm<loginBodyType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: loginBodyType) {
    try {
      const result = await authApiRequest.login(values);
      await authApiRequest.auth({ data: result.payload as registerResType });
      setUser((result.payload as any).data.account);
      router.push("/admin");
    } catch (error: any) {
      console.log(error);
      handleErrorApi({ error, setError: form.setError });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cx("form-login-wrap")}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="email của bạn..."
                  {...field}
                  className={cx("input")}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mật khẩu</FormLabel>
              <FormControl>
                <Input
                  placeholder="mật khẩu của bạn..."
                  {...field}
                  className={cx("input")}
                  type="password"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Đăng nhập</Button>
      </form>
    </Form>
  );
}

export default FormLogin;
