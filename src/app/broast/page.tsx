import Link from "next/link";

const Broast = () => {
  return (
    <div className="bg-red-800 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-8xl font-bold text-black mt-0">Chicken Broast</h1>

      <div className="imageBurger bg-[url('/broast.jfif')] mt-12 p-44 bg-cover bg-center w-64 h-64 rounded-lg shadow-lg mx-auto border-4 border-blue"></div>

      <Link href="/" className="mt-8 text-lg font-bold text-black text-4xl hover:text-yellow-400">Go To Home Page</Link>
    </div>
  );
};

export default Broast ;  