import { useState, useRef, useEffect } from "react"

const REQ_IDLE_CB_TIMEOUT = 600 as const
const DEFAULT_TRESHHOLD = 0 as const

type HookOptions = {
  root?: HTMLElement | null
  rootMargin?: string
  threshold?: number
}

export const useIntersectionObserver = ({
  root = null,
  rootMargin,
  threshold = DEFAULT_TRESHHOLD
}: HookOptions): [
    (null | IntersectionObserverEntry),
    React.Dispatch<React.SetStateAction<undefined | null | HTMLLIElement>>
  ] => {
  const [entry, setEntry] = useState<null | IntersectionObserverEntry>(null)
  const [node, setNode] = useState<null | HTMLLIElement>()

  const observerRef = useRef<null | IntersectionObserver>(null)

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect()
    }

    observerRef.current = new IntersectionObserver(([entry]) => {
      if (typeof window !== "undefined" && window.requestIdleCallback) {
        window.requestIdleCallback(() => setEntry(entry), { timeout: REQ_IDLE_CB_TIMEOUT })
      }
      
    }, {})

    if (node) {
      observerRef.current.observe(node)
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }

  }, [root, rootMargin, threshold, node])

  return [entry, setNode]
}