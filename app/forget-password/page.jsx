"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Breadcrumbs2 from "../components/Breadcrumbs2";

export default function CollegesPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1); // Step 1: email, Step 2: OTP, Step 3: new password

  const onSubmit = (data) => {
    if (step === 1) {
      setIsLoading(true);
      // Simulate OTP sending delay (e.g., API call)
      setTimeout(() => {
        setIsLoading(false);
        setStep(2); // Move to OTP input after OTP is sent
      }, 2000); // Simulating a delay of 2 seconds
    } else if (step === 2) {
      // Move to Step 3 (new password input) after OTP is verified
      setStep(3);
    } else {
      console.log("All Data:", data); // On final submit, log all data
    }
  };

  return (
    <>
      <div className="pt-20 max-sm:pt-16 pb-20">
        <div className="border-red-500 bg-cover bg-center bg-no-repeat lg:px-10 px-6 py-10">
          <Breadcrumbs2
            breadcrumbs={[{ title: "Login", link: "" }]}
            linkColor="text-tertiary"
            activeColor="text-gray-500"
          />
        </div>
        <div className="lg:px-10 px-6 pb-10">
          <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-center mb-4">Forget Password</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {step === 1 && (
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Invalid email",
                      },
                    })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                </div>
              )}

              {isLoading && step === 1 && (
                <div className="text-center py-4">
                  <span className="loader"></span> {/* Add your loading spinner here */}
                  <p className="mt-2">Sending OTP...</p>
                </div>
              )}

              {step === 2 && (
                <div>
                  <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                    OTP
                  </label>
                  <input
                    type="text"
                    id="otp"
                    {...register("otp", { required: "OTP is required" })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.otp && <p className="text-red-500 text-xs">{errors.otp.message}</p>}
                </div>
              )}

              {step === 3 && (
                <div>
                  <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                    New Password
                  </label>
                  <input
                    type="password"
                    id="newPassword"
                    {...register("newPassword", { required: "New password is required" })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.newPassword && <p className="text-red-500 text-xs">{errors.newPassword.message}</p>}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              >
                {step === 1
                  ? "Reset Password"
                  : step === 2
                  ? "Verify OTP"
                  : "Submit New Password"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
