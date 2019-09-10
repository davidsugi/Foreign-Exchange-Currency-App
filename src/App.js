import orange from '@material-ui/core/colors/orange';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import Main from './containers/main';
import { Provider } from 'react-redux'
import './App.scss';
import { configureStore } from './configure-store';
// import { loadState, saveState } from './localStorage';

// const presistState = loadState();
const store = configureStore()

// store.subscribe(()=>{
//     saveState({
//         my_currency: store.getState().my_currency,
//         currency: store.getState().currency,
//     })
// })

const theme = createMuiTheme({
    palette: {
        primary: {
            main: orange[900]
        }
    }
}, )

function App() {
  return (
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  </MuiThemeProvider>
  );
}

export default App;
