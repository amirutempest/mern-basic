import React from 'react'
import { BrowserRouter, Route, Routes,} from 'react-router-dom';
import { Home, Login, Register } from '../../pages';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/login'>
                    <Login/>
                </Route>
                <Route exact path='/register'>
                    <Register/>
                </Route>
                <Route exact path='/'>
                    <Home/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;