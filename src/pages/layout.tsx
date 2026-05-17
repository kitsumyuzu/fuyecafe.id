import { Outlet } from 'react-router-dom'

import Navbar from '@/components/Navbar'

export default function MainLayout() {
    return (
        <div className='min-h screen bg-[#020617] text-[#E4E4E4]'>
            <Navbar />
            <Outlet />
        </div>
    )
}