import React from "react";

function registroProducto() {
  return (
    <div>
      <div class="bg-gray-300 w-3/4 md:w-2/5 m-auto px-5 rounded-xl">
        <h1 class="text-center text-2xl md:text-3xl mb-10">
          Registra tu producto
        </h1>
        <div class="flex flex-col items-center mb-10">
          <input
            type="text"
            placeholder="Título"
            class="w-80 md:w-11/12 h-10 mb-5"
          />
          <div class="flex flex-col md:flex-row">
            <input
              type="text"
              placeholder="Productos"
              class="w-80 md:w-96 h-10 mb-5 md:mr-2"
            />
            <input
              type="text"
              placeholder="Precio"
              class="w-80 md:w-16 h-10 mb-5"
            />
          </div>
          <input
            type="text"
            placeholder="Ubicación"
            class="w-80 md:w-11/12 h-10 mb-5"
          />
          <input
            type="textarea"
            placeholder="Descripción opcional"
            class="w-80 md:w-11/12 h-20 mb-5"
          />
          <button class="bg-boton p-1.5 mb-5 rounded-lg">
            Registrar producto
          </button>
        </div>
      </div>
    </div>
  );
}

export default registroProducto;
