// const withPWA = require("next-pwa");
// const runtimeCaching = require("next-pwa/cache");
// const { withContentlayer } = require('next-contentlayer');

// module.exports = withContentlayer()({
//   swcMinify: true,
//   reactStrictMode: true,
//   images: {
//     domains: [
//       'i.scdn.co', // Spotify Album Art
//       'pbs.twimg.com' // Twitter Profile Picture
//     ]
//   },
// });

// module.exports = withPWA({
//   pwa: {
//     dest: "public",
//     register: true,
//     skipWaiting: true,
//     disable: process.env.NODE_ENV === "development",
//     runtimeCaching,
//     buildExcludes: [
//       /middleware-manifest\.json$/,
//       /_middleware.js$/,
//       /_middleware.js.map$/,
//     ],
//   },
//   images: {
//     domains: ["res.cloudinary.com"],
//   },
// });

const withImages = require('next-images')
module.exports = withImages()