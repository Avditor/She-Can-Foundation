import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-[#f4f7ff]">
      <main className="flex flex-col gap-10 row-start-2 items-center sm:items-start text-center sm:text-left">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#1e4dfd]">
          Welcome to She Can Foundation!
        </h1>
        <p className="text-gray-700 text-lg max-w-xl">
          She Can Foundation is a non-profit organization dedicated to empowering underprivileged communities through education, skill development, and awareness initiatives.It focuses on creating sustainable opportunities, especially for women and youth, to help them achieve financial independence and social upliftment.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            className="rounded-full bg-[#1e4dfd] text-white hover:bg-[#163cd1] transition font-medium text-sm sm:text-base h-12 px-6 flex items-center justify-center"
            href="/login"
          >
            Login
          </a>
          <a
            className="rounded-full border border-[#1e4dfd] text-[#1e4dfd] hover:bg-[#e8edff] transition font-medium text-sm sm:text-base h-12 px-6 flex items-center justify-center"
            href="#"
          >
            Learn More
          </a>
        </div>
      </main>

      <footer className="row-start-3 flex gap-8 flex-wrap items-center justify-center text-sm text-gray-600">
        <a
          className="hover:underline hover:underline-offset-4"
          href="#"
          target="_blank"
        >
          About Us
        </a>
        <a
          className="hover:underline hover:underline-offset-4"
          href="#"
          target="_blank"
        >
          Mission
        </a>
        <a
          className="hover:underline hover:underline-offset-4"
          href="#"
          target="_blank"
        >
          Contact Us →
        </a>
      </footer>
    </div>
  );
}
