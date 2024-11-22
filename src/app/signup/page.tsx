"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, SignUpSchemaType } from "@/lib/types";
const SignUp = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(signUpSchema) });
  const onSubmit: SubmitHandler<SignUpSchemaType> = async (data) => {
    const { username, email, password } = data;
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    alert(username + " " + email + " " + password);
    reset();
  };
  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="pradeep" {...register("username")} />
        {errors.username && <span>{errors.username.message}</span>}
        <input placeholder="pradeep@gmail.com" {...register("email")} />
        {errors.email && <span>{errors.email.message}</span>}
        <input placeholder="****" {...register("password")} />
        {errors.password && <span>{errors.password.message}</span>}
        <input type="password" placeholder="****" {...register('confirmpassword')}  />
        {errors.confirmpassword && <span>{errors.confirmpassword.message}</span>}
        <button disabled={isSubmitting} type="submit">
          Create account
        </button>
      </form>
    </main>
  );
};

export default SignUp;
