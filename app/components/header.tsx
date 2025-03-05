import Link from 'next/link';
import "@/app/globals.css"; // Se till att denna import finns så att dina globala stilar laddas korrekt

const Header = () => {
  return (
    <header className="flex justify-between items-center p-5">
      {/* Left part of the header */}
      <div className="header-left">
        <h1 className="text-[2.1rem]">Tanja Björklind</h1>
        <p className="text-[1.rem] ml-[12px]">Front End Developer</p>
      </div>

      {/* Used md, to make it reponsive, but dit not work - add later? */}
      {/* Make a component out of li */}
      <nav className="header-right">
        <ul className="flex md:flex-row list-none md:mt-0">
          <li className="mr-5">
            <Link href="#home" className="text-lg font-medium transition-colors duration-300 hover:text-black">
              Home
            </Link>
          </li>
          <li className="mr-5">
            <Link href="#about" className="text-lg font-medium transition-colors duration-300 hover:text-black">
              About Me
            </Link>
          </li>
          <li className="mr-5">
            <Link href="#skills" className="text-lg font-medium transition-colors duration-300 hover:text-black">
              Skills
            </Link>
          </li>
          <li className="mr-5">
            <Link href="#projects" className="text-lg font-medium transition-colors duration-300 hover:text-black">
              Projects
            </Link>
          </li>
          <li className="mr-5">
            <Link href="#cv" className="text-lg font-medium transition-colors duration-300 hover:text-black">
              CV
            </Link>
          </li>
          <li className="mr-5">
            <Link href="#contact" className="text-lg font-medium transition-colors duration-300 hover:text-black">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
