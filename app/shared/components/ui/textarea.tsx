'use client';

import * as React from 'react';

import { cn } from '@utils/cn';
import { FloatingLabel } from './floating-label';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  label?: string;
  helperText?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, label, helperText, placeholder, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [hasValue, setHasValue] = React.useState(false);

    const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(true);
      props.onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(false);
      props.onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setHasValue(e.target.value.length > 0);
      props.onChange?.(e);
    };

    return (
      <div className="relative w-full">
        {label && (
          <FloatingLabel label={label} isFloating={isFocused || hasValue} htmlFor={props.id} />
        )}
        <textarea
          className={cn(
            'border-input bg-background ring-offset-background focus-visible:ring-ring flex min-h-[120px] w-full rounded-lg border px-4 pt-4 text-base placeholder:text-transparent focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
            error && 'border-destructive focus-visible:ring-destructive',
            label && 'pb-2',
            className
          )}
          placeholder={label}
          ref={ref}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          {...props}
        />
        {(error || helperText) && (
          <p className={cn('mt-1.5 text-sm', error ? 'text-destructive' : 'text-muted-foreground')}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
