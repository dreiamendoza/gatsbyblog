module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: 'Andrea Veronica Mendoza', // Navigation and Site Title
  siteTitleAlt: 'StillDREI', // Alternative Site title for SEO
  siteTitleManifest: 'StillDREI',
  siteUrl: 'https://stilldrei.netlify.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteHeadline: 'Writing and publishing content', // Headline for schema.org JSONLD
  siteBanner: '/social/stilldrei.jpg', // Your image for og:image tag. You can find it in the /static folder
  favicon: 'src/assets/images/dreilogo.png', // Your image for favicons. You can find it in the /src folder
  siteDescription: 'My blog site to post everyday experiences.', // Your site description
  // author: 'LekoArts', // Author for schemaORGJSONLD
  siteLogo: '/social/dreilogo.png', // Image for schemaORGJSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@minimal', // Twitter Username - Optional
  ogSiteName: 'minimal', // Facebook Site Name - Optional
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-47519312-6',

  // Manifest and Progress color
  // See: https://developers.google.com/web/fundamentals/web-app-manifest/
  themeColor: '#3498DB',
  backgroundColor: '#2b2e3c',
}
