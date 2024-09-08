import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-primary p-6">
      {/* ロゴ */}
      <div className="flex items-center flex-shrink-0 text-white">
        <span className="font-semibold text-xl tracking-tight">RAKUNI</span>
      </div>

      {/* ハンバーガーメニュー */}
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-800 hover:border-gray-800"
          type="button"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      {/* メニュー項目 */}
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:justify-end ${isOpen ? 'block' : 'hidden'}`}
      >
        <div className="lg:flex lg:space-x-4 mr-auto lg:mr-0">
          <a
            href="#about"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-800"
          >
            About
          </a>
          <a
            href="#staff"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-800"
          >
            Staff
          </a>
          <a
            href="#menu"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-800"
          >
            Menu
          </a>
          <a
            href="#access"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-800"
          >
            Access
          </a>
          <a
            href="#edu"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-800"
          >
            Education
          </a>
        </div>
      </div>
    </nav>
  );
}