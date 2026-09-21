import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Hasnain" },
      { name: "description", content: "Dr. Hasnain — personal landing page." },
      { property: "og:title", content: "Dr. Hasnain" },
      { property: "og:description", content: "Dr. Hasnain — personal landing page." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <h1 className="text-center text-5xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl">
        Dr. Hasnain
      </h1>
    </main>
  );
}
