import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote as QuoteIcon } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { quotes } from "@/data/quotes";

const AUTOPLAY_INTERVAL = 9000;

const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir * 60 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir * -60 }),
};

export function Quotes() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((next: number) => {
    setIndex((current) => {
      setDirection(next >= current ? 1 : -1);
      return next;
    });
  }, []);

  const goNext = useCallback(() => {
    setIndex((current) => {
      setDirection(1);
      return (current + 1) % quotes.length;
    });
  }, []);

  const goPrev = useCallback(() => {
    setIndex((current) => {
      setDirection(-1);
      return (current - 1 + quotes.length) % quotes.length;
    });
  }, []);

  const restartAutoplay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(goNext, AUTOPLAY_INTERVAL);
  }, [goNext]);

  useEffect(() => {
    restartAutoplay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [restartAutoplay]);

  const handleManualNav = (action: () => void) => {
    action();
    restartAutoplay();
  };

  const quote = quotes[index];

  return (
    <Section id="quotes" eyebrow="Quotes" heading="My Favourite Movie Quotes">
      <div className="group relative h-[32rem] w-full overflow-hidden rounded-xl border border-border sm:h-[36rem]">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.figure
            key={quote.author}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12"
          >
            <img
              src={quote.image}
              alt=""
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-bg via-bg/60 to-bg/10" />

            <QuoteIcon size={28} className="mb-4 text-accent" />
            <blockquote className="max-w-2xl text-lg leading-relaxed text-text sm:text-lg">
              "{quote.text}"
            </blockquote>
            <figcaption className="mt-4 text-sm font-medium text-text-muted">
              — {quote.author}
            </figcaption>
          </motion.figure>
        </AnimatePresence>

        <button
          type="button"
          aria-label="Previous quote"
          onClick={() => handleManualNav(goPrev)}
          className="absolute top-1/2 left-4 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-bg/60 text-text opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 hover:bg-bg/90"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          aria-label="Next quote"
          onClick={() => handleManualNav(goNext)}
          className="absolute top-1/2 right-4 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-bg/60 text-text opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 hover:bg-bg/90"
        >
          <ChevronRight size={20} />
        </button>

        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {quotes.map((q, i) => (
            <button
              key={q.author}
              type="button"
              aria-label={`Go to quote ${i + 1}`}
              onClick={() => handleManualNav(() => goTo(i))}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-accent" : "w-2 bg-text-muted/50 hover:bg-text-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
