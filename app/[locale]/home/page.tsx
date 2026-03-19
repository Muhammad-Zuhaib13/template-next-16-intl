import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function HomePage() {
    const t = useTranslations('HomePage');

    // Get testimonials items
    const testimonials = [
        {
            name: t('testimonials.items.0.name'),
            role: t('testimonials.items.0.role'),
            company: t('testimonials.items.0.company'),
            content: t('testimonials.items.0.content'),
            avatar: t('testimonials.items.0.avatar')
        },
        {
            name: t('testimonials.items.1.name'),
            role: t('testimonials.items.1.role'),
            company: t('testimonials.items.1.company'),
            content: t('testimonials.items.1.content'),
            avatar: t('testimonials.items.1.avatar')
        },
        {
            name: t('testimonials.items.2.name'),
            role: t('testimonials.items.2.role'),
            company: t('testimonials.items.2.company'),
            content: t('testimonials.items.2.content'),
            avatar: t('testimonials.items.2.avatar')
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                            {t('hero.title')}
                        </h1>
                        <p className="text-xl md:text-2xl text-indigo-100 mb-10 max-w-3xl mx-auto">
                            {t('hero.description')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
                            >
                                {t('hero.cta.primary')}
                            </Link>
                            <Link
                                href="/about"
                                className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-600 transition-colors"
                            >
                                {t('hero.cta.secondary')}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            {t('features.title')}
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400">
                            {t('features.subtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Fast Feature */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform">
                            <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                {t('features.items.fast.title')}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                {t('features.items.fast.description')}
                            </p>
                        </div>

                        {/* Responsive Feature */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform">
                            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                {t('features.items.responsive.title')}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                {t('features.items.responsive.description')}
                            </p>
                        </div>

                        {/* Secure Feature */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform">
                            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                {t('features.items.secure.title')}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                {t('features.items.secure.description')}
                            </p>
                        </div>

                        {/* Scalable Feature */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform">
                            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                {t('features.items.scalable.title')}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                {t('features.items.scalable.description')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-white dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">
                        {t('stats.title')}
                    </h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                                {t('stats.items.users.value')}
                            </div>
                            <div className="text-gray-600 dark:text-gray-400">{t('stats.items.users.label')}</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                                {t('stats.items.projects.value')}
                            </div>
                            <div className="text-gray-600 dark:text-gray-400">{t('stats.items.projects.label')}</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                                {t('stats.items.countries.value')}
                            </div>
                            <div className="text-gray-600 dark:text-gray-400">{t('stats.items.countries.label')}</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                                {t('stats.items.support.value')}
                            </div>
                            <div className="text-gray-600 dark:text-gray-400">{t('stats.items.support.label')}</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            {t('testimonials.title')}
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400">
                            {t('testimonials.subtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                                <div className="flex items-center mb-6">
                                    <div className="text-4xl mr-4">{testimonial.avatar}</div>
                                    <div>
                                        <div className="font-bold text-gray-900 dark:text-white">{testimonial.name}</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">
                                            {testimonial.role} at {testimonial.company}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 italic">"{testimonial.content}"</p>
                                <div className="mt-4 flex text-yellow-400">
                                    {'★'.repeat(5)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        {t('cta.title')}
                    </h2>
                    <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                        {t('cta.description')}
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
                    >
                        {t('cta.button')}
                    </Link>
                </div>
            </section>
        </div>
    );
}