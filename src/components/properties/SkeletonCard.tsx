export default function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-sm p-4 space-y-4 animate-pulse">
      <div className="aspect-[4/3] w-full bg-neutral-200 rounded-xl" />
      <div className="space-y-2">
        <div className="h-4 bg-neutral-200 rounded w-1/3" />
        <div className="h-5 bg-neutral-200 rounded w-3/4" />
        <div className="h-4 bg-neutral-200 rounded w-1/2" />
      </div>
      <div className="pt-4 border-t border-neutral-100 flex justify-between">
        <div className="h-4 bg-neutral-200 rounded w-1/4" />
        <div className="h-4 bg-neutral-200 rounded w-1/4" />
      </div>
    </div>
  );
}