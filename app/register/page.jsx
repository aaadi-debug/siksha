"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Breadcrumbs2 from "../components/Breadcrumbs2";
import DynamicThemeButton from "../components/DynamicThemeButton";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export default function CollegesPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

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

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) return; // Prevent submission if passwords don’t match

    setIsSubmitting(true);
    setTimeout(() => {
      console.log("Signup Data", data);
      setIsSubmitting(false);
      setIsSubmitted(true);
      reset();
      setTimeout(() => {
        setIsSubmitted(false);
        window.location.href = "/login";
      }, 3000);
    }, 2000);
  };

  return (
    <div
      className="pt-20 max-sm:pt-16"
      style={{
        backgroundImage: `url('/assets/bg_elem/landing-page-bg.jpg')`,
        //   backgroundColor: "#3D52A0", // Background color
        backgroundSize: "cover", // Adjust size as needed
        backgroundRepeat: "no-repeat", // Prevent tiling
        backgroundPosition: "center", // Center the image
        backgroundBlendMode: "overlay", // Optional: blend color and image
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
          <div className="bg-white p-6 rounded-lg shadow-md mb-20">
            <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>

            {isSubmitted ? (
              <div className="flex flex-col justify-center items-center gap-2">
                <img
                  src="/assets/animated_gif/tick.gif"
                  alt="Success"
                  className="w-24 h-24"
                />
                <span>Conrats!</span>

                <span className="font-semibold text-xl text-green-500">
                  Now, You are registered with Siksha Helpline!
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Password Field */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Create Password"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 characters",
                        },
                        onChange: (e) => checkPasswordStrength(e.target.value),
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
                  {errors.password && (
                    <p className="text-red-500 text-xs">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Confirm Password Field */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm Password"
                      {...register("confirmPassword", {
                        required: "Confirm Password is required",
                        validate: (value) =>
                          value === password || "Passwords do not match",
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-5 text-gray-500 hover:text-gray-700"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? (
                        <EyeOffIcon size={20} />
                      ) : (
                        <EyeIcon size={20} />
                      )}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-xs">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="flex gap-2 justify-center items-center">
                  <DynamicThemeButton type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Registering..." : "Signup"}
                  </DynamicThemeButton>
                  {isSubmitting && (
                    <img
                      src="/assets/siksha-preloader/4.gif"
                      className="w-16"
                    />
                  )}
                </div>

                {/* Already a member? */}
                <div className="text-center">
                  Already A Member?{" "}
                  <a href="/login" className="text-prim hover:text-second">
                    Login here
                  </a>{" "}
                  it's Easy.
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
