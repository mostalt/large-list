import React, { ReactNode } from 'react';

import { ListItem } from './ListItem';
import './List.css'

const DEFAULT_LIST_HEIGHT = 460

const items = Array.from(Array(1000).keys())

interface ListProps {
  topSlot?: ReactNode
  bottomSlot?: ReactNode
  listHeight?: number
}

export const List = ({ topSlot, bottomSlot, listHeight }: ListProps) => {
  const withFixedHeight = bottomSlot || listHeight ? true : false
  const selector = withFixedHeight ? 'list fixed-height' : 'list'
  const currentHeight = listHeight || DEFAULT_LIST_HEIGHT

  const styles = withFixedHeight ? {
    height: currentHeight
  } : {}

  return (
    <div className="list-wrapper">
      {topSlot}
      <ul className={selector} style={styles}>
        {items.map((item) => {
          return <ListItem key={item}>
            {`this element contains the number ${item}`}
          </ListItem>
        })}
      </ul>
      {bottomSlot}
    </div>
  )
}