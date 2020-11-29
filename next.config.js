const path = require('path')
require('dotenv').config()
const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {
    hr: 'hr'
}

module.exports = {
    rewrites: async () => nextI18NextRewrites(localeSubpaths),

    env: {
        API_URL: process.env.API_URL,
        IMAGES_DOMAIN: process.env.IMAGES_DOMAIN
    },
    publicRuntimeConfig: {
        API_URL: process.env.API_URL,
        IMAGES_DOMAIN: process.env.IMAGES_DOMAIN
    },

    images: {
        deviceSizes: [640, 768, 1024, 1280, 1600],
        imageSizes: [16, 32, 48, 64, 96],
        domains: [process.env.IMAGES_DOMAIN],
        path: '/_next/image',
        loader: 'default'
    },

    webpack: config => {
        config.resolve.alias['components'] = path.join(__dirname, 'components')
        config.resolve.alias['public'] = path.join(__dirname, 'public')

        return config
    }
}
