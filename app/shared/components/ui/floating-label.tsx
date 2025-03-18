'use client';

import * as React from 'react';

import { cn } from '@utils/cn';

interface FloatingLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  label: string;
  isFloating: boolean;
}

export function FloatingLabel({ label, isFloating, className, ...props }: FloatingLabelProps) {
  return (
    <label
      className={cn(
        'text-muted-foreground/50 pointer-events-none absolute top-[26px] left-4 -translate-y-1/2 text-base transition-all duration-200',
        isFloating && 'text-muted-foreground/70 top-[14px] text-xs',
        className
      )}
      {...props}
    >
      {label}
    </label>
  );
}
