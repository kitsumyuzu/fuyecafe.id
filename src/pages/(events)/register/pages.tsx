import { useEffect, useRef, useState } from 'react'

type Errors = Partial<
    Record<
        | 'fullName'
        | 'username'
        | 'email'
        | 'password'
        | 'age'
        | 'ticketType'
        | 'websiteUrl'
        | 'customField'
        | 'agreeToTerms',
        string
    >
>

const classTypes = [
    { id: 'LatteArt', label: 'Latte Art Workshop' },
    { id: 'HomeBrewing', label: 'Home Brewing Session' },
    { id: 'CookingClass', label: 'Cooking Class: Cafe Brunch' }
]

const validatePassword = (value: string) => /^(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(value);

export default function RegisterPage() {
    const formRef = useRef<HTMLFormElement>(null)
    const [errors, setErrors] = useState<Errors>({})
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [successName, setSuccessName] = useState('')
    const groupName = 'Fuye Cafe Crew'

    useEffect(() => {
        if (!isSubmitted) return

        const timer = setTimeout(() => {
        setIsSubmitted(false)
        }, 3000)

        return () => clearTimeout(timer)
    }, [isSubmitted])

    const validate = () => {
        const form = formRef.current;
        if (!form) return false

        const formData = new FormData(form)
        const nextErrors: Errors = {}

        const fullName = String(formData.get('fullName') || '').trim()
        const username = String(formData.get('username') || '').trim()
        const email = String(formData.get('email') || '').trim()
        const password = String(formData.get('password') || '')
        const age = Number(formData.get('age') || '')
        const ticketType = String(formData.get('ticketType') || '')
        const websiteUrl = String(formData.get('websiteUrl') || '').trim()
        const customField = String(formData.get('customField') || '').trim()
        const agreeToTerms = formData.get('agreeToTerms') === 'on'

        if (!fullName) nextErrors.fullName = 'Full name is required';

        if (!username) nextErrors.username = 'Username is required';
        else if (username.length < 6) nextErrors.username = 'Username must be at least 6 characters'
        else if (username.length > 20) nextErrors.username = 'Username cannot exceed 20 characters'

        if (!email) nextErrors.email = 'Email is required'
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = 'Invalid email format'

        if (!password) nextErrors.password = 'Password is required'
        else if (!validatePassword(password))
        nextErrors.password = 'Password must be 8+ characters, including numbers & symbols'

        if (!age) nextErrors.age = 'Age is required'
        else if (age < 18 || age > 100) nextErrors.age = 'Participants must be between 18-100 years old'

        if (!ticketType) nextErrors.ticketType = 'You must select a ticket type'

        if (websiteUrl && !/^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/.*)?$/.test(websiteUrl)) {
        nextErrors.websiteUrl = 'Invalid URL format'
        }

        if (!customField) nextErrors.customField = 'This field is required'

        if (!agreeToTerms) nextErrors.agreeToTerms = 'You must agree to the terms and conditions'

        setErrors(nextErrors)
        return Object.keys(nextErrors).length === 0
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!validate() || !formRef.current) return

        const formData = new FormData(formRef.current)
        const data = Object.fromEntries(formData.entries())

        console.log({
            menteeName: 'Fransisco Fu',
            menteeId: '1',
            data,
        })

        setSuccessName(String(data.fullName || 'Participant'))
        setIsSubmitted(true)

        formRef.current.reset()
        setErrors({})
    }

    const inputClass =
    'w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 outline-none transition focus:border-[--color-primary]'

    return (
        <main className="min-h-screen px-4 py-12 md:px-24">
            <div className="mx-auto max-w-4xl">
                <section className="rounded-3xl border border-white/10 bg-slate-900/50 p-6 shadow-2xl md:p-8">
                    <div className="mb-8">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[--color-primary]">Professional Cooking Class</p>
                        <h1 className="mt-2 text-3xl font-extrabold md:text-5xl">Cooking Class Registration Form</h1>
                    </div>

                    <form ref={formRef} onSubmit={handleSubmit} noValidate className="grid gap-5">
                        <Field label="Full Name" error={errors.fullName}>
                            <input name="fullName" className={inputClass} required placeholder="Your full name" />
                        </Field>

                        <Field label="Username" error={errors.username}>
                            <input
                                name="username"
                                className={inputClass}
                                required
                                minLength={6}
                                maxLength={20}
                                placeholder="username"
                            />
                        </Field>

                        <Field label="Email" error={errors.email}>
                            <input name="email" type="email" className={inputClass} required placeholder="name@email.com" />
                        </Field>

                        <Field label="Password" error={errors.password}>
                            <input name="password" type="password" className={inputClass} required placeholder="Insert password" />
                        </Field>

                        <Field label="Age" error={errors.age}>
                            <input name="age" type="number" className={inputClass} required min={18} max={100} placeholder="18" />
                        </Field>

                        <Field label="Ticket Type" error={errors.ticketType}>
                            <select name="ticketType" className={inputClass} required defaultValue="">
                                <option value="" disabled>
                                    Select a ticket type
                                </option>
                                {classTypes.map((type) => (
                                    <option key={type.id} value={type.label}>
                                        {type.label}
                                    </option>
                                ))}
                            </select>
                        </Field>

                        <Field label="Website / Portfolio" error={errors.websiteUrl}>
                            <input
                                name="websiteUrl"
                                type="url"
                                className={inputClass}
                                placeholder="https://your-portfolio.com"
                            />
                        </Field>

                        <Field label="Experience" error={errors.customField}>
                            <textarea
                                name="customField"
                                rows={4}
                                className={inputClass}
                                required
                                placeholder="Tell us about your experience"
                            />
                        </Field>

                        <div>
                            <label className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                                <input name="agreeToTerms" type="checkbox" className="mt-1 h-4 w-4" />
                                <span>I agree to the terms and conditions.</span>
                            </label>
                            {errors.agreeToTerms && <p className="mt-1 text-sm text-red-400">{errors.agreeToTerms}</p>}
                        </div>

                        <button
                            type="submit"
                            className="rounded-xl bg-[--color-primary] px-6 py-4 font-bold text-white transition hover:opacity-90"
                            >
                            Submit Registration
                        </button>
                    </form>
                </section>

                {isSubmitted && (
                    <div className="mb-6 rounded-2xl border border-emerald-500/30 bg-emerald-950/70 px-5 py-4 text-emerald-200 shadow-lg">
                        Registration Successful, {successName} - {groupName}!
                    </div>
                )}
            </div>
        </main>
    )
}

function Field({
    label,
    error,
    children,
}: {
    label: string
    error?: string
    children: React.ReactNode
}) {
    return (
        <div>
            <label className="mb-2 block text-sm font-semibold">{label}</label>
            {children}
            {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
        </div>
    )
}