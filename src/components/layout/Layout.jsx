import React from "react";
import Navbar from "../Navbar";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <div className="bg-navfoot h-8 items-center">
        <h1 className="text-center text-xl">Ingeniería de software</h1>
      </div>
    </div>
  );
}

export default Layout;
