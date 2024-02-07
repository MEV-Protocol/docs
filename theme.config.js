/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
export default {
  docsRepositoryBase: "https://github.com/MEV-Protocol/docs/tree/main",
  useNextSeoProps: () => ({
    titleTemplate: "%s - MEV Protocol",
  }),
  search: {
    placeholder: "Search...",
  },
  // primaryHue: '172',
  darkMode: true,
  footer: {
    text: `MIT ${new Date().getFullYear()} © MEV Protocol.`,
  },
  logo: (
    <>
      <span className="mr-2 font-extrabold md:inline"></span>
      <span className="text-gray-600 font-normal hidden md:inline">MEV Protocol</span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="MEV Protocol: Ethereum's next-generation seamless liquid staking protocol. Built from the ground up for MEV capture and Validator rewards."
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@mevdotio" />
      <meta name="twitter:title" content="MEV Protocol" />
      <meta
        name="twitter:description"
        content="mevETH is the token of MEV Optimized Liquid Staking Protocol. An Ethereum next-generation seamless liquid staking protocol. Built from the ground up for MEV capture and Validator rewards."
      />
      <meta name="twitter:image" content="https://docs.mev.io/mevETH.jpg" />
      <meta property="og:title" content="MEV Protocol: The liquidity base-layer." />
      <meta
        property="og:description"
        content="mevETH is the token of MEV Optimized Liquid Staking Protocol. An Ethereum next-generation seamless liquid staking protocol."
      />
      <meta property="og:image" content="https://docs.mev.io/banner.jpeg" />
      <meta name="apple-mobile-web-app-title" content="MEV Protocol" />
    </>
  ),
};
