import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden flex flex-col">
      {/* Decorative Animated Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/2 right-[-100px] w-72 h-72 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-100px] left-1/2 w-72 h-72 bg-pink-700 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center relative z-10">
        <div className="text-3xl font-bold tracking-tight">drobb.</div>
        <nav className="space-x-6">
          <a
            href="https://drobb.in/" // ✅ Fixed link
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium hover:underline"
          >
            Learn More
          </a>
          <Link href="/login" className="text-lg font-medium hover:underline">
            Get Started
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto flex flex-col items-center justify-center flex-grow px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Empower Your Business with <span className="text-purple-400">drobb.</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mb-10">
          Welcome to the <strong>drobb Supplier Panel</strong>. Upload your catalog seamlessly and let us showcase your products to a vast network of customers. Experience a new era of product management and business growth.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <Link
            href="/login"
            className="inline-block bg-white hover:bg-gray-100 transition-colors duration-300 text-black py-4 px-8 rounded-lg text-lg font-semibold shadow-lg"
          >
            Login as Supplier
          </Link>
          <Link
            href="/register"
            className="inline-block bg-white hover:bg-gray-100 transition-colors duration-300 text-black py-4 px-8 rounded-lg text-lg font-semibold shadow-lg"
          >
            Register as Supplier
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto py-4 text-center relative z-10">
        <p className="text-sm text-gray-300">
          &copy; {new Date().getFullYear()} <span className="font-bold">drobb.</span> All rights reserved.
        </p>
      </footer>
    </div>
  );
}
