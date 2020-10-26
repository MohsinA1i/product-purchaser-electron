import './App.css';

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

const App = () => {
  return (
    <div>
      <AmplifySignOut/>
    </div>
  );
}

export default withAuthenticator(App);
