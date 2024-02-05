import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SiteDataProvider } from './contexts/siteData';
import { CounterProvider } from './contexts/counter';
import DefaultLayout from './layouts/Default';
import Home from './components/home';
import Users from './components/users';
import Form from './components/form';
import Play from './components/play';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <SiteDataProvider>
                <CounterProvider>
                    <Routes>
                        <Route element={<DefaultLayout />}>
                            <Route path='/' element={<Home />} />
                            <Route path='/users' element={<Users />} />
                            <Route path='/form' element={<Form />} />
                            <Route path='/play' element={<Play />} />
                        </Route>
                    </Routes>
                </CounterProvider>
            </SiteDataProvider>
        </BrowserRouter>
    </React.StrictMode>,
)
