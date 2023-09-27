import { SectionContainer } from '@/components/section-container';
import { AspectRatio, Skeleton } from '@/components/ui';

export default function Loading() {
  return (
    <SectionContainer
      className={
        'w-full sm:flex-row gap-8 sm:gap-12 items-center min-h-[calc(100vh-76px)] sm:pb-[76px]'
      }
    >
      <div className="flex justify-center items-center">
        <div className="w-[300px] sm:w-[450px] h-[300px] sm:h-[450px]">
          <AspectRatio ratio={1}>
            <Skeleton className="w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full" />
          </AspectRatio>
        </div>
      </div>

      <div className="w-full text-center sm:text-left">
        <div className="flex flex-col gap-4">
          <Skeleton className="w-full h-10" />
          <Skeleton className="w-full h-6" />
          <Skeleton className="w-1/2 h-6" />
        </div>
        <div className="flex flex-wrap gap-2 mt-6 pb-8">
          {[...Array(8)].map((_, i) => (
            <Skeleton key={i} className="w-24 h-6" />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
