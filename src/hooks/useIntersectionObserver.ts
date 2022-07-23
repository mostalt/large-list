import { useState, useEffect, RefObject, useRef } from "react"

const REQ_IDLE_CB_TIMEOUT = 600 as const
const DEFAULT_TRESHHOLD = 0 as const

type HookOptions = {
  root?: HTMLElement | null
  rootMargin?: string
  threshold?: number
}

export const useIntersectionObserver = ({
  root = null,
  rootMargin = '0%',
  threshold = DEFAULT_TRESHHOLD,
}: HookOptions):
  [
    React.Dispatch<React.SetStateAction<HTMLElement | null>>,
    (null | IntersectionObserverEntry),
  ] => {

  const [entry, setEntry] =  useState<IntersectionObserverEntry | null>(null)
  const [node, setNode] = useState<HTMLElement | null>(null);

  const observer = useRef<IntersectionObserver | null>(null)

  const hasSupport = !!window.IntersectionObserver

  useEffect(
    () => {
      if (!hasSupport) {
        return
      }

      if (observer.current) {
        observer.current.disconnect()
      }

      observer.current = new IntersectionObserver(([entry]) => {
        if (typeof window !== "undefined" && window.requestIdleCallback) {
          window.requestIdleCallback(() => setEntry(entry), { timeout: REQ_IDLE_CB_TIMEOUT })
        }
        
      }, { threshold, root, rootMargin })

      if (node) observer.current.observe(node);

      return () => {
        if (observer.current) {
          observer.current.disconnect();
        }
      }
    },
    [node, threshold, root, rootMargin, hasSupport]
  );

  return [setNode, entry];
}