import React, { ReactNode } from 'react';

import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { ListItemProps } from './ListItem.types';
import './ListItem.css'

const THRESHOLD = 0.5 as const

export const ListItem = ({ children }: ListItemProps) => {
  const [_entry, setNode] = useIntersectionObserver({ threshold: THRESHOLD })

  return <li ref={setNode} className="list-item">
    {children}
  </li>
}