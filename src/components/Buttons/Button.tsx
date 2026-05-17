import * as React from "react"

import {
  Button as PrimitiveButton,
  type buttonVariants,
} from "../ui/button"
import type { VariantProps } from "class-variance-authority"

export type ButtonProps = React.ComponentProps<typeof PrimitiveButton> &
  VariantProps<typeof buttonVariants>

export const Button = React.forwardRef<
  React.ElementRef<typeof PrimitiveButton>,
  ButtonProps
>(({ children, ...props }, ref) => (
  <PrimitiveButton ref={ref} {...props}>
    {children}
  </PrimitiveButton>
))

Button.displayName = "Button"
