import React from 'react';

import { List } from './List';

function App() {
  return (
    <div className="App">
      <List
        listHeight={460}
        topSlot={<button>TOP BUTTON</button>}
        bottomSlot={<button>BOTTOM BUTTON</button>}
        />
    </div>
  );
}

export default App;
