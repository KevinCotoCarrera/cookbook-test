import React, { ReactNode } from 'react';

interface SideBarProps {
  children?: ReactNode;
}

const SideBar: React.FC<SideBarProps> = ({ children }) => {
  return (
    <nav
      className={` flex w-1/2 border border-indigo-300  content-center justify-center bg-slate-100 rounded-lg shadow-lg px-12 py-10 transition-all delay-300 duration-500 `}
    >
      {children}
    </nav>
  );
};

export default SideBar;
