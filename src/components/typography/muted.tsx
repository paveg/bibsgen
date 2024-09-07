import { type PropsWithChildren } from 'react';

export const TypographyMuted = ({ children }: PropsWithChildren) => {
  return <p className="text-sm text-muted-foreground">{children}</p>;
};
