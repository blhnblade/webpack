import s from './App.module.scss'
import './App2.scss'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Profile from '@/pages/Profile'
import News from '@/pages/News'
import Main from "@/pages/Main"

export const App = () => {

    return (
        <>
            <BrowserRouter>
                <div>
                    <Link to={'/'}>Главная</Link>
                    <Link to={'/profile'}>Профиль</Link>
                    <Link to={'/news'}>Новости</Link>
                </div>
                <Routes>
                    <Route path={'/'} element={<Main />} />
                    <Route path={'/profile'} element={<Profile />} />
                    <Route path={'/news'} element={<News />} />
                </Routes>
            </BrowserRouter>
            
        </>
    )
}

