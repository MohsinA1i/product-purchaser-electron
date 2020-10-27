import React, {createContext, useReducer} from 'react';
const currentTab = 'tasks';

export const currentTabConext = React.createContext(currentTab);