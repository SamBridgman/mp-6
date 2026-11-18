import OAuth from "@/app/components/OAuth";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-sm px-6 py-20">
      <title>Homepage | mp-6</title>
      <h1 className="mb-3 text-2xl font-semibold">OAuth Login</h1>
      <OAuth/>
    </main>
  );
}
