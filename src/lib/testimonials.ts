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
      "Nuestras redes pasaron de estar abandonadas a generar mensajes y reservas todos los días. El contenido por fin se ve profesional.",
    role: "Dirección · Restaurante local",
    initials: "RL",
  },
  {
    quote:
      "Las campañas de publicidad nos trajeron clientes reales, no solo likes. La comunicación fue clara y los reportes muy fáciles de entender.",
    role: "Gerencia comercial · Negocio local",
    initials: "GC",
  },
  {
    quote:
      "El branding y la página nos dieron una imagen seria y coherente. Ahora la marca se ve igual de bien en todos lados.",
    role: "Coordinación de marketing · PyME",
    initials: "CM",
  },
];
