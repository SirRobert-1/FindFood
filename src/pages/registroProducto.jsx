import React from "react";

function registroProducto() {
  return (
    <div>
      <div class="bg-gray-300 w-3/4 md:w-2/5 px-5 rounded-xl">
        <h1 class="text-center text-black text-2xl md:text-3xl mb-10">
          Registra tu producto
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
            placeholder="Descripción opcional"
            className="textarea textarea-bordered textarea-lg w-full max-w-xs"
          ></textarea>
          <button className="btn bg-boton text-white">
            Registrar producto
          </button>
        </div>
      </div>
    </div>
  );
}

export default registroProducto;
