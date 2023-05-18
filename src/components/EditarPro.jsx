import React from "react";

export default function editarPro() {
  return (
    <div>
      <div class="bg-cardFood w-3/4 md:w-2/5 px-5 rounded-xl">
        <h1 class="text-center text-2xl md:text-3xl mb-10">
          Edita tu producto
        </h1>
        <div class="flex flex-col items-center mb-10">
          <input
            type="text"
            placeholder="Título"
            className="input input-bordered w-full max-w-xs"
          />
          <div class="flex flex-col md:flex-row">
            <input
              type="text"
              placeholder="Productos"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Precio"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <input
            type="text"
            placeholder="Ubicación"
            className="input input-bordered w-full max-w-xs"
          />
          <textarea
            placeholder="Bio"
            className="textarea textarea-bordered textarea-lg w-full max-w-xs"
          ></textarea>
          <button className="btn bg-boton text-white">Subir cambios</button>
        </div>
      </div>
    </div>
  );
}
