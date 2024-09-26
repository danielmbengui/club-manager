module.exports = {
    host: "https://api.webflow.com",
    rootDir: "./devlink",
    siteId: process.env.NEXT_PUBLIC_DEVLINK_SITE_ID,
    authToken: process.env.NEXT_PUBLIC_DEVLINK_API_TOKEN, // An environment variable is recommended for this field.
    //cssModules: true,
    cssModules: false
  }