import { FlipWords } from "@/components/FlipWords";
import { HeaderNavigation } from "@/features/HeaderNavigation";

export default function Home() {
  const words = ["epicas", "amorosas", "divertidas",];
  return (
    <main className="">
        <HeaderNavigation variant="centered" />

      <div className="h-[40rem] flex justify-center items-center px-4">
        <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
          Crea historias
          <FlipWords duration={2000} words={words} /> <br />
          en Creantiva
        </div>
      </div>

    </main>
  );
}
