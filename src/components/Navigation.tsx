import React, { useState, useEffect } from "react";

type linkProps = {
  title?: string;
  reference: string;
};

const Navigation = ({ title, reference }: linkProps) => {
  const [dark, setDark] = useState(false);
  const navbarDark = () => {
    if (window.scrollY > 10 && window.scrollY < window.innerHeight - 75) {
      setDark(false);
    } else if (window.scrollY >= window.innerHeight - 75) {
      setDark(true);
    } else {
      setDark(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navbarDark);
    return () => {
      window.removeEventListener("scroll", navbarDark);
    };
  }, []);
  return (
    <li className="group">
      <a
        href={`#${reference}`}
        className={`px-3 mx-2 py-1 xl:mx-3 hover:text-opacity-80 ${
          dark ? "text-gray-700" : "text-gray-100"
        }`}
      >
        {title}
      </a>
    </li>
  );
};

export default Navigation;
