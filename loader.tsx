export function Loader({ loadingText = "Loading…" }: { loadingText?: string }) {
  return (
    <div className="mx-auto flex animate-fade-in-up flex-col items-center justify-center gap-3">
      <img height={120} width={128} src="/loading.gif" alt="Loading" />
      <p className="text-sm">{loadingText}</p>
    </div>
  );
}
