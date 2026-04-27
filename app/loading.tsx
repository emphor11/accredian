export default function Loading() {
  return (
    <main className="min-h-screen bg-white px-6 py-10">
      <div className="mx-auto max-w-7xl animate-pulse space-y-8">
        <div className="h-10 w-44 rounded bg-blue/15" />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-5">
            <div className="h-16 rounded bg-gray-100" />
            <div className="h-16 w-5/6 rounded bg-gray-100" />
            <div className="h-6 w-3/4 rounded bg-gray-100" />
          </div>
          <div className="h-80 rounded-lg border border-gray-200 bg-[#eef5ff]" />
        </div>
      </div>
    </main>
  );
}
