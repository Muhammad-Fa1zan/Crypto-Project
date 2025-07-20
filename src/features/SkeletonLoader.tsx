import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-4 p-4 w-full max-w-[800px]">
      <Skeleton className="h-[180px] w-full rounded-2xl" />
      <div className="space-y-3">
        <Skeleton className="h-6 w-[60%] rounded-md" />
        <Skeleton className="h-6 w-[40%] rounded-md" />
        <Skeleton className="h-6 w-[50%] rounded-md" />
      </div>
    </div>
  );
}
