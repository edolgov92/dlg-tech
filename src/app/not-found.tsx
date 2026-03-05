import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <p className="mb-4 text-sm font-medium tracking-widest text-white/30 uppercase">
        404
      </p>
      <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-center text-sm leading-relaxed text-white/50">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
      >
        Back to home
      </Link>
      <span className="mt-16 text-xs text-white/20">DLG Tech</span>
    </div>
  );
}
