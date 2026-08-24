import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen scroll-mt-24 flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url(/images/bg-img.jpg)" }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-bg via-bg/80 to-bg" />

      <motion.img
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        src={profile.photo}
        alt={profile.name}
        className="mb-6 h-32 w-32 rounded-full border-2 border-accent object-cover"
      />

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="font-heading text-sm font-semibold tracking-widest text-accent uppercase"
      >
        {profile.title}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="mt-2 font-heading text-4xl font-bold text-text sm:text-6xl"
      >
        {profile.name}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="mt-4 text-text-muted"
      >
        {profile.altNames.join(" · ")}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        className="mt-8 flex flex-wrap justify-center gap-4"
      >
        <a
          href="#portfolio"
          className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg transition-transform hover:scale-105"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent"
        >
          Get In Touch
        </a>
      </motion.div>
    </section>
  );
}
