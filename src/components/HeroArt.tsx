import Image from "next/image";

/**
 * Hero artwork (right side).
 * Features a playful, transparent 2D black ink chill bear doodle drinking from a mug.
 */
export default function HeroArt() {
  return (
    <div
      className="hidden md:flex absolute right-4 md:right-6 lg:right-[6%] top-0 bottom-0 items-center justify-center pointer-events-none select-none z-0"
      aria-hidden="true"
    >
      <div className="relative w-[min(35vw,320px)] lg:w-[min(38vw,460px)] aspect-square">
        <Image
          src="/chill-bear.png"
          alt="Chill Bear Doodle"
          fill
          priority
          sizes="(max-width: 1024px) 35vw, 460px"
          className="object-contain"
        />
      </div>
    </div>
  );
}
