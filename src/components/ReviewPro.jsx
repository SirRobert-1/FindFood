import React from "react";

export default function reviewPro() {
  return (
    <div>
      <div class="bg-gray-300 w-3/4 md:w-2/5 m-auto p-5 mb-5 rounded-xl">
        <h1 class="text-2xl md:text-3xl text-center">
          ¿Qué te pareció el servicio?
        </h1>
        <div class="flex flex-col items-center">
          <textarea
            placeholder="Escribe un comentario o sugerencia"
            className="textarea textarea-bordered textarea-lg w-full max-w-xs"
          ></textarea>
          <button className="btn bg-boton text-white">Enviar reseña</button>
        </div>
      </div>
    </div>
  );
}
