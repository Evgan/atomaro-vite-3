import { Routes, Route } from 'react-router-dom';
import { HistoryRouter as Router } from "redux-first-history/rr6";
import { Provider } from 'react-redux'

import './App.css'
import Table from '../pages/Table/Table'
import Form from '../pages/Form/Form'
import Home from '../pages/Home/Home'
import Menu from '../components/Menu/Menu'

import { store, history } from "../store/reducers/store";
import { StableNavigateContextProvider } from './StableNavigateContext'



function App() {
  console.log('############## App()')
  return (
    <Provider store={store}>
      <>
        <Router history={history}>
          <StableNavigateContextProvider>
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
                element={<Form />}
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
          </StableNavigateContextProvider>
        </Router>
      </>
    </Provider>
  )
}

export default App