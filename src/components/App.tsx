import React from 'react';
import { sayHello, sayName } from './utils/utils';

const App: React.FC = () => (
  <div>{ `${sayHello()}, ${sayName()}` }</div>
);

export default App;
