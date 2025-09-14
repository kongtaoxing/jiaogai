/** @type {import('next').NextConfig} */
const nextConfig = {
  // 增加静态文件大小限制
  experimental: {
    largePageDataBytes: 128 * 1024 * 1024, // 128MB
  },
  // 配置静态文件处理
  async headers() {
    return [
      {
        source: '/material/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
