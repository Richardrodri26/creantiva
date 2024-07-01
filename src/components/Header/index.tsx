import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { MobileHeader } from "./MobileHeader"

const headerVariants = cva("mx-auto", {
  variants: {
    variant: {
      default: "max-w-7xl",
      centered:
        "max-w-4xl rounded-full mt-2 border shadow-lg dark:border-zinc-900",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface HeaderProps extends VariantProps<typeof headerVariants> {
  sticky?: boolean
  Logo: React.ReactNode
  /**
   * Items to be displayed on mobile
   */
  // mobileItems: ({
  //   setIsOpen,
  // }: {
  //   setIsOpen: (open: boolean) => void
  // }) => React.ReactNode | React.ReactNode
  mobileItems: React.ReactNode
  openState: { isOpen: boolean; setIsOpen: (open: boolean) => void }
  
  /**
   * Items to be displayed on desktop
   */
  desktopItems: React.ReactNode
}

//======================================
export const Header = ({
  Logo,
  sticky,
  variant,
  mobileItems,
  desktopItems,
  openState
}: HeaderProps) => {
  return (
    <header
      className={cn(
        "w-full bg-transparent z-[9999]",
        sticky && variant == "centered" && "md:sticky top-3",
        sticky && variant == "default" && "md:sticky top-0"
      )}
    >
      <div className={cn("hidden md:block bg-background", headerVariants({ variant }))}>
        <div className="flex items-center justify-between px-6 pb-2 pt-3 w-full gap-2">
          <span>{Logo}</span>
          <nav className="flex items-center w-fit gap-3 lg:gap-8">{desktopItems}</nav>
        </div>
      </div>
      <MobileHeader openState={openState} Logo={Logo}>{mobileItems}</MobileHeader>
    </header>
  )
}
