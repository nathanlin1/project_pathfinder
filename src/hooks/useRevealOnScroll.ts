import { useEffect, type RefObject } from 'react';

type Options = {
  threshold?: number;
  deps?: unknown[];
};

export function useRevealOnScroll(
  ref: RefObject<HTMLElement | null>,
  { threshold = 0.1, deps = [] }: Options = {}
) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold }
    );

    const elements = ref.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, threshold, ...deps]);
}
