import { Routes, Route, Outlet } from 'react-router-dom';
import LandingPage from './pageRoutes/LandingPage';
import Community from './pageRoutes/Community';
import Services from './pageRoutes/Services';
import Pricing from './pageRoutes/Pricing';
import Contact from './pageRoutes/Contact';
import Store from './pageRoutes/Store';
import Jobs from './pageRoutes/Jobs';
import PageNotFound from './pageRoutes/PageNotFound';

export default function App() {
    return (
        <>
        <Routes>
            <Route path="/" element={<ReactRoutes/>}>
                <Route index element={<LandingPage/>} />
                <Route path="/community" element={<Community/>} />
                <Route path="/pricing" element={<Pricing/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/jobs" element={<Jobs/>} />
                <Route path="/services" element={<Services/>} />
                <Route path="/store" element={<Store/>} />
                <Route path="*" element={<PageNotFound/>} />
            </Route>
        </Routes>
        </>
    );
}

const ReactRoutes = () => {
    return (
        <Outlet />
    );
}