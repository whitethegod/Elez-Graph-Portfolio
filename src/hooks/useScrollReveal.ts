import { useEffect, useRef } from "react";

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const children = el.querySelectorAll(".fade-in-section");
    children.forEach((child) => observer.observe(child));
    // Also observe the element itself if it has the class
    if (el.classList.contains("fade-in-section")) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return ref;
}
