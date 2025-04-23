/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Personaliza los colores exactos que estás usando
        green: {
          500: '#10B981', // Color verde para Verduras y Frutas
          600: '#059669', // Versión hover
        },
        yellow: {
          400: '#FACC15', // Color amarillo para Granos y Cereales
          500: '#EAB308', // Versión hover
        },
        orange: {
          400: '#FB923C', // Color naranja para Leguminosas
          500: '#F97316', // Versión hover
        },
        red: {
          500: '#EF4444', // Color rojo para Origen Animal
          600: '#DC2626', // Versión hover
        },
        amber: {
          700: '#B45309', // Color ámbar oscuro para Aceites y Grasas
          800: '#92400E', // Versión hover
          900: '#78350F', // Color original que tenías
        }
      },
    },
  },
  plugins: [],
}
