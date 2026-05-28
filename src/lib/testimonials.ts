// TODO: reemplazar con testimonios reales (con permiso del cliente).
// Copy genérico-profesional, SIN nombres de clientes reales inventados.
export type Testimonial = {
  quote: string;
  role: string; // rol/sector, no nombre real
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Pasamos de hojas de cálculo a un sistema que todo el equipo usa a diario. La operación es más rápida y dejamos de perder información.",
    role: "Dirección de operaciones · Empresa de servicios",
    initials: "OP",
  },
  {
    quote:
      "Entregaron en tiempo y con comunicación clara en cada etapa. El panel de reportes nos dio visibilidad que no teníamos.",
    role: "Gerencia comercial · Negocio local",
    initials: "GC",
  },
  {
    quote:
      "El sitio carga rápido, se ve profesional y por fin podemos actualizar el contenido sin depender de nadie.",
    role: "Coordinación de marketing · PyME",
    initials: "CM",
  },
];
