import React from "react";
import Link from "next/link";

export default function reviewPro() {
  return (
    <div className="h-screen bg-white">
      <div className="flex justify-center">
        <div class="bg-gray-300 w-3/4 md:w-2/5 rounded-xl mt-24">
          <h1 class="text-2xl md:text-3xl text-center m-5 text-black">
            ¿Qué te pareció el servicio?
          </h1>
          <div class="flex flex-col items-center">
            <textarea
              placeholder="Escribe un comentario"
              className="textarea textarea-bordered textarea-lg w-full max-w-xs md:max-w-md h-40 md:h-54 m-5"
            ></textarea>
            <button className="btn bg-boton text-white mb-5">
              <Link href="/productos">{"Enviar reseña"}</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
