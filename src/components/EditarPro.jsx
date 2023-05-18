import React from "react";

export default function editarPro() {
  return (
    <div className="bg-white flex justify-center">
      <div class="bg-gray-300 px-5 rounded-xl w-full max-w-sm shadow-2xl">
        <h1 class="text-center text-black text-2xl md:text-3xl mb-10">
          Edita tu producto
        </h1>
        <div class="flex flex-col items-center mb-10">
          <input
            type="text"
            placeholder="Título"
            className="input input-bordered w-full max-w-sm mb-2"
          />
          <div class="flex flex-col md:flex-row w-full max-w-sm">
            <input
              type="text"
              placeholder="Productos"
              className="input input-bordered md:w-72 mb-2 mr-1"
            />
            <input
              type="text"
              placeholder="Precio"
              className="input input-bordered md:w-20 mb-2"
            />
          </div>
          <input
            type="text"
            placeholder="Ubicación"
            className="input input-bordered w-full max-w-sm mb-2"
          />
          <textarea
            placeholder="Descripción opcional"
            className="textarea textarea-bordered textarea-lg w-full max-w-sm mb-4"
          ></textarea>
          <button className="btn bg-boton text-white">Subir cambios</button>
        </div>
      </div>
    </div>
  );
}
