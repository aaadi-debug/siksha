"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Breadcrumbs2 from "../components/Breadcrumbs2";
import DynamicThemeButton from "../components/DynamicThemeButton";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export default function ForgetPasswordPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [step, setStep] = useState(1); // 1: Email, 2: OTP, 3: Password
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const email = watch("email");
  const otp = watch("otp");
  const newPassword = watch("newPassword");

  // Simulated Backend Error Handling
  const handleBackendError = (status) => {
    if (status >= 300 && status < 400) return "Redirect error. Try again.";
    if (status >= 400 && status < 500)
      return "Invalid request. Please check inputs.";
    if (status >= 500) return "Server error. Please try later.";
    return "An unknown error occurred.";
  };

  // Simulated API Calls
  const fakeApiCall = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomStatus = [200, 302, 400, 500][
          Math.floor(Math.random() * 4)
        ];
        if (randomStatus === 200) resolve({ ok: true, status: 200 });
        else reject({ ok: false, status: randomStatus });
      }, 500);
    });
  };

  // Password Strength Checker
  const checkPasswordStrength = (value) => {
    if (value.length < 6) return setPasswordStrength("Weak 🔴");
    if (
      /[A-Z]/.test(value) &&
      /[0-9]/.test(value) &&
      /[^A-Za-z0-9]/.test(value)
    )
      return setPasswordStrength("Strong ✅");
    return setPasswordStrength("Medium 👍");
  };

  // Handle Send OTP / Verify OTP / Reset Password
  const onSubmit = async (data) => {
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await fakeApiCall();

      if (!response.ok) throw new Error(handleBackendError(response.status));

      if (step === 1) setStep(2); // Move to OTP
      else if (step === 2) setStep(3); // Move to Password
      else {
        setIsSubmitting(true);
        setTimeout(() => {
          console.log("Final Data", data);
          setIsSubmitting(false);
          setIsSubmitted(true);
          reset();
          setTimeout(() => {
            setIsSubmitted(false);
            window.location.href = "/login";
          }, 3000);
        }, 2000);
      }
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Dynamic Button Text
  const getButtonText = () => {
    if (isLoading) {
      if (step === 1) return "Sending OTP...";
      if (step === 2) return "Verifying OTP...";
      if (step === 3) return "Resetting Password...";
    } else {
      if (step === 1) return "Send OTP";
      if (step === 2) return "Verify OTP";
      if (step === 3) return "Reset Password";
    }
  };

  return (
    <div
      className="pt-20 max-sm:pt-16"
      style={{
        backgroundImage: `url('/assets/bg_elem/landing-page-bg.jpg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="lg:px-10 px-6 py-10">
        <Breadcrumbs2
          breadcrumbs={[{ title: "Login", link: "" }]}
          linkColor="text-tertiary"
          activeColor="text-gray-500"
        />
      </div>
      <div className="lg:px-10 px-6">
        <div className="grid gap-6 grid-cols-2 max-sm:grid-cols-1">
          <div className="relative">
            <img
              src="/assets/images/new/landing-page-girl.png"
              alt="Landing Page Student Image"
              className="absolute z-10 bottom-0 2xl:w-[70%] xl:w-[80%] lg:w-[90%] md:w-[100%] max-sm:hidden"
            />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md mb-20 mt-40 max-sm:mt-0">
            <h2 className="text-2xl font-semibold text-center mb-4">
              Forget Password
            </h2>

            {errorMessage && (
              <p className="text-red-500 text-sm text-center mb-2">
                {errorMessage}
              </p>
            )}

            {isSubmitted ? (
              <div className="flex flex-col justify-center items-center gap-2">
                <img
                  src="/assets/animated_gif/tick.gif"
                  alt="Success"
                  className="w-24 h-24"
                />
                <span className="font-semibold text-xl text-green-500">
                  Password Reset Successfully!
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Invalid email",
                      },
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* OTP Field (Appears after sending OTP) */}
                {step >= 2 && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      OTP
                    </label>
                    <input
                      type="text"
                      placeholder="Enter OTP(Sent to your provided email)"
                      {...register("otp", { required: "OTP is required" })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                    />
                    {errors.otp && (
                      <p className="text-red-500 text-xs">
                        {errors.otp.message}
                      </p>
                    )}

                    {/* Resend OTP Button */}
                    <div className="text-right">
                      <button
                        type="button"
                        className="text-blue-600 text-sm hover:underline"
                      >
                        Resend OTP
                      </button>
                    </div>
                  </div>
                )}

                {/* New Password Field (Appears after OTP verification) */}
                {step === 3 && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Create New Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Create New Password"
                        {...register("newPassword", {
                          required: "Password is required",
                          minLength: {
                            value: 6,
                            message: "Password Must be at least 6 characters",
                          },
                          onChange: (e) =>
                            checkPasswordStrength(e.target.value),
                        })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-5 text-gray-500 hover:text-gray-700"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOffIcon size={20} />
                        ) : (
                          <EyeIcon size={20} />
                        )}
                      </button>
                    </div>
                    <p className="text-xs mt-1 text-gray-600">
                      Strength: {passwordStrength}
                    </p>
                    {errors.newPassword && (
                      <p className="text-red-500 text-xs">
                        {errors.newPassword.message}
                      </p>
                    )}
                  </div>
                )}

                {/* Dynamic Button (Send OTP / Verify OTP / Reset Password) */}
                <div className="flex gap-2 justify-center items-center">
                  <DynamicThemeButton
                    type="submit"
                    disabled={isSubmitting || isLoading}
                  >
                    {getButtonText()}
                  </DynamicThemeButton>

                  {isSubmitting && (
                    <img
                      src="/assets/siksha-preloader/4.gif"
                      className="w-16"
                    />
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
