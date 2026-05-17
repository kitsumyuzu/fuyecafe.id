import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainLayout from '@/pages/layout'
import Dashboard from '@/pages/dashboard/pages'
import EventsPage from '@/pages/(events)/pages'
import RegisterPage from '@/pages/(events)/register/pages'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route index element={<Dashboard />} />
                        <Route path={'events'} element={<EventsPage />} />
                        <Route path={'events/register'} element={<RegisterPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
