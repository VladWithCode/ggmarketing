import { PlanForm } from "@/components/admin/plan-form";

export default function NewPlan() {
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="font-display text-3xl font-semibold">Nuevo plan</h1>
      <div className="mt-8">
        <PlanForm />
      </div>
    </div>
  );
}
