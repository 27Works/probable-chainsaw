"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import YellowButton from "../ui/YellowButton";
import H1Gradient from "../ui/H1Gradient";

const formSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  country: z.string().min(1, "Country is required"),
  dealer: z.string().min(1, "Dealer is required"),
  radicalModel: z.string().min(1, "Radical model is required"),
  purchaseYear: z
    .string()
    .regex(/^\d*$/, "Purchase year must contain only numbers")
    .max(4, "Year must be between 1900 and 2024")
    .optional(),
  chassisNumber: z
    .string()
    .regex(/^\d*$/, "Chassis number must contain only numbers")
    .optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function UserForm({ dealers }: { dealers: string[] }) {
  const [userObj, setUserObj] = useState<FormData | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    // alert("Form submitted successfully");
    // console.log("submit data =====>>>>", data);
    setUserObj(data);
  };

  const inputClass =
    "w-full bg-[#161616] text-white border border-gray-700 rounded-md h-[48px] py-[11px] px-4 text-[18px]";

  const labelClass =
    "flex items-center justify-between text-white mb-1 text-[16px]";

  return (
    <div className="bg-[#161616] p-8 rounded-lg w-full max-w-[779px] space-y-6 border-white/[0.03] mb-8">
      <H1Gradient>MY PROFILE</H1Gradient>
      {userObj && (
        <ul>
          {Object.entries(userObj).map(
            ([key, value]) =>
              value && (
                <li key={key} className="font-futura-bold">
                  {key}: <span className="font-futura-light">{value}</span>
                </li>
              )
          )}
        </ul>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fullName" className={labelClass}>
              Full name
            </label>
            <input
              {...register("fullName")}
              id="fullName"
              className={inputClass}
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              Email
            </label>
            <input
              {...register("email")}
              id="email"
              type="email"
              className={inputClass}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="country" className={labelClass}>
              Country
            </label>
            <select
              {...register("country")}
              id="country"
              className={`${inputClass}`}
            >
              <option value="">Select a country</option>
              <option value="australia">Australia</option>
              <option value="united-kingdom">United Kingdom</option>
              <option value="canada">Canada</option>
            </select>
            {errors.country && (
              <p className="text-red-500 text-sm mt-1">
                {errors.country.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="dealer" className={labelClass}>
              Dealer
            </label>
            <select
              {...register("dealer")}
              id="dealer"
              className={`${inputClass} `}
            >
              <option value="">Select a dealer</option>
              {dealers.map((dealer, index) => (
                <option key={index} value={dealer}>
                  {dealer}
                </option>
              ))}
            </select>
            {errors.dealer && (
              <p className="text-red-500 text-sm mt-1">
                {errors.dealer.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="radicalModel" className={labelClass}>
            Which Radical do you own?
          </label>
          <select
            {...register("radicalModel")}
            id="radicalModel"
            className={`${inputClass} `}
          >
            <option value="">Select a model</option>
            <option value="sr1">SR1</option>
            <option value="sr3">SR3</option>
            <option value="sr10">SR10</option>
          </select>
          {errors.radicalModel && (
            <p className="text-red-500 text-sm mt-1">
              {errors.radicalModel.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="purchaseYear" className={labelClass}>
              Year of purchase
              <span className="text-[12px] text-[#B1B3B3]">Optional</span>
            </label>
            <input
              {...register("purchaseYear")}
              id="purchaseYear"
              className={inputClass}
            />
            {errors.purchaseYear && (
              <p className="text-red-500 text-sm mt-1">
                {errors.purchaseYear.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="chassisNumber" className={labelClass}>
              Chassis number
              <span className="text-[12px] text-[#B1B3B3]">Optional</span>
            </label>
            <input
              {...register("chassisNumber")}
              id="chassisNumber"
              className={inputClass}
            />
            {errors.chassisNumber && (
              <p className="text-red-500 text-sm mt-1">
                {errors.chassisNumber.message}
              </p>
            )}
          </div>
        </div>
        <div className="pt-4">
          <YellowButton
            className="text-[14px] font-futura-bold px-6 py-3 "
            type="submit"
          >
            SAVE PROFILE
          </YellowButton>
        </div>
      </form>
    </div>
  );
}
