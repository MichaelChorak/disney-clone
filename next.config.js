/** @type {import('next').NextConfig} */
const nextConfig = {
    //whitelist domain
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "links.papareact.com"
            }

        ]
    }
}

module.exports = nextConfig
