import { useEffect, useMemo, useRef, useState } from "react";

interface Options {
  loop?: boolean;
  typingSpeed?: number; // ms per char
  deletingSpeed?: number; // ms per char
  delayBetween?: number; // ms pause between phrases
}

export function useTypingEffect(phrases: string[], options: Options = {}) {
  const { loop = true, typingSpeed = 60, deletingSpeed = 35, delayBetween = 1200 } = options;

  const [display, setDisplay] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const phrasesRef = useRef(phrases);

  const current = useMemo(() => phrasesRef.current[index % phrasesRef.current.length] ?? "", [index]);

  useEffect(() => {
    let timer: number | undefined;

    const tick = () => {
      const full = current;

      if (!isDeleting) {
        const next = full.slice(0, display.length + 1);
        setDisplay(next);
        if (next === full) {
          timer = window.setTimeout(() => setIsDeleting(true), delayBetween);
          return;
        }
        timer = window.setTimeout(tick, typingSpeed);
      } else {
        const next = full.slice(0, display.length - 1);
        setDisplay(next);
        if (next === "") {
          setIsDeleting(false);
          setIndex((i) => (loop ? i + 1 : Math.min(i + 1, phrasesRef.current.length - 1)));
          timer = window.setTimeout(tick, typingSpeed);
          return;
        }
        timer = window.setTimeout(tick, deletingSpeed);
      }
    };

    timer = window.setTimeout(tick, typingSpeed);
    return () => window.clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, isDeleting, display]);

  return display;
}
