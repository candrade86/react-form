import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { StateMachineProvider, createStore } from 'little-state-machine'
import PageOne from './pages/pageOne'
import PageTwo from './pages/pageTwo'
import Result from './pages/result'
import * as serviceWorker from './serviceWorker'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container';

createStore({
  data: {}
});

function App() {
  return (
    <StateMachineProvider>
      <Container className="contCollapse">
      <Box className="insideContainer" display="flex" flexDirection="column" m={2} style={{minHieght: '100%'}}>
        <Box className="card" p={5}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <picture class="fl-photo-img wp-image-178 size-full" itemprop="image" title="VindicoLiveVirtual">
              <source type="image/webp" srcset="https://15mgy97sdvj3qc5bw391y6h1-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/VindicoLiveVirtual.png.webp"/>
              <img src="https://15mgy97sdvj3qc5bw391y6h1-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/VindicoLiveVirtual.png" alt="VindicoLiveVirtual" itemprop="image" height="104" width="300" class="lazyloaded" data-ll-status="loaded"/>
            </picture>
          </Box>
          <Box className="title" textAlign="center">
            <h2>Expanding the Role of the NP in Managing Major Depressive Disorder: Challenge Accepted</h2>
          </Box>
          {/* <ProgressBar /> */}
          <Router>
            <Route exact path="/" component={PageOne} />
            <Route path="/PageTwo" component={PageTwo} />
            <Route path="/Result" component={Result} />
          </Router>
        </Box>
        
      </Box>
      </Container>
    </StateMachineProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
