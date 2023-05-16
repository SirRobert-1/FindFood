import React from "react";

export default function CardProducto() {
  return (
    <div>
      <div class="bg-cardFood flex flex-col items-center rounded-xl w-3/4 md:w-2/5 m-auto p-5 mb-5">
        <h1 class="text-2xl md:3xl mb-5">Tortas</h1>
        <div class="mb-5">
          <div class="flex flex-row">
            <p class="mr-10">Milanesa</p>
            <span>$20</span>
          </div>
          <div class="flex flex-row">
            <p class="mr-10">Pastor</p>
            <span>$20</span>
          </div>
          <div class="flex flex-row">
            <p class="mr-10">Salchicha</p>
            <span>$15</span>
          </div>
        </div>
        <p>Avenida Xalapa No. 54</p>
        <div class="mt-5">
          <button class="bg-boton rounded-lg mr-5 p-1.5">
            Escribe una reseña
          </button>
          <button class="bg-boton rounded-lg p-1.5">Ver reseñas</button>
        </div>
      </div>
    </div>
  );
}
