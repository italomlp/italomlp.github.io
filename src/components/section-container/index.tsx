import { cn } from '@/helpers/utils';

type Props = React.ComponentProps<'div'>;

export function SectionContainer({ className, children, ...props }: Props) {
  return (
    <div
      className={cn(
        'flex flex-col justify-center gap-6 min-h-screen',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
