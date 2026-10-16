"use client";

import * as React from "react";
import * as RadixPopover from "@radix-ui/react-popover";
import { twMerge } from 'tailwind-merge';

export const Popover = RadixPopover.Root;
export const PopoverTrigger = RadixPopover.Trigger;

export function PopoverContent({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <RadixPopover.Portal>
      <RadixPopover.Content className={twMerge('rounded-md bg-white p-3 shadow-md', className ?? '')} {...(props as any)}>
        {children}
      </RadixPopover.Content>
    </RadixPopover.Portal>
  );
}

export default Popover;
