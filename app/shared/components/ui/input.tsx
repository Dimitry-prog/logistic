'use client';

import * as React from 'react';
import { AlertCircle } from 'lucide-react';
import { cn } from '@utils/cn';
import { FloatingLabel } from './floating-label';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
  helperText?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, helperText, startIcon, endIcon, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [value, setValue] = React.useState(props.defaultValue || props.value || '');

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      props.onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      props.onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      props.onChange?.(e);
    };

    return (
      <div className="relative w-full">
        <div
          className={cn(
            'relative flex w-full items-center rounded-lg',
            isFocused ? 'bg-muted' : 'bg-muted/30',
            startIcon && 'pl-10',
            (endIcon || error) && 'pr-10'
          )}
        >
          {startIcon && (
            <div className="text-muted-foreground absolute top-1/2 left-3 -translate-y-1/2">
              {startIcon}
            </div>
          )}
          <div className="relative flex w-full items-center">
            <input
              type={type}
              className={cn(
                'peer text-foreground h-[52px] w-full bg-transparent px-4 pt-5 text-base placeholder:text-transparent focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
                className
              )}
              ref={ref}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChange}
              {...props}
            />
            {label && <FloatingLabel label={label} isFloating={isFocused || Boolean(value)} />}
          </div>
          {error ? (
            <div className="text-destructive absolute top-1/2 right-3 -translate-y-1/2">
              <AlertCircle className="h-5 w-5" />
            </div>
          ) : (
            endIcon && (
              <div className="text-muted-foreground absolute top-1/2 right-3 -translate-y-1/2">
                {endIcon}
              </div>
            )
          )}
        </div>
        {(error || helperText) && (
          <p
            className={cn('mt-1 text-sm', error ? 'text-destructive' : 'text-muted-foreground/50')}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
