import './App.css';
import Bat from './components/Bat';
import { Provider } from 'react-redux';
import store from './redux/store';
import Ball from './components/Ball';
import Header from './RoutingSystem/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header/>
      <Provider store={store}>
        <BrowserRouter>

        <Routes>
          <Route exact path='bat' element={<Bat />}></Route>
          <Route exact path='ball' element={<Ball />}></Route>
        </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;