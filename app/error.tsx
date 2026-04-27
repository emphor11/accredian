"use client";

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 text-center">
      <div className="max-w-xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue">
          Something went wrong
        </p>
        <h1 className="text-4xl font-extrabold text-gray-950">
          We could not load this experience.
        </h1>
        <p className="mt-5 text-gray-600">
          {error.message || "Please try again in a moment."}
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 rounded-md bg-blue px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1f66d6]"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
