import { useState } from "react";
import "el-plato-del-bien-comer/styles/styles.css";


const alimentos = [
  { nombre: "Acelgas", grupo: "Verduras y Frutas", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Verduras-y-Frutas/acelga.png" },
  { nombre: "Apio", grupo: "Verduras y Frutas", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Verduras-y-Frutas/apio.png" },
  { nombre: "Arandanos", grupo: "Verduras y Frutas", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Verduras-y-Frutas/arandanos.png" },
  { nombre: "Berros", grupo: "Verduras y Frutas", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Verduras-y-Frutas/berros.png" },
  { nombre: "Betabel", grupo: "Verduras y Frutas", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Verduras-y-Frutas/betabel.png" },
  { nombre: "Brocoli", grupo: "Verduras y Frutas", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Verduras-y-Frutas/brocoli.png" },
  { nombre: "Calabacitas", grupo: "Verduras y Frutas", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Verduras-y-Frutas/calabacitas.png" },
  { nombre: "Champiñon", grupo: "Verduras y Frutas", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Verduras-y-Frutas/champiñon.png" },
  { nombre: "Chayotes", grupo: "Verduras y Frutas", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Verduras-y-Frutas/chayotes.png" },
  { nombre: "Chicharos", grupo: "Verduras y Frutas", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Verduras-y-Frutas/chicharos.png" },
  { nombre: "Chile Poblano", grupo: "Verduras y Frutas", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Verduras-y-Frutas/chile_poblano.png" },
  { nombre: "Ciruela Pasa", grupo: "Verduras y Frutas", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Verduras-y-Frutas/ciruela_pasa.png" },
  { nombre: "Col", grupo: "Verduras y Frutas", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Verduras-y-Frutas/col.png" },
  { nombre: "Coliflor", grupo: "Verduras y Frutas", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Verduras-y-Frutas/coliflor.png" },
  { nombre: "Durazno", grupo: "Verduras y Frutas", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Verduras-y-Frutas/durazno.png" },
  { nombre: "Espinacas", grupo: "Verduras y Frutas", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Verduras-y-Frutas/espinacas.png" },
  { nombre: "Guayaba", grupo: "Verduras y Frutas", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Verduras-y-Frutas/guayaba.png" },
  { nombre: "Huahuzontle", grupo: "Verduras y Frutas", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Verduras-y-Frutas/huahuzontle.png" },
  { nombre: "Huitlacoche", grupo: "Verduras y Frutas", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Verduras-y-Frutas/huitlacoche.png" },
  { nombre: "Jicama", grupo: "Verduras y Frutas", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Verduras-y-Frutas/jicama.png" },
  { nombre: "Jitomte", grupo: "Verduras y Frutas", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Verduras-y-Frutas/jitomate.png" },
  { nombre: "Lechuga", grupo: "Verduras y Frutas", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Verduras-y-Frutas/lechuga.png" },
  { nombre: "Mamey", grupo: "Verduras y Frutas", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Verduras-y-Frutas/mamey.png" },  
  { nombre: "Mango", grupo: "Verduras y Frutas", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Verduras-y-Frutas/mango.png" },
  { nombre: "Manzana", grupo: "Verduras y Frutas", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Verduras-y-Frutas/manzana.png" },
  { nombre: "Melón", grupo: "Verduras y Frutas", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Verduras-y-Frutas/melon.png" },
  { nombre: "Naranja", grupo: "Verduras y Frutas", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Verduras-y-Frutas/naranja.png" },
  { nombre: "Nopales", grupo: "Verduras y Frutas", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Verduras-y-Frutas/nopales.png" },
  { nombre: "Papaya", grupo: "Verduras y Frutas", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Verduras-y-Frutas/papaya.png" },
  { nombre: "Pepino", grupo: "Verduras y Frutas", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Verduras-y-Frutas/pepino.png" },
  { nombre: "Pera", grupo: "Verduras y Frutas", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Verduras-y-Frutas/pera.png" },
  { nombre: "Piña", grupo: "Verduras y Frutas", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Verduras-y-Frutas/piña.png" },
  { nombre: "Platano Dominico", grupo: "Verduras y Frutas", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Verduras-y-Frutas/platano_dominico.png" },
  { nombre: "Sandia", grupo: "Verduras y Frutas", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Verduras-y-Frutas/sandia.png" },
  { nombre: "Setas", grupo: "Verduras y Frutas", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Verduras-y-Frutas/setas.png" },
  { nombre: "Toronja", grupo: "Verduras y Frutas", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Verduras-y-Frutas/toronja.png" },
  { nombre: "Tuna", grupo: "Verduras y Frutas", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Verduras-y-Frutas/tuna.png" },
  { nombre: "Uvas Verdes", grupo: "Verduras y Frutas", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Verduras-y-Frutas/uvas_verdes.png" },
  { nombre: "Zanahoria", grupo: "Verduras y Frutas", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Verduras-y-Frutas/zanahorias.png" },
  { nombre: "Zapote", grupo: "Verduras y Frutas", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Verduras-y-Frutas/zapote.png" },
  { nombre: "Zarzamora", grupo: "Verduras y Frutas", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Verduras-y-Frutas/zarzamora.png" },
  { nombre: "Atún", grupo: "Origen Animal", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Origen-Animal/atun.png" },
  { nombre: "Carne de Cerdo", grupo: "Origen Animal", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Origen-Animal/carne_de_cerdo.png" },
  { nombre: "Carne de Res", grupo: "Origen Animal", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Origen-Animal/carne_de_res.png" },
  { nombre: "Charales", grupo: "Origen Animal", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Origen-Animal/charales.png" },
  { nombre: "Huevos", grupo: "Origen Animal", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Origen-Animal/huevos.png" },  
  { nombre: "Leche", grupo: "Origen Animal", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Origen-Animal/leche.png" },
  { nombre: "Pescado", grupo: "Origen Animal", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Origen-Animal/pescado.png" },
  { nombre: "Pollo", grupo: "Origen Animal", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Origen-Animal/pollo.png" },
  { nombre: "Queso Panela", grupo: "Origen Animal", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Origen-Animal/queso_panela.png" },
  { nombre: "Requesón", grupo: "Origen Animal", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Origen-Animal/requeson.png" },  
  { nombre: "Salmón", grupo: "Origen Animal", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Origen-Animal/salmon.png" },
  { nombre: "Yogur Natural", grupo: "Origen Animal", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Origen-Animal/yogur_natural.png" },
  { nombre: "Alubias", grupo: "Leguminosas", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Leguminosas/alubias.png" },
  { nombre: "Chicharos", grupo: "Leguminosas", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Leguminosas/chicharos.png" },
  { nombre: "Ejotes", grupo: "Leguminosas", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Leguminosas/ejotes.png" },
  { nombre: "Frijol", grupo: "Leguminosas", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Leguminosas/frijol.png" },
  { nombre: "Garbanzo", grupo: "Leguminosas", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Leguminosas/garbanzos.png" },
  { nombre: "Habas", grupo: "Leguminosas", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Leguminosas/habas.png" },
  { nombre: "Lentejas", grupo: "Leguminosas", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Leguminosas/lentejas.png" },
  { nombre: "Soya", grupo: "Leguminosas", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Leguminosas/soya.png" },
  { nombre: "Amaranto", grupo: "Granos y Cereales", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Granos-y-Cereales/amaranto.png" },  
  { nombre: "Arroz", grupo: "Granos y Cereales", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Granos-y-Cereales/arroz.png" },  
  { nombre: "Avena", grupo: "Granos y Cereales", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Granos-y-Cereales/avena.png" },  
  { nombre: "Bolillo", grupo: "Granos y Cereales", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Granos-y-Cereales/bolillo.png" },  
  { nombre: "Galletas Marias", grupo: "Granos y Cereales", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Granos-y-Cereales/galletas_marias.png" },  
  { nombre: "Hojuelas de Maiz Integral", grupo: "Granos y Cereales", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Granos-y-Cereales/hojuelas_de_maiz_integral.png" },  
  { nombre: "Palomitas de Maíz", grupo: "Granos y Cereales", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Granos-y-Cereales/palomitas_de_maiz.png" },  
  { nombre: "Pan Integral", grupo: "Granos y Cereales", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Granos-y-Cereales/pan_integral.png" },  
  { nombre: "Papa", grupo: "Granos y Cereales", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Granos-y-Cereales/papas.png" },  
  { nombre: "Pasta", grupo: "Granos y Cereales", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Granos-y-Cereales/pasta.png" },  
  { nombre: "Sopa", grupo: "Granos y Cereales", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Granos-y-Cereales/sopa_de_moño.png" },  
  { nombre: "Tortillas de Nopal", grupo: "Granos y Cereales", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Granos-y-Cereales/tortilla_de_nopal.png" },  
  { nombre: "Tortillas de Maíz", grupo: "Granos y Cereales", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Granos-y-Cereales/tortillas_de_maiz.png" },  
  { nombre: "Aceite Vegetal/Olivo", grupo: "Aceites y Grasas Saludables", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Aceites-y-Grasas-Saludables/aceites.png" },  
  { nombre: "Aguacate", grupo: "Aceites y Grasas Saludables", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Aceites-y-Grasas-Saludables/aguacate.png" },  
  { nombre: "Ajonjoli", grupo: "Aceites y Grasas Saludables", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Aceites-y-Grasas-Saludables/ajonjoli.png" },  
  { nombre: "Almendras", grupo: "Aceites y Grasas Saludables", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Aceites-y-Grasas-Saludables/almendras.png" },  
  { nombre: "Cacahuates", grupo: "Aceites y Grasas Saludables", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Aceites-y-Grasas-Saludables/cacahuate.png" },  
  { nombre: "Crema Baja en Grasa", grupo: "Aceites y Grasas Saludables", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Aceites-y-Grasas-Saludables/crema_baja_en_grasa.png" },  
  { nombre: "Nuez", grupo: "Aceites y Grasas Saludables", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Aceites-y-Grasas-Saludables/nuez.png" },  
  { nombre: "Semillas de Calabaza", grupo: "Aceites y Grasas Saludables", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Aceites-y-Grasas-Saludables/semillas_de_calabaza.png" },  
  { nombre: "Semillas de Girasol", grupo: "Aceites y Grasas Saludables", imagen: "https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/Aceites-y-Grasas-Saludables/semillas_de_girasol.png" },   
];

const grupos = [
  { nombre: "Verduras y Frutas", color: "bg-green-500" },
  { nombre: "Granos y Cereales", color: "bg-yellow-400" },
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
}
