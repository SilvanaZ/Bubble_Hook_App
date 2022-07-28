import { Navigate, Route, Routes } from 'react-router-dom';
import { AboutPage } from './AboutPage';
import { UserProvider } from './context/UserProvider';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { Navbar } from './Navbar';


export const MainApp = () => {
    return (
        <UserProvider>
            {/* <h1> Main App</h1>
            <hr /> */}

            <Navbar />

            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='about' element={<AboutPage />} />
                <Route path='login' element={<LoginPage />} />

                {/* <Route path='/*' element={<LoginPage />} /> */}
                <Route path='/*' element={<Navigate to="/about" />} />

            </Routes>
        </UserProvider>
    )
}
