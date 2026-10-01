import { useEffect, useRef, useState } from 'react';
import type { RefObject } from 'react';

// Short landscape viewports and reduced motion receive a complete static story.
export function useStaticStory() {
  const [isStatic, setStatic] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce), (max-height: 620px)').matches);
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce), (max-height: 620px)');
    const update = () => setStatic(query.matches);
    query.addEventListener('change',update);
    return () => query.removeEventListener('change',update);
  }, []);
  return isStatic;
}

export function useStoryProgress(ref: RefObject<HTMLElement | null>, callback: (progress: number) => void, isStatic: boolean) {
  const currentCallback = useRef(callback);
  useEffect(() => { currentCallback.current = callback; }, [callback]);
  useEffect(() => {
    const section = ref.current;
    if (!section || isStatic) return;
    let frame = 0;
    let visible = true;
    const update = () => {
      frame = 0;
      if (document.hidden || !visible) return;
      const distance = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(Math.max(-section.getBoundingClientRect().top / distance, 0), 1);
      currentCallback.current(progress);
    };
    const schedule = () => { if (!frame && visible && !document.hidden) frame = requestAnimationFrame(update); };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) schedule();
      else { cancelAnimationFrame(frame); frame = 0; }
    });
    observer.observe(section);
    window.addEventListener('scroll',schedule,{passive:true});
    window.addEventListener('resize',schedule);
    document.addEventListener('visibilitychange',schedule);
    schedule();
    return () => {
      cancelAnimationFrame(frame); observer.disconnect();
      window.removeEventListener('scroll',schedule); window.removeEventListener('resize',schedule);
      document.removeEventListener('visibilitychange',schedule);
    };
  }, [ref,isStatic]);
}
