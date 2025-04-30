/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import classNames from "classnames/bind";
import styles from "./Register.module.scss";
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
import { useRouter } from "next/navigation";
import { useAppContext } from "@/app/AppProvider";
import {
  registerBody,
  registerBodyType,
  registerResType,
} from "@/schemaValidations/authe.schema";
import authApiRequest from "@/HttpRequest/authRequest";
import { handleErrorApi } from "@/lib/utils";

const cx = classNames.bind(styles);

function FormRegister() {
  const router = useRouter();
  const { setUser } = useAppContext();
  // 1. Define your form.
  const form = useForm<registerBodyType>({
    resolver: zodResolver(registerBody),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: registerBodyType) {
    try {
      const result = await authApiRequest.register(values);
      await authApiRequest.auth({ data: result.payload as registerResType });
      setUser((result.payload as any).data.account);
      router.push("/");
    } catch (error: any) {
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
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tên đăng nhập</FormLabel>
              <FormControl>
                <Input
                  placeholder="Tên của bạn..."
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Email của bạn..."
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
                  placeholder="Mật khẩu của bạn..."
                  {...field}
                  className={cx("input")}
                  type="password"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nhập lại mật khẩu</FormLabel>
              <FormControl>
                <Input
                  placeholder="Nhập lại mật khẩu của bạn..."
                  {...field}
                  className={cx("input")}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Đăng ký</Button>
      </form>
    </Form>
  );
}

export default FormRegister;
