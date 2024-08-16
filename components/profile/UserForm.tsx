"use client";

import React from "react";
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
  purchaseYear: z.string().optional(),
  chassisNumber: z
    .string()
    .regex(/^\d*$/, "Chassis number must contain only numbers")
    .optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function UserForm({ dealers }: { dealers: string[] }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    alert("onSubmit");
    console.log("submit data =====>>>>", data);
  };

  return (
    <div className="bg-[#161616] p-8 rounded-lg max-w-[779px] space-y-6 border-white/[0.03]">
      {/* <h1 className="font-bold text-lg border inline-block">
        <span className="bg-gradient-to-r from-[#F2CB13] to-[#E77003] text-transparent bg-clip-text">
          MY PROFILE
        </span>
      </h1> */}
      <H1Gradient>MY PROFILE</H1Gradient>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-4 "
      >
        <div className="col-span-1">
          <label htmlFor="fullName" className="block text-white mb-1">
            Full name
          </label>
          <input
            {...register("fullName")}
            id="fullName"
            className={`w-full min-w-[345px] bg-transparent text-white border border-gray-400 rounded-md h-[48px] py-[11px] px-4 ${
              errors.fullName ? "border-red-500" : ""
            }`}
          />
          {errors.fullName && (
            <span className="text-red-500 text-sm mt-1">
              {errors.fullName.message}
            </span>
          )}
        </div>

        <div className="col-span-1">
          <label htmlFor="email" className="block text-white mb-1">
            Email
          </label>
          <input
            {...register("email")}
            id="email"
            type="email"
            className={`w-full min-w-[345px] bg-transparent text-white border border-gray-400 rounded-md h-[48px] py-[11px] px-4 ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.email && (
            <span className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="col-span-1">
          <label htmlFor="country" className="block text-white mb-1">
            Country
          </label>
          <select
            {...register("country")}
            id="country"
            className="w-full min-w-[345px] bg-transparent text-white border border-gray-400 rounded-md h-[48px] py-[11px] px-4 appearance-none"
          >
            <option value="">Select a country</option>
            <option value="australia">Australia</option>
            <option value="united-kingdom">United Kingdom</option>
            <option value="canada">Canada</option>
          </select>
          {errors.country && (
            <span className="text-red-500 text-sm">
              {errors.country.message}
            </span>
          )}
        </div>

        <div className="col-span-1">
          <label htmlFor="dealer" className="block text-white mb-1">
            Dealer
          </label>
          <select
            {...register("dealer")}
            id="dealer"
            className="w-full min-w-[345px] bg-transparent text-white border border-gray-400 rounded-md h-[48px] py-[11px] px-4 appearance-none"
          >
            <option value="">Select a dealer</option>
            {dealers.map((dealer, index) => (
              <option key={index} value={dealer}>
                {dealer}
              </option>
            ))}
          </select>
          {errors.dealer && (
            <span className="text-red-500 text-sm">
              {errors.dealer.message}
            </span>
          )}
        </div>

        <div className="col-span-2">
          <label htmlFor="radicalModel" className="block text-white mb-1">
            Which Radical do you own?
          </label>
          <select
            {...register("radicalModel")}
            id="radicalModel"
            className="w-full min-w-[345px] bg-transparent text-white border border-gray-400 rounded-md h-[48px] py-[11px] px-4 appearance-none"
          >
            <option value="">Select a model</option>
            <option value="sr1">SR1</option>
            <option value="sr3">SR3</option>
            <option value="sr10">SR10</option>
          </select>
          {errors.radicalModel && (
            <span className="text-red-500 text-sm">
              {errors.radicalModel.message}
            </span>
          )}
        </div>

        <div className="col-span-1">
          <label htmlFor="purchaseYear" className="block text-white mb-1">
            Year of purchase (Optional)
          </label>
          <input
            {...register("purchaseYear")}
            id="purchaseYear"
            className="w-full min-w-[345px] bg-transparent text-white border border-gray-400 rounded-md h-[48px] py-[11px] px-4"
          />
        </div>

        <div className="col-span-1">
          <label htmlFor="chassisNumber" className="block text-white mb-1">
            Chassis number (Optional)
          </label>
          <input
            {...register("chassisNumber")}
            id="chassisNumber"
            className={`w-full min-w-[345px] bg-transparent text-white border border-gray-400 rounded-md h-[48px] py-[11px] px-4 ${
              errors.chassisNumber ? "border-red-500" : ""
            }`}
          />
          {errors.chassisNumber && (
            <span className="text-red-500 text-sm mt-1">
              {errors.chassisNumber.message}
            </span>
          )}
        </div>

        <div className="col-span-2 mt-4"></div>
      </form>
      <YellowButton className="text-[14px] font-bold" type="submit">
        SAVE PROFILE
      </YellowButton>
    </div>
  );
}
