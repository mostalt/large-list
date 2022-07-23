import React, { useState, useLayoutEffect } from 'react';

import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { ListItemProps } from './ListItem.types';
import './ListItem.css'

const THRESHOLD = 0

export const ListItem = ({ children, initiallyVisible = false }: ListItemProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(initiallyVisible)
  const [ref, entry] = useIntersectionObserver({ threshold: THRESHOLD })

  useLayoutEffect(() => {
    if (!isVisible && entry?.isIntersecting) {
      setIsVisible(true)
    }

  }, [entry, isVisible])

  const selector = isVisible ? 'list-item visible' : 'list-item'

  return (
    <li ref={ref} className={selector}>
      {isVisible && <div className="content">{children}</div>}
    </li>
  )
}