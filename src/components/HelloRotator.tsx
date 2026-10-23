"use client";

import { useEffect, useState } from "react";

// English first, so it is always what visitors see on load/refresh.
const GREETINGS = [
  { text: "Hello", lang: "en" },
  { text: "Hola", lang: "es" },
  { text: "Bonjour", lang: "fr" },
  { text: "שלום", lang: "he" },
  { text: "Ciao", lang: "it" },
  { text: "Olá", lang: "pt" },
  { text: "你好", lang: "zh" },
  { text: "Привет", lang: "ru" },
  { text: "مرحبا", lang: "ar" },
  { text: "नमस्ते", lang: "hi" },
  { text: "Halo", lang: "id" },
  { text: "Shalom", lang: "en" },
  { text: "こんにちは", lang: "ja" },
];

const INTERVAL_MS = 2000;

export default function HelloRotator() {
  // Starts at 0 (English) on server and client, avoiding hydration mismatch.
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % GREETINGS.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  const current = GREETINGS[index];

  return (
    <h1
      key={current.lang}
      lang={current.lang}
      aria-live="off"
      className="text-6xl xs:text-7xl sm:text-8xl md:text-9xl lg:text-[140px] xl:text-[145px] font-normal tracking-tight text-zinc-900 leading-[1.05] sm:leading-[1.1] mb-4 sm:mb-6 font-sans whitespace-nowrap min-h-[1.1em] animate-[hello-in_0.35s_ease-out]"
    >
      {current.text}
    </h1>
  );
}
