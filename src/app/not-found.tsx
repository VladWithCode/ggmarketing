import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container-page grid min-h-[60vh] place-items-center text-center">
      <div>
        <p className="font-display text-7xl font-bold text-[color:var(--color-accent)]">404</p>
        <h1 className="mt-4 font-display text-3xl font-semibold">Página no encontrada</h1>
        <p className="mt-2 text-white/55">El recurso que buscas no existe o fue movido.</p>
        <Button asChild variant="accent" className="mt-6">
          <Link href="/">Volver al inicio</Link>
        </Button>
      </div>
    </section>
  );
}
