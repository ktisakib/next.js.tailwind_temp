import { useTheme } from "next-themes";
import React from "react";

const Nav = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div
      className='cursor-pointer border-2 px-6 py-4 rounded-lg text-center'
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? "Dark" : "Light"}
    </div>
  );
};

export default Nav;
