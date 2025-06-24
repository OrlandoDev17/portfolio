import { useRef, useEffect, useState } from "react";

interface IntersectionObserverOptions {
  root?: Element | Document | null;
  rootMargin?: string;
  threshold?: number | number[];
}

function UseIntersectionObserver<T extends HTMLElement = HTMLDivElement>(): [
  React.RefObject<T | null>,
  boolean
] {
  const [hasBeenVisible, setHasBeenVisible] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const targetRef = useRef<T | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (hasBeenVisible) {
      return;
    }

    const options: IntersectionObserverOptions = {
      root: null,
      rootMargin: "0px",
      threshold: windowWidth > 1024 ? 1 : 0.3,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasBeenVisible) {
        setHasBeenVisible(true);
        observer.disconnect();
      }
    }, options);

    const currentTarget = targetRef.current;

    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
      observer.disconnect();
    };
  }, [windowWidth, hasBeenVisible]);

  return [targetRef, hasBeenVisible];
}

export default UseIntersectionObserver;
