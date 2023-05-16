import React from "react";

export default function reviewPro() {
  return (
    <div>
      <div class="bg-gray-300 w-3/4 md:w-2/5 m-auto p-5 mb-5 rounded-xl">
        <h1 class="text-2xl md:text-3xl text-center">
          ¿Qué te pareció el servicio?
        </h1>
        <div class="flex flex-col items-center">
          <input
            type="textarea"
            placeholder="Escribe una opnión o sugerencia"
            class="m-5 w-80 md:w-11/12 h-40 md:h-48"
          />
          <button class="bg-boton mb-5 rounded-lg p-1.5">Enviar reseña</button>
        </div>
      </div>
    </div>
  );
}
