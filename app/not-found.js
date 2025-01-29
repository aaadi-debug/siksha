import DynamicThemeButton from "./components/DynamicThemeButton";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-6">
    <img src="/assets/siksha-preloader/3.gif" alt="Preloader" />
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4 text-lg text-gray-600 mb-4">
        Sorry, the page you are looking for does not exist.
      </p>
      <DynamicThemeButton href="/">Go Back Home</DynamicThemeButton>
    </div>
  );
}
