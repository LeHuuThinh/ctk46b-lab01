export default function Loading() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10">
      <article className="animate-pulse space-y-8">
        <header className="space-y-4">
          <div className="h-6 w-28 rounded-full bg-muted" />
          <div className="space-y-3">
            <div className="h-10 w-full rounded-md bg-muted" />
            <div className="h-10 w-4/5 rounded-md bg-muted" />
          </div>

          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-full bg-muted" />
            <div className="space-y-2">
              <div className="h-4 w-40 rounded bg-muted" />
              <div className="h-4 w-28 rounded bg-muted" />
            </div>
          </div>
        </header>

        <div className="h-64 w-full rounded-2xl bg-muted" />

        <section className="space-y-4">
          <div className="h-4 w-full rounded bg-muted" />
          <div className="h-4 w-full rounded bg-muted" />
          <div className="h-4 w-11/12 rounded bg-muted" />
          <div className="h-4 w-10/12 rounded bg-muted" />
          <div className="h-4 w-9/12 rounded bg-muted" />
        </section>

        <section className="space-y-4">
          <div className="h-7 w-2/5 rounded-md bg-muted" />
          <div className="grid gap-4 md:grid-cols-2">
            <div className="h-40 rounded-xl bg-muted" />
            <div className="h-40 rounded-xl bg-muted" />
          </div>
        </section>

        <footer className="flex items-center gap-2 pt-2">
          <div className="h-9 w-24 rounded-full bg-muted" />
          <div className="h-9 w-28 rounded-full bg-muted" />
          <div className="h-9 w-20 rounded-full bg-muted" />
        </footer>
      </article>
    </div>
  );
}