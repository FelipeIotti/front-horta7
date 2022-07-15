import {BrowserRouter as Router} from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react';
import {theme} from './styles/theme';


import { SideBarDrawerProvider } from './contexts/SidebarDrawerContext';

import { Home } from './pages';


function App() {
  
  return (
    <ChakraProvider theme={theme} >
      <SideBarDrawerProvider>
        <Router>
          <Home/>
        </Router>
      </SideBarDrawerProvider>
    </ChakraProvider>
  );
}

export default App;
