import { type PropsWithChildren } from 'react';

export const TypographyMuted = ({ children }: PropsWithChildren) => {
  return <p className="text-muted-foreground text-sm">{children}</p>;
};
