
import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { CircleX, Menu } from "lucide-react"

export const MobileHeader = ({
  Logo,
  children,
  openState
}: {
  Logo: React.ReactNode
  // children: ({
  //   setIsOpen,
  // }: {
  //   /**
  //    * Set the open state of the mobile header, use to close the header when a link is clicked
  //   */
  //   setIsOpen: (open: boolean) => void
  // }) => React.ReactNode | React.ReactNode
  children: React.ReactNode
  openState: { isOpen: boolean; setIsOpen: (open: boolean) => void }
}) => {
  const { isOpen, setIsOpen } = openState
  return (
    <div
      className={cn(
        "md:hidden px-4 pt-2",
        isOpen && "min-h-screen z-40 bg-transparent size-full"
      )}
    >
      <div className="flex-row-between pb-2">
        {Logo}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="icon"
          className="rounded-xl"
          variant={"outline"}
        >
          {isOpen ? <CircleX /> : <Menu />}
        </Button>
      </div>

      <dialog
        open={isOpen}
        className={
          isOpen
            ? "animate-popover-in flex flex-col gap-3 h-full w-full pt-4 px-4 bg-transparent"
            : "hidden"
        }
      >
        {/* {typeof children === "function" ? children({ setIsOpen }) : children} */}
        {children}
      </dialog>
    </div>
  )
}