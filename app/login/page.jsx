"use client";
import { useState } from "react";
<<<<<<< HEAD

import { useForm } from "react-hook-form";
import Breadcrumbs2 from "../components/Breadcrumbs2";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import DynamicThemeButton from "../components/DynamicThemeButton";

export default function CollegesPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // For showing success message
  const [isSubmitting, setIsSubmitting] = useState(false); // For managing loading state

  const {
    register,
    handleSubmit,
    reset,
=======
import { useForm } from "react-hook-form";
import Breadcrumbs2 from "../components/Breadcrumbs2";
export default function CollegesPage() {
  const {
    register,
    handleSubmit,
>>>>>>> second-account/main
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
<<<<<<< HEAD
    setIsSubmitting(true);
    setTimeout(() => {
      console.log("Login Data", data);
      setIsSubmitting(false);
      setIsSubmitted(true);
      reset();
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
      window.location.href = "/";
    }, 2000); // Simulate server request for 2 seconds

=======
    console.log("Login Data", data);
>>>>>>> second-account/main
    // Handle login logic here
  };

  return (
    <>
<<<<<<< HEAD
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
=======
      <div className="pt-20 max-sm:pt-16 pb-20">
        <div className="border-red-500 bg-cover bg-center bg-no-repeat  lg:px-10 px-6 py-10">
>>>>>>> second-account/main
          <Breadcrumbs2
            breadcrumbs={[{ title: "Login", link: "" }]}
            linkColor="text-tertiary"
            activeColor="text-gray-500"
          />
        </div>
<<<<<<< HEAD
        <div className="lg:px-10 px-6 ">
          <div className="grid gap-6 grid-cols-2 max-sm:grid-cols-1">
            <div className="relative">
              <img
                src="/assets/images/new/landing-page-girl.png"
                alt="Landing Page Student Image"
                className="absolute z-10 bottom-0 2xl:w-[70%] xl:w-[80%] lg:w-[90%] md:w-[100%] max-sm:hidden"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-20">
              <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>

              {isSubmitted ? (
                <div className="flex flex-col justify-center items-center gap-2">
                  <img
                    src="/assets/animated_gif/tick.gif"
                    alt="Success"
                    className="w-24 h-24"
                  />
                  {/* <span>Great</span> */}
                  <span className="font-semibold text-xl text-green-500">
                    You are logged in Successfully!
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-500"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
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

                  <div className="relative">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        placeholder="Enter Password"
                        {...register("password", {
                          required: "Password is required",
                          minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters",
                          },
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
                    {errors.password && (
                      <p className="text-red-500 text-xs">
                        {errors.password.message}
                      </p>
                    )}
                  </div>

                  <div className="text-sm">
                    <a
                      href="/forget-password"
                      className="text-prim hover:text-second hover:underline"
                    >
                      Forget Password?
                    </a>
                  </div>
                  <div className="flex gap-2 justify-center items-center">
                    <DynamicThemeButton type="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Logging..." : "Login"}
                    </DynamicThemeButton>
                    {isSubmitting && (
                      <img
                        src="/assets/siksha-preloader/4.gif"
                        className="w-16"
                      />
                    )}
                  </div>
                  <div className="text-center">
                    Not a member yet!{" "}
                    <a href="/register" className="text-prim hover:text-second">
                      Join us
                    </a>{" "}
                    it's free.
                  </div>
                </form>
              )}
            </div>
=======
        <div className="lg:px-10 px-6 pb-10">
          <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
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
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="text-sm"><a href="/forget-password" className="text-prim hover:text-second hover:underline">Forget Password?</a></div>


              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              >
                Login
              </button>

              <div className="text-center">Not a member yet! <a href="/register" className="text-prim hover:text-second">Join us</a> it's free.</div>
            </form>
>>>>>>> second-account/main
          </div>
        </div>
      </div>
    </>
  );
}
