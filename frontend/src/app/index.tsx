import type { FC } from 'react';
import WithApollo from './providers/WithApollo';
import WithRouter from './providers/WithRouters';

import './index.css';

const App: FC = () => {
  return (
    <WithApollo>
      <WithRouter />
    </WithApollo>
  );
};

export default App;
