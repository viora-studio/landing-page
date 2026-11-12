import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const headerVariants = cva(
  "flex items-center justify-between gap-4 text-foreground transition-all",
  {
    variants: {
      variant: {
        default:
          "sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur dark:bg-card/90 dark:border-white/10",
        floating:
          "fixed top-4 inset-x-4 z-40 mx-auto max-w-6xl w-auto rounded-full border border-border/40 bg-background/80 shadow-lg backdrop-blur-md dark:border-white/20 dark:bg-card/90 dark:shadow-xl",
        ghost: "w-full bg-transparent",
      },
      size: {
        default: "px-4 py-2.5 sm:px-6",
        sm: "px-3 py-1.5 sm:px-4 text-sm",
        lg: "px-6 py-4",
      },
    },
    defaultVariants: {
      variant: "floating",
      size: "default",
    },
  }
)

function Header({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<"header"> & VariantProps<typeof headerVariants>) {
  return (
    <header
      data-slot="header"
      className={cn(headerVariants({ variant, size }), className)}
      {...props}
    />
  )
}

function HeaderBrand({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="header-brand"
      className={cn("flex items-center gap-2", className)}
      {...props}
    />
  )
}

function HeaderTitle({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="header-title"
      className={cn("font-heading text-base font-semibold tracking-tight text-foreground", className)}
      {...props}
    />
  )
}

function HeaderContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="header-content"
      className={cn("flex items-center gap-4", className)}
      {...props}
    />
  )
}

function HeaderActions({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="header-actions"
      className={cn("ml-auto flex items-center gap-2", className)}
      {...props}
    />
  )
}

export {
  Header,
  HeaderBrand,
  HeaderTitle,
  HeaderContent,
  HeaderActions,
  headerVariants,
}
