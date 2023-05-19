import React from "react";
import Link from "next/link";

const productosData = [
  {
    id: 1,
    titulo: "Tortas",
    productos: "Milanesa",
    precio: 15,
    ubicacion: "Av. Xalapa No. 54",
    descripcion: "Nos encontramos frente a la parada de autobús",
    reviews: [
      {
        id: 1,
        comentario: "Comentario 1",
      },
      {
        id: 2,
        comentario: "Comentario 2",
      },
    ],
  },
  {
    id: 2,
    titulo: "Refrescos",
    productos: "Coca-cola",
    precio: 15,
    ubicacion: "Junto a la cancha",
    descripcion: "Junto al salón F102",
    reviews: [
      {
        id: 1,
        comentario: "Comentario 1",
      },
      {
        id: 2,
        comentario: "Comentario 2",
      },
    ],
  },
  {
    id: 3,
    titulo: "Café",
    productos: "Americano",
    precio: 20,
    ubicacion: "Afuera del auditorio",
    descripcion: "",
    reviews: [
      {
        id: 1,
        comentario: "Comentario 1",
      },
      {
        id: 2,
        comentario: "Comentario 2",
      },
    ],
  },
];

export default function Productos() {
  return (
    <div className="md:h-screen">
      <div className="flex flex-wrap justify-center">
        {productosData.map((producto) => {
          return (
            <div
              key={producto.id}
              className="bg-cardFood m-10 p-2 text-black rounded-lg text-center text-md w-2/3 md:w-1/4"
            >
              <h1 className="text-2xl">{producto.titulo}</h1>
              <h2>{producto.productos}</h2>
              <h2>${producto.precio}</h2>
              <h2>{producto.ubicacion}</h2>
              <h2>{producto.descripcion}</h2>
              <button className="btn bg-boton text-white text-xs m-1 px-1 mt-2">
                <Link href="/reviewPro">{"Escribe una reseña"}</Link>
              </button>
              <button className="btn bg-boton text-white text-xs m-1 px-1 mt-2">
                Ver reseñas
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
