import React, {createElement as e, useState} from 'react';

function App() {
  const [count, setcount] = useState(0);
return e('div', {className: 'contaienr'}, [
  e('h1', {className: 'text-3xl font-bold underline'}, `Test JSX ${count}`),
  e('button', {className: '', onClick: ()=> setcount(count + 1)}, 'Click me!')
])
}

export default App;
