
"use client"
import { Button } from "@/components";
import { Header } from "@/components/Header";
import { ModeToggle } from "@/components/ThemeProvider/ThemeSelector";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link"
import { useState } from "react";

const headerLinks = [
  { name: "Libros", href: "/books" },
]
const icons = [
  {
    name: "Twitter",
    icon: <TwitterLogoIcon />,
    href: "https://x.com",
  },
  {
    name: "GitHub",
    icon: <GitHubLogoIcon />,
    href: "https://github.com",
  },
]
const HeaderLink = (props: { href: string; name: string }) => {
  return <Link href={props.href}>{props.name}</Link>
}

const MobileItems = ({ openState }: { openState: { isOpen: boolean; setIsOpen: (open: boolean) => void } }) => {
  const {isOpen, setIsOpen} = openState

  return (
    <>
      {headerLinks.map((link) => (
        <Button
          key={link.href}
          asChild
          variant={"outline"}
          className="w-full rounded-xl justify-center"
          size="lg"
          onClick={() => setIsOpen(false)}
        >
          <Link href={link.href}>{link.name}</Link>
        </Button>
      ))}
      <div className="flex-row-end w-full gap-3 border-t pt-4 border-dashed">
        {icons && (
          <div className="flex-row-center grow gap-2">
            {icons.map((icon) => (
              <Button
                key={icon.name}
                size="icon"
                className="rounded-full"
                variant={"outline"}
                asChild
                onClick={() => setIsOpen(false)}
              >
                <Link href={icon.href}>{icon.icon}</Link>
              </Button>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export const HeaderNavigation = ({
  variant = "centered",
}: {
  variant: "default" | "centered"
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const openState: { isOpen: boolean; setIsOpen: (open: boolean) => void } = {
    isOpen,
    setIsOpen
  }
  return (
    <Header
    sticky
    variant={variant}
    openState={openState}
      Logo={<Link href={'/'}><TwitterLogoIcon /></Link>}
      desktopItems={
        <>
          {headerLinks.map((link, i) => (
            <HeaderLink key={i} href={link.href} name={link.name} />
          ))}

          <ModeToggle />
        </>
      }
      mobileItems={<MobileItems openState={openState} />}
    />
  )
}