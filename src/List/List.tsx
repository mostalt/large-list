import React from 'react';

import { ListItem } from './ListItem';
import { ListProps } from './List.types';

import './List.css'

const DEFAULT_LIST_HEIGHT = 460
const INITIAL_ELEMENTS_INDEXES = [0, 1, 2, 3]

const items = Array.from(Array(1000).keys())

export const List = ({ topSlot, bottomSlot, listHeight = DEFAULT_LIST_HEIGHT }: ListProps) => {
  const withFixedHeight = !!(bottomSlot || listHeight)
  const selector = withFixedHeight ? 'list fixed-height' : 'list'

  const styles = withFixedHeight ? {
    height: listHeight
  } : {}

  return (
    <div className="list-wrapper">
      {topSlot}
      <ul className={selector} style={styles}>
        {items.map((item, index) => {
          return <ListItem key={item} initiallyVisible={index in INITIAL_ELEMENTS_INDEXES}>
            {`this element contains the number ${item}`}
          </ListItem>
        })}
      </ul>
      {bottomSlot}
    </div>
  )
}