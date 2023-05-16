import React from "react";

const productosData = [
  {
    id: 1,
    nombre: "Producto 1",
    precio: 100,
    descripcion: "Descripcion del producto 1",
    ubicacion: "Ubicacion del producto 1",
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
    nombre: "Producto 2",
    precio: 200,
    descripcion: "Descripcion del producto 2",
    ubicacion: "Ubicacion del producto 2",
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
    <div>
      {productosData.map((producto) => {
        return (
          <div key={producto.id}>
            <h1>{producto.nombre}</h1>
            <h2>{producto.precio}</h2>
            <h3>{producto.descripcion}</h3>
            <h4>{producto.ubicacion}</h4>
          </div>
        );
      })}
    </div>
  );
}
