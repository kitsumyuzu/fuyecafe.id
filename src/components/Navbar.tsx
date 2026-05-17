import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '@/assets/brand.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="w-full border-b border-white/5 bg-slate-950/70 backdrop-blur-md sticky top-0 z-50">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link to="/" className="flex items-center gap-3 text-2xl sm:text-3xl font-bold z-20">
                        <img src={logo} alt="brand logo" width={48} className="sm:w-14" />
                        <span>Fuye Cafe</span>
                    </Link>

                    <ul className="hidden md:flex items-center space-x-8">
                        <li>
                            <NavLink
                                to="/"
                                end
                                className={({ isActive }) =>
                                `text-[18px] transition-colors ${isActive ? 'text-[--color-primary]' : 'hover:text-amber-600'}`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/events"
                                className={({ isActive }) =>
                                `text-[18px] transition-colors ${isActive ? 'text-[--color-primary]' : 'hover:text-amber-600'}`
                                }
                            >
                                Events
                            </NavLink>
                        </li>
                    </ul>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-md focus:outline-none z-20"
                        aria-label="Toggle menu"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-slate-950 border-t border-white/5 shadow-md z-10">
                    <ul className="flex flex-col px-4 py-4 space-y-3">
                        <li>
                            <Link to="/" onClick={() => setIsOpen(false)} className="block text-[18px] py-2 hover:text-amber-600">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/events" onClick={() => setIsOpen(false)} className="block text-[18px] py-2 hover:text-amber-600">
                                Events
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar