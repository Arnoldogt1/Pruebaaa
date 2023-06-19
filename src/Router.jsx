import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { Page } from './Page'

export const router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}></Route>
            <Route path='/flag' element={<Page/>}></Route>
        </Routes>
    </BrowserRouter>
  );
};