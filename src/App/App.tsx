import { Routes, Route } from 'react-router-dom';
import { HistoryRouter as Router } from "redux-first-history/rr6";
import { Provider } from 'react-redux'

import './App.css'
import '@atomaro/ui-kit/theme/default-light.css'
import Table from '../pages/Table/Table'
import Home from '../pages/Home/Home'
import Menu from '../components/Menu/Menu'

import { store, history } from "../store";
import { StableNavigateContextProvider } from '../hooks/StableNavigateContext'
import { StableLocationContextProvider } from '../hooks/StableLocationContext'
import FormTest from '../pages/Form/FormTest'



function App() {
  console.log('############## App()')
  return (
    <Provider store={store}>
      <>
        <Router history={history}>
          <StableNavigateContextProvider>
            <StableLocationContextProvider>
              <>
                <Menu />
                <Routes>
                  <Route
                    path='/table'
                    element={<Table />}
                    key={'Table'}
                  />
                  <Route
                    path='/form'
                    element={<FormTest />}
                    key={'Form'}
                  />
                  <Route
                    index
                    path='/'
                    element={<Home />}
                    key={'Home'}
                  />
                  </Routes>
              </>
            </StableLocationContextProvider>
          </StableNavigateContextProvider>
        </Router>
      </>
    </Provider>
  )
}

export default App
