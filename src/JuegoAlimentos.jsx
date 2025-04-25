import "/src/styles/index.css";
import { useState } from "react";
import { useEffect } from 'react';
import { useRef } from 'react';

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

const grupos = ['Verduras y Frutas', 'Granos y Cereales', 'Leguminosas', 'Origen Animal', 'Aceites y Grasas Saludables'];

function JuegoAlimentos() {
  const [alimentoActual, setAlimentoActual] = useState({});
  const [puntos, setPuntos] = useState(0);
  const [intentos, setIntentos] = useState(0);
  const [mensaje, setMensaje] = useState('');
  const timeoutRef = useRef(null);

  const seleccionarAlimentoAleatorio = () => {
    const indice = Math.floor(Math.random() * alimentos.length);
    return alimentos[indice];
  };

  const reiniciarJuego = () => {
    // Limpiar cualquier timeout pendiente
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setPuntos(0);
    setIntentos(0);
    setMensaje('');
    setAlimentoActual(seleccionarAlimentoAleatorio());
  };

  useEffect(() => {
    reiniciarJuego();
    // Limpieza al desmontar el componente
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

const manejarRespuesta = (grupoSeleccionado) => {
  // Limpiar timeout anterior si existe
  if (timeoutRef.current) {
    clearTimeout(timeoutRef.current);
  }

  const nuevoIntentos = intentos + 1;
  const esUltimoIntento = nuevoIntentos >= 5;
  
  if (grupoSeleccionado === alimentoActual.grupo) {
    const nuevosPuntos = puntos + 2;
    setPuntos(nuevosPuntos);
    setMensaje('✅ ¡Correcto!');
    
    timeoutRef.current = setTimeout(() => {
      if (esUltimoIntento) {
        alert(`¡Juego terminado! Obtuviste ${nuevosPuntos} puntos.`);
        reiniciarJuego();
      } else {
        setAlimentoActual(seleccionarAlimentoAleatorio());
        setMensaje('');
      }
    }, 1000);
  } else {
    setMensaje(`❌ Incorrecto. Era del grupo: ${alimentoActual.grupo}`);
    setIntentos(nuevoIntentos);
    
    timeoutRef.current = setTimeout(() => {
      if (esUltimoIntento) {
        alert(`¡Juego terminado! Obtuviste ${puntos} puntos.`);
        reiniciarJuego();
      } else {
        setMensaje('');
      }
    }, esUltimoIntento ? 1000 : 10000);
  }

  // Actualizar intentos después de toda la lógica
  setIntentos(nuevoIntentos);
};

  // ... (el resto del componente se mantiene igual)
  return (
    <div className="p-4 max-w-xl mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">¡Vamos a Comer Bien!</h1>

      {/* Imagen del Plato del Bien Comer */}
      <div className="mb-6">
        <img
          src="https://raw.githubusercontent.com/crivero/el-plato-del-bien-comer/main/public/images/plato_bien_comer.png"
          alt="Plato del Bien Comer"
          className="mx-auto w-80 h-auto rounded-lg shadow-md"
        />
      </div>
      
      <img src={alimentoActual.imagen} alt={alimentoActual.nombre} className="mx-auto h-32 object-contain mb-4" />
      <p className="mb-4 text-lg">¿A qué grupo pertenece <strong>{alimentoActual.nombre}</strong>?</p>
      <div className="grid grid-cols-2 gap-2 mb-4">
        {grupos.map(grupo => (
          <button
            key={grupo}
            onClick={() => manejarRespuesta(grupo)}
            className="bg-blue-200 hover:bg-blue-400 rounded-xl p-2 text-sm"
          >
            {grupo}
          </button>
        ))}
      </div>
      <p className="text-green-700 font-semibold">{mensaje}</p>
      <p className="mt-2">Puntos: {puntos} | Intentos: {intentos}/5</p>
    </div>
  );
}

export default JuegoAlimentos;
