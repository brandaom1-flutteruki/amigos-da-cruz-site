"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
  type RefObject,
} from "react";

export const useInView = (threshold = 0.1): [RefObject<HTMLDivElement | null>, boolean] => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return [ref, inView];
};

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  style?: CSSProperties;
  className?: string;
};

export const FadeIn = ({ children, delay = 0, style = {}, className = "" }: FadeInProps) => {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(22px)",
        transition: `opacity 0.9s ease ${delay}s, transform 0.9s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
