import React from "react";

const Navbar = () => {
  return (
    <nav className="container flex items-center justify-between py-4">
      <div className="logo text-2xl">DVSY</div>
      <ul className="items-center gap-3 barlow-condensed-regular hidden md:flex">
        <li className="px-2 py-1 uppercase cursor-pointer bg-secondary-black rounded-md">
          Designers
        </li>
        <li className="px-2 py-1 uppercase cursor-pointer bg-secondary-black rounded-md">
          Collabs
        </li>
        <li className="px-2 py-1 uppercase cursor-pointer bg-secondary-black rounded-md">
          Events
        </li>
        <li className="px-2 py-1 uppercase cursor-pointer bg-secondary-black rounded-md">
          Blogs
        </li>
        <li className="px-2 py-1 uppercase cursor-pointer bg-secondary-black rounded-md">
          Card
        </li>
        <li className="px-2 py-1 uppercase cursor-pointer bg-salmon rounded-md text-black">
          Get in touch
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
