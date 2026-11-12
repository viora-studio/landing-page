import * as React from "react"
import { cn } from "cn"

function Footer({ className, ...props }: React.ComponentProps<"footer">) {
  return (
    <footer
      data-slot="footer"
      className={cn(
        "border-t bg-muted/30 backdrop-blur dark:border-white/10 dark:bg-card/60",
        className,
      )}
      {...props}
    />
  )
}

export { Footer }
