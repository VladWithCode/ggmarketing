import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="grid min-h-screen place-items-center">
      <SignIn appearance={{ variables: { colorPrimary: "#5b8def" } }} />
    </div>
  );
}
