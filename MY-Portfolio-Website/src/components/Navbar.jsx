function Navbar() {
  return (
    <nav className="w-full sticky top-0 bg-black/30 backdrop-blur-md z-[1000]">
      <div className="px-5 pt-[18px]  flex justify-between items-center max-w-[1440px] mx-auto">

        <div>
          <h2
            className="text-white flex gap-[2px] cursor-pointer text-2xl font-bold"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            <span>folio</span>
            <span style={{ color: "crimson" }}>.</span>
          </h2>
        </div>

        <ul className="flex gap-8">
          <li className="hidden sm:block text-[rgb(168,168,168)] cursor-pointer">Home</li>
          <li className="hidden sm:block text-[rgb(168,168,168)] cursor-pointer">Project</li>
          <li className="hidden sm:block text-[rgb(168,168,168)] cursor-pointer">About</li>
          <li className="hidden sm:block text-[rgb(168,168,168)] cursor-pointer">Contact</li>
          <li className="sm:hidden block text-[1.4rem] text-white cursor-pointer">
            <i className="ri-menu-line"></i>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;