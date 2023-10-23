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
				hostname: 'drive.google.com'
			}
        ],
		domains: [
			'96.30.126.41',
			'i.ibb.co',
			'lh3.googleusercontent.com',
			'lh4.googleusercontent.com',
			'lh5.googleusercontent.com',
			'lh6.googleusercontent.com',
			'drive.google.com',
			'googleusercontent.com'
		]
    }
}

module.exports = nextConfig
