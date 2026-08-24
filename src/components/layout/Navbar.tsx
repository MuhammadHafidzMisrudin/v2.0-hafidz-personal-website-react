import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/nav";
import { profile } from "@/data/profile";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const activeId = useActiveSection(navItems.map((item) => item.id));
  const progress = useScrollProgress();
  useLockBodyScroll(isOpen);

  const handleNavigate = (id: string) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-bg/80 backdrop-blur">
      <div
        className="absolute inset-x-0 top-0 h-0.5 bg-accent transition-[width] duration-150"
        style={{ width: `${progress * 100}%` }}
      />

      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
        <button
          type="button"
          onClick={() => handleNavigate("home")}
          className="font-heading text-lg font-bold text-sm ml-2 mr-2"
        >
          {profile.name}
        </button>

        <nav className="hidden gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavigate(item.id)}
              className={`text-sm font-medium transition-colors ${
                activeId === item.id ? "text-accent" : "text-text-muted hover:text-text"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-text md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <nav className="flex flex-col gap-1 border-t border-border bg-bg px-6 py-4 md:hidden">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavigate(item.id)}
              className={`rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors ${
                activeId === item.id
                  ? "bg-accent-soft text-accent"
                  : "text-text-muted hover:bg-surface hover:text-text"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
