import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="navbar bg-navfoot justify-around md:justify-center">
      <h1 className="text-xl md:text-4xl md:mr-60">¿Dónde está la comida?</h1>
      <button className="btn btn-sm bg-boton text-white text-sm">
        <Link href="/loginVendedor">{"Registrarse"}</Link>
      </button>
    </div>
  );
}

export default Navbar;
