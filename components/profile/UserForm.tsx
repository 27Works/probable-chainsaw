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

  const inputClass =
    "w-full bg-[#161616] text-white border border-gray-700 rounded-md h-[48px] py-[11px] px-4";

  return (
    <div className="bg-[#161616] p-8 rounded-lg w-full max-w-[779px] space-y-6 border-white/[0.03]">
      <H1Gradient>MY PROFILE</H1Gradient>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="fullName" className="block text-white mb-1">
              Full name
            </label>
            <input
              {...register("fullName")}
              id="fullName"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-white mb-1">
              Email
            </label>
            <input
              {...register("email")}
              id="email"
              type="email"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="country" className="block text-white mb-1">
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
          </div>

          <div>
            <label htmlFor="dealer" className="block text-white mb-1">
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
          </div>
        </div>

        <div>
          <label htmlFor="radicalModel" className="block text-white mb-1">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="purchaseYear" className="block text-white mb-1">
              Year of purchase
              <span className="text-gray-500 text-sm ml-2">Optional</span>
            </label>
            <input
              {...register("purchaseYear")}
              id="purchaseYear"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="chassisNumber" className="block text-white mb-1">
              Chassis number
              <span className="text-gray-500 text-sm ml-2">Optional</span>
            </label>
            <input
              {...register("chassisNumber")}
              id="chassisNumber"
              className={inputClass}
            />
          </div>
        </div>
      </form>
      <YellowButton className="text-[14px] font-bold px-6 py-3" type="submit">
        SAVE PROFILE
      </YellowButton>
    </div>
  );
}
