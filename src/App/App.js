import './App.css';

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { Layout } from 'antd';
import SideBar from '../SideBar/SideBar.js';

const App = () => {
  return (
    <Layout className='app'>
      <SideBar/>
      <Layout>
       <AmplifySignOut/> 
      </Layout>
    </Layout>
  );
}

export default withAuthenticator(App);
