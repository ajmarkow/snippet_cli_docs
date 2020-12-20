export default {
  repository: 'https://github.com/ajmarkow/snippets_for_espanso',
  titleSuffix: ' – Snippet CLI',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Snippet CLI</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        A CLI to add snippets and forms to your Espanso configuration.
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Snippet CLI: Quickly add Snippets to Espanso" />
      <meta name="og:description" content="A ruby based command line interface for adding snippets to Espanso" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="apple-mobile-web-app-title" content="Nextra" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
      <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditOnGitHubLink: true,
  footerText: <>MIT {new Date().getFullYear()} © Snippet CLI.</>
}
