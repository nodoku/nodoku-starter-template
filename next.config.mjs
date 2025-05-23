
import withBundleAnalyzer from "@next/bundle-analyzer"
import path from "node:path";

const nextConfig = (phase, {defaultConfig}) => {
    /**
     * @type {import('next').NextConfig}
     */
    const nextConfig = {
        // output: 'export',

        /* config options here */
        ...defaultConfig,
        pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
        experimental: {
            // optimizePackageImports: ['nodoku-icons'],
            // serverComponentsExternalPackages: ['nodoku-icons'],

            workerThreads: false,
            cpus: 1
        },
        // serverExternalPackages: ['nodoku-icons'],

        webpack: ((config, opts) => {

            // config.resolve.alias["flowbite-react"] = path.resolve('./node_modules/flowbite-react');
            // config.resolve.alias["flowbite-react/components/Carousel"] = path.resolve('./node_modules/flowbite-react/dist/esm/components/Carousel/index.mjs');
            config.resolve.alias["flowbite"] = path.resolve('./node_modules/flowbite');

            return config;
        })
    }

    // console.log("default config ", nextConfig)

    nextConfig.transpilePackages = ["nodoku-core", "nodoku-components", "nodoku-flowbite", "nodoku-mambaui", "nodoku-icons"]

    return withBundleAnalyzer({enabled: process.env.ANALYZE === 'true', openAnalyzer: true, analyzerMode: "static"})(nextConfig)
}

export default nextConfig;