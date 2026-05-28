import { ProjectForm } from "@/components/admin/project-form";

export default function NewProject() {
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="font-display text-3xl font-semibold">Nuevo proyecto</h1>
      <p className="mt-1 text-sm text-white/55">Crea una entrada de portafolio.</p>
      <div className="mt-8">
        <ProjectForm />
      </div>
    </div>
  );
}
