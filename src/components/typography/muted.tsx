import { type PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

interface TypographyMutedProps extends PropsWithChildren {
  className?: string;
}

export const TypographyMuted = ({
  children,
  className,
}: TypographyMutedProps) => {
  return (
    <p className={cn('text-sm text-muted-foreground', className)}>{children}</p>
  );
};
