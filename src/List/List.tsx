import React from 'react';

import { ListItem } from './ListItem';
import './List.css'

const items = Array.from(Array(1000).keys())

export const List = () => {
  return (
    <ul className='list'>
      {items.map((item) => {
        return <ListItem key={item}>
          {`this element contains the number ${item}`}
        </ListItem>
      })}
    </ul>
  )
}