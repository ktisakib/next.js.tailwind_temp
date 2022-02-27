import { useTheme } from "next-themes";
import React from "react";

const Nav = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div
      className='cursor-pointer'
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? "Dark" : "light"}
    </div>
  );
};

export default Nav;
