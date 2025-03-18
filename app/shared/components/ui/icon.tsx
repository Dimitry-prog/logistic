import * as React from 'react';
import { type LucideIcon } from 'lucide-react';

import { cn } from '@utils/cn';

import { Icons, type IconName } from './icons';

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

export function Icon({ name, size = 24, strokeWidth = 2, className, ...props }: IconProps) {
  const IconComponent = Icons[name] as LucideIcon;

  return (
    <span className={cn('inline-flex items-center justify-center', className)} {...props}>
      <IconComponent size={size} strokeWidth={strokeWidth} />
    </span>
  );
}
