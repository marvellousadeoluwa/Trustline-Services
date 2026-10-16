"use client";

import * as React from "react";
import * as RadixDialog from "@radix-ui/react-dialog";
import { twMerge } from 'tailwind-merge';

export const Dialog = RadixDialog.Root;
export const DialogTrigger = RadixDialog.Trigger;

export function DialogContent({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <RadixDialog.Portal>
      <RadixDialog.Overlay className="fixed inset-0 bg-black/40" />
      <RadixDialog.Content
        className={twMerge('fixed inset-x-4 top-20 rounded-lg bg-white p-6 shadow-2xl max-w-md mx-auto', className ?? '')}
        {...(props as any)}
      >
        {children}
        <RadixDialog.Close className="sr-only">Close</RadixDialog.Close>
      </RadixDialog.Content>
    </RadixDialog.Portal>
  );
}

export default Dialog;
