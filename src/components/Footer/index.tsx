// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports

// UI component imports
import { Button } from "../ui/button";

// Icon imports
import { Github, Twitter, Facebook, MountainIcon, PhoneIcon, MailIcon } from "lucide-react";

// Local component imports

export default function Footer() {
  return (
    <footer className=" mt-auto py-6 md:py-8">
    <div className="container grid grid-cols-1 md:grid-cols-3 items-start justify-between gap-8">
      <div className="grid gap-4">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">Creantiva.</span>
        </Link>
        <p className="text-sm text-muted-foreground">&copy; 2024 Creantiva. Todos los derechos son reservados.</p>
      </div>
      <nav className="grid gap-2">
        <h3 className="text-lg font-semibold">Navegacion</h3>
        <div className="grid gap-1">
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Products
          </Link>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Contact
          </Link>
        </div>
      </nav>
      <div className="grid gap-4">
        <h3 className="text-lg font-semibold">Additional Information</h3>
        <p className="text-sm text-muted-foreground">
          Creantiva. Estamos comprometidos a entregar el mejor servicio.
        </p>
        <div className="flex items-center gap-2">
          <PhoneIcon className="h-4 w-4 text-muted-foreground" />
          <a href="#" className="text-sm text-muted-foreground hover:underline">
            +58 (300) 300-300
          </a>
        </div>
        <div className="flex items-center gap-2">
          <MailIcon className="h-4 w-4 text-muted-foreground" />
          <a href="#" className="text-sm text-muted-foreground hover:underline">
            info@creantiva.com
          </a>
        </div>
      </div>
    </div>
  </footer>
  );
}
