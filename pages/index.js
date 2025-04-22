import { useState } from "react";

const alimentos = [
  { nombre: "Manzana", grupo: "Frutas y Verduras", imagen: "/images/manzana.png" },
  { nombre: "Pan integral", grupo: "Cereales", imagen: "/images/pan.png" },
  { nombre: "Frijoles", grupo: "Leguminosas", imagen: "/images/frijoles.png" },
  { nombre: "Zanahoria", grupo: "Frutas y Verduras", imagen: "/images/zanahoria.png" },
  { nombre: "Pollo", grupo: "Origen Animal", imagen: "/images/pollo.png" },
  { nombre: "Arroz", grupo: "Cereales", imagen: "/images/arroz.png" }
];

const grupos = [
  { nombre: "Frutas y Verduras", color: "bg-green-500" },
  { nombre: "Cereales", color: "bg-yellow-400" },
  { nombre: "Leguminosas", color: "bg-orange-400" },
  { nombre: "Origen Animal", color: "bg-red-500" },
  { nombre: "Aceites y Grasas Saludables", color: "bg-amber-900" }
];

export default function Home() {
  const [indice, setIndice] = useState(0);
  const [mensaje, setMensaje] = useState("");
  const [puntaje, setPuntaje] = useState(0);

  const alimentoActual = alimentos[indice];

  const manejarRespuesta = (grupoSeleccionado) => {
    if (grupoSeleccionado === alimentoActual.grupo) {
      setMensaje("✅ ¡Correcto!");
      setPuntaje(puntaje + 1);
    } else {
      setMensaje("❌ Intenta de nuevo");
    }
    setTimeout(() => {
      setMensaje("");
      setIndice((indice + 1) % alimentos.length);
    }, 1500);
  };

  return (
  <div className="p-6 max-w-3xl mx-auto text-center">
    <h1 className="text-3xl font-bold text-green-700 mb-4">¡Vamos a Comer Bien!</h1>

    {/* Imagen del Plato del Bien Comer */}
    <div className="mb-6">
      <img
        src="https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/plato_bien_comer.png"
        alt="Plato del Bien Comer"
        className="mx-auto w-80 h-auto rounded-lg shadow-md"
      />
    </div>

    <p className="text-lg mb-6">
      Clasifica el alimento en el grupo correcto del Plato del Bien Comer
    </p>

    <div className="bg-white shadow-xl mb-6 p-4 rounded-xl">
      <img
        src={alimentoActual.imagen}
        alt={alimentoActual.nombre}
        className="mx-auto h-40 object-contain"
      />
      <h2 className="text-2xl font-semibold mt-4">{alimentoActual.nombre}</h2>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
      {grupos.map((grupo) => (
        <button
          key={grupo.nombre}
          onClick={() => manejarRespuesta(grupo.nombre)}
          className={`text-white text-base py-4 rounded-xl ${grupo.color}`}
        >
          {grupo.nombre}
        </button>
      ))}
    </div>

    {mensaje && (
      <div className="text-xl font-semibold text-green-600 animate-pulse mb-2">{mensaje}</div>
    )}

    <div className="text-sm text-gray-600">Puntaje: {puntaje}</div>
  </div>
);
