import React from 'react';
import { sayHelloReact } from '../samples/utils';

const App: React.FC = () => (
  <div>
    { `${sayHelloReact()}` }
  </div>
);

export default App;
