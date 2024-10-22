"use client";

import delay from "delay";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ZodError } from "zod";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useAuthForm = <T extends Record<string, any>>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validationSchema: any,
  redirectUrl: string
) => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<T>();
  const [isLoading, setIsLoading] = useState(false);
  const [networkError, setNetworkError] = useState("");
  const [isClosedModel, setIsClosedModel] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ [key: string]: string | null }>({});

  const onSubmit = async (data: T) => {
    setNetworkError("");
    try {
      setIsLoading(true);
      setErrors({});
      await validationSchema.parseAsync(data);
      await delay(3000);
      router.push(redirectUrl);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error instanceof ZodError) {
        setIsLoading(false);
        const newErrors: { [key: string]: string | null } = {};
        error.errors.forEach((err) => {
          newErrors[err.path[0]] = err.message;
        });
        setErrors(newErrors);
      } else {
        setIsLoading(false);
        setNetworkError(error.message);
        setIsClosedModel(true);
      }
    }
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    isLoading,
    networkError,
    isClosedModel,
    setIsClosedModel,
    errors,
  };
};
