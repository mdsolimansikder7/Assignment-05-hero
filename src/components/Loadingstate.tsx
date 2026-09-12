export default function LoadingState() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex flex-col items-center justify-center py-24 text-gray-400"
    >
      <div className="h-10 w-10 rounded-full border-4 border-gray-200 border-t-pink-500 animate-spin" />
      <p className="mt-4 text-sm">Loading technologies…</p>
    </div>
  );
}
