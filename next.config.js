/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '96.30.126.41'
            },
            {
                protocol: 'https',
                hostname: 'i.ibb.co'
            },
        ],
		domains: [
			'96.30.126.41',
			'i.ibb.co',
		]
    }
}

module.exports = nextConfig
