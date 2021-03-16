import React from 'react';
import AppStore from '../stores/AppStore';

const storesContext = React.createContext({
  appStore: new AppStore(),
});

export const useStores = () => React.useContext(storesContext);