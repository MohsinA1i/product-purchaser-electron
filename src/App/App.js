import './App.css';

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { Layout } from 'antd';
import SideBar from '../SideBar/SideBar.js'

import { store } from "../context/store";

const App = () => {
  return (
    <Layout className='app'>
      <SideBar/>
      <Layout>
        <h2>Hello world</h2>
       {//<AmplifySignOut/>
       } 
      </Layout>
    </Layout>
  );
}

export default withAuthenticator(App);
