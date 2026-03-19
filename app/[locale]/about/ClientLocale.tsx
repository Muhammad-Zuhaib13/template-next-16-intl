'use client'
const ClientLocale = (props: any) => {
    const { locale } = props;
    return (
        <p className='text-4xl md:text-5xl font-bold text-gray-900'>{locale}</p>
    )
}

export default ClientLocale