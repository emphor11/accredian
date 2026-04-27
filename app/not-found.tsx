import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 text-center">
      <div className="max-w-xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue">
          404
        </p>
        <h1 className="text-4xl font-extrabold text-gray-950 sm:text-5xl">
          This learning path does not exist yet.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-base text-gray-600">
          The page you are looking for may have moved, or the URL needs another
          quick look.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-md bg-blue px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1f66d6]"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
