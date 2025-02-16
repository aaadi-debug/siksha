export default function Preloader() {
  return (
    <div className="fixed top-20 left-0 h-[100vh] w-full bg-white z-100 preloader flex justify-center items-center">
      <div className="flex flex-col justify-center items-center text-center">
        <img src="/assets/siksha-preloader/3.gif" alt="Preloader" />
        <h3 className="text-second text-lg font-medium">Siksha Helpline</h3>
      </div>
    </div>
  );
}
