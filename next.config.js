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
			{
				protocol: 'https',
				hostname: 'lh3.googleusercontent.com'
			},
			{
				protocol: 'https',
				hostname: 'lh4.googleusercontent.com'
			},
			{
				protocol: 'https',
				hostname: 'lh5.googleusercontent.com'
			},
			{
				protocol: 'https',
				hostname: 'lh6.googleusercontent.com'
			},
			{
				protocol: 'https',
				hostname: 'drive.google.com'
			}
        ]
    }
}

module.exports = nextConfig
