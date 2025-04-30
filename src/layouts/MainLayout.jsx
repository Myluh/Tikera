import { useState } from "react";
import { MenuButton } from "../components/MenuButton";

export function MainLayout({ children, weekdays }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav className="w-full font-medium relative">
        <div className="flex justify-between items-center px-4 py-2">
          <div className="lg:hidden flex justify-end w-full">
            <button
              onClick={toggleMenu}
              className="text-gray-200 focus:outline-none cursor-pointer"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          className={"flex flex-col items-center lg:flex-row lg:justify-center gap-4 transition-all duration-500 ease-in-out overflow-hidden lg:max-h-none lg:opacity-100 lg:py-4 " +
            (isOpen ? "max-h-150 opacity-100 py-4" : "max-h-0 opacity-0 py-0")}
        >
          {weekdays.map((weekday) => (
            <MenuButton key={weekday} weekday={weekday} toggleMenu={toggleMenu} />
          ))}
        </div>
      </nav>

      {children}
    </>
  );
}
