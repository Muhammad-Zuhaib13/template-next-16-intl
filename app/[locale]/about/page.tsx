
import Content from "./Content";
import ClientLocale from "./ClientLocale";


export default async function AboutPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  // Await the params promise
  const { locale } = await params;

    return (

        <>
            <ClientLocale locale={locale} />
            <Content />
        </>

    );
}

