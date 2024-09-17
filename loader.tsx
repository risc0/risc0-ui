export function Loader({
  loadingSrc = "/loading.gif",
  loadingText = "Loading…",
}: { loadingText?: string; loadingSrc?: string }) {
  return (
    <div className="mx-auto flex animate-fade-in-up flex-col items-center justify-center gap-3">
      <img height={120} width={128} src={loadingSrc} alt="Loading" />
      <p className="text-sm">{loadingText}</p>
    </div>
  );
}
