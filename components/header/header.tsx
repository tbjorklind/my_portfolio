import Link from "next/link";

const navLinks = [
  {
    href: "#home",
    title: "Home",
  },
  {
    href: "#about",
    title: "About me",
  },
  {
    href: "#skills",
    title: "Skills",
  },
  {
    href: "#projects",
    title: "Projects",
  },
  {
    href: "#CV",
    title: "CV",
  },
  {
    href: "#Contact",
    title: "Contact",
  },
];

const Header = () => {
  return (
    <header className="flex justify-between items-center p-5">
      <div className="header-left">
        <h1 className="text-[2.1rem] font-bold">Tanja Björklind</h1>
        <p className="text-[1.rem] ml-[8px]">Front End Developer</p>
      </div>

      <nav className="header-right">
        <ul className="flex md:flex-row list-none md:mt-0">
          {navLinks.map((navLink) => {
            return (
              <li className="mr-5">
                <Link
                  href={navLink.href}
                  className="text-m transition-colors duration-300 hover:text-black"
                >
                  {navLink.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
