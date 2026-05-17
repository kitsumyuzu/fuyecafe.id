import { Link } from 'react-router-dom'

const Events = () => {
    const events = [
        {
            title: 'Latte Art Workshop',
            date: 'Sunday, May 24',
            time: '10:00 AM',
            description: 'Learn steaming, pouring, and basic latte art patterns with our barista team.',
        },
        {
            title: 'Home Brewing Session',
            date: 'Wednesday, May 27',
            time: '2:00 PM',
            description: 'Discover pour-over techniques and bean selection for a better brew at home.',
        },
        {
            title: 'Cooking Class: Cafe Brunch',
            date: 'Saturday, May 30',
            time: '9:00 AM',
            description: 'Join our cooking class and make simple cafe-style brunch dishes with the chef.',
        },
    ]

    return (
        <main className="min-h-screen px-4 md:px-24 py-12 max-w-480 mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold">Events</h1>
            <p className="mt-4 text-[--natural-gray] max-w-2xl">
                Join workshops, tastings, and community sessions designed to make your cafe experience more memorable.
            </p>

            <div className="mt-10 grid md:grid-cols-3 gap-6">
                {events.map((event) => (
                <article key={event.title} className="rounded-3xl p-6 bg-slate-900/40 border border-white/10">
                    <h2 className="text-xl font-bold">{event.title}</h2>
                    <p className="mt-2 text-sm text-[--natural-gray]">{event.date} • {event.time}</p>
                    <p className="mt-4 text-sm text-[--natural-white]/85">{event.description}</p>
                </article>
                ))}
            </div>

            <div className="mt-10">
                <Link to="/events/register" className="inline-flex px-6 py-4 rounded-xl bg-[--color-primary] text-white font-bold">
                Register for Cooking Class
                </Link>
            </div>
        </main>
    )
}

export default Events