import TrubotLogo from '../../assets/TrubotLogo.png'
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <header className="sticky top-0 z-50 w-full bg-background-light/80 backdrop-blur-md dark:bg-background-dark/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* Logo Section */}
          <a className="flex items-center gap-2" href="#">
            <img src={TrubotLogo} alt="Trubot Electronics" className="h-10 w-auto" />
            <span className="text-2xl text-orange-500 tracking-tight">
              Trubot Electronics
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-text-light/80 dark:text-text-dark/80">
            <a className="transition-colors hover:text-orange-500" href="#">
              Shop
            </a>
            <a className="transition-colors hover:text-orange-500" href="#">
              Repairs
            </a>
            <a className="transition-colors hover:text-orange-500" href="#">
              Support
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            {/* Appointment Button */}
            <a
              className="hidden md:block rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 px-5 py-2.5 text-sm font-semibold text-white shadow-primary-glow transition-transform hover:scale-105"
              href="#"
            >
              Book Appointment
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex md:hidden h-10 w-10 items-center justify-center rounded-full text-text-light/60 transition-colors hover:bg-subtle-light hover:text-text-light dark:text-text-dark/60 dark:hover:bg-subtle-dark dark:hover:text-text-dark"
            >
              <span className="material-symbols-outlined text-2xl">
                {menuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden bg-background-light dark:bg-background-dark px-4 pb-4">
            <nav className="flex flex-col space-y-3 text-sm font-medium text-text-light/80 dark:text-text-dark/80">
              <a
                href="#"
                className="block rounded-md px-2 py-2 hover:bg-orange-50 dark:hover:bg-gray-800 hover:text-orange-500"
              >
                Shop
              </a>
              <a
                href="#"
                className="block rounded-md px-2 py-2 hover:bg-orange-50 dark:hover:bg-gray-800 hover:text-orange-500"
              >
                Repairs
              </a>
              <a
                href="#"
                className="block rounded-md px-2 py-2 hover:bg-orange-50 dark:hover:bg-gray-800 hover:text-orange-500"
              >
                Support
              </a>
              <a
                href="#"
                className="block w-full text-center rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 px-5 py-2.5 text-sm text-white shadow-primary-glow hover:scale-105 transition-transform"
              >
                Book Appointment
              </a>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};


export default Header