import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-slate-500 py-4">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-white font-bold text-lg"
            >
              Snowtooth Mountain
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link
              href="/"
              className="text-white hover:text-blue-300"
            >
              Home
            </Link>
            <Link
              href="/mountain"
              className="text-white hover:text-blue-300"
            >
              The Mountain
            </Link>
            <a
              href="/hotels"
              className="text-white hover:text-blue-300"
            >
              Hotels
            </a>
            <a
              href="/contact"
              className="text-white hover:text-blue-300"
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
