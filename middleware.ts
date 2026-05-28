import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isAdmin = createRouteMatcher(["/admin(.*)", "/api/admin(.*)"]);
const isPublicAdmin = createRouteMatcher([
  "/admin/sign-in(.*)",
  "/admin/sign-up(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  if (isAdmin(req) && !isPublicAdmin(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
