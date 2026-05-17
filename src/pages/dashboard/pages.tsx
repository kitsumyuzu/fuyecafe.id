import { ArrowRight, CalendarDays, Coffee, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    const highlights = [
        { title: 'Freshly Brewed Daily', desc: 'Small batch coffee and handcrafted drinks made with care.' },
        { title: 'Cozy Atmosphere', desc: 'A calm space for study sessions, casual meetups, and slow mornings.' },
        { title: 'Special Events', desc: 'Join workshops, live music nights, and seasonal tasting experiences.' },
    ]

    const featured = [
        { name: 'Signature Latte', note: 'Velvety espresso with house-made syrup', price: 'Rp 32,000' },
        { name: 'Matcha Cloud', note: 'Smooth matcha with creamy oat milk', price: 'Rp 35,000' },
        { name: 'Cinnamon Croissant', note: 'Buttery pastry baked fresh every morning', price: 'Rp 22,000' },
    ]

    return (
        <main className="min-h-screen">
            <section className="relative overflow-hidden px-4 md:px-24 py-20 max-w-480 mx-auto">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(51,143,102,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(234,179,8,0.10),transparent_30%)]" />

                <div className="relative grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">A warmer way to start your day.</h1>
                        <p className="mt-6 text-lg md:text-xl text-[--natural-gray] max-w-xl">Discover specialty drinks, cozy seating, and curated events designed for people who love great coffee and good company.</p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/events/register"
                                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[--color-primary] text-white font-bold hover:opacity-90 transition"
                            >
                                Register for Cooking Class
                                <ArrowRight size={18} />
                            </Link>

                            <Link
                                to="/events"
                                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-white/10 bg-white/5 font-semibold hover:bg-white/10 transition"
                            >
                                View Events
                            </Link>
                        </div>

                        <div className="mt-10 flex items-center gap-6 text-sm text-[--natural-gray]">
                            <div className="flex items-center gap-2">
                                <Star size={16} className="text-amber-400 fill-amber-400" />
                                4.9 customer favorite
                            </div>
                            <div className="flex items-center gap-2">
                                <Coffee size={16} className="text-[--color-primary]" />
                                Open daily
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-4">
                        <div className="rounded-3xl p-6 bg-slate-900/60 border border-white/10 shadow-2xl">
                            <p className="text-sm text-[--natural-gray] mb-2">Today’s Special</p>
                            <h2 className="text-3xl font-bold">Vanilla Oat Latte</h2>
                            <p className="mt-3 text-[--natural-gray]">Smooth espresso, oat milk, and vanilla syrup served over ice or hot.</p>

                            <div className="mt-6 flex items-center justify-between">
                                <span className="text-2xl font-bold text-[--color-primary]">Rp 34,000</span>
                                <span className="text-sm px-3 py-1 rounded-full bg-emerald-950/60 text-emerald-300 border border-emerald-900/40">Best seller</span>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-3 gap-4">
                            {highlights.map((item) => (
                                <div key={item.title} className="rounded-2xl p-5 bg-white/5 border border-white/10">
                                    <h3 className="font-bold text-lg">{item.title}</h3>
                                    <p className="mt-2 text-sm text-[--natural-gray]">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-4 md:px-24 py-10 max-w-480 mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold">Featured Menu</h2>
                    <Link to="/events" className="text-[--color-primary] font-semibold flex items-center gap-1">Events <ArrowRight size={16} /></Link>
                </div>

                <div className="grid md:grid-cols-3 gap-5">
                    {featured.map((item) => (
                        <div key={item.name} className="rounded-3xl p-6 bg-slate-900/40 border border-white/10 hover:border-[--color-primary]/40 transition">
                            <h3 className="text-xl font-bold">{item.name}</h3>
                            <p className="mt-2 text-sm text-[--natural-gray]">{item.note}</p>

                            <div className="mt-6 flex items-center justify-between">
                                <span className="font-bold text-[--color-primary]">{item.price}</span>
                                <CalendarDays size={18} className="text-[--natural-gray]" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Dashboard