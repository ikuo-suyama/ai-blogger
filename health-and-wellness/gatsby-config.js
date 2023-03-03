const path = require("path")

module.exports = {
  pathPrefix: ``,
  siteMetadata: {
    title: `Miravi Blog`,
    name: `ミラヴィ - Miravi`,
    description:
      "美容や健康、ウェルネスに特化したライフスタイルサイト、ミラヴィ。日々の生活に役立つ情報を発信しています。",
    siteUrl: `https://pitayan.github.io`,
    siteSlogan: `ミラヴィ：美と健康のコミュニティ`,
    siteLinks: [
      // {
      //   name: "sitemap",
      //   url: "/sitemap/sitemap-index.xml",
      //   group: "site",
      //   internal: true,
      // },
      {
        name: "rss",
        url: "/rss.xml",
        group: "site",
        internal: true,
      },
      {
        name: "privacy",
        url: "/privacy-policy",
        group: "site",
        internal: true,
      },
      {
        name: "terms",
        url: "/terms-and-conditions",
        group: "site",
        internal: true,
      },
      {
        name: "about",
        url: "/about",
        group: "site,home",
        internal: true,
      },
      {
        name: "twitter",
        url: "https://twitter.com/martin_lover_se",
        group: "connect,home",
        internal: false,
      },
   ],
    siteCookieConsent: {
      title: '',
      description: '',
      readMore: '',
    },
    siteSubscription: {
      title: 'ニュースレター',
      description: '当サイトのメーリングリストにご登録いただけますと、専用の情報をいち早くお届けすることができます。',
    },
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({
              query: {
                site: {
                  siteMetadata: { siteUrl },
                },
                allMdx,
              },
            }) => {
              return allMdx.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  url: siteUrl + node.fields.slug,
                  guid: siteUrl + node.fields.slug,
                  custom_elements: [
                    {
                      "content:encoded": `<![CDATA[<p>${node.excerpt}<p>]]>`,
                    },
                    {
                      tags: node.frontmatter.categories.join(","),
                    },
                    {
                      featuredImage: siteUrl + node.frontmatter.hero.publicURL,
                    },
                  ],
                })
              })
            },
            query: `
              {
                allMdx(
                  filter: {
                    internal: {
                      contentFilePath: { regex: "/content/posts/" }
                    }
                  }
                  sort: {
                    frontmatter: {
                      date: DESC
                    }
                  }
                ) {
                  nodes {
                    excerpt
                    fields {
                      slug
                    }
                    frontmatter {
                      hero {
                        publicURL
                      }
                      categories
                      date
                      title
                      description
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            match: "^/posts/",
            title: "Pitayan's RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `@pitayan/gatsby-theme-pitayan`,
      options: {
        siteAssets: "src/assets",
        postsPerPage: 6,
        tableOfContentsLevels: 3,
        mailChimpEndpoint:
          "https://pitayanblog.us14.list-manage.com/subscribe/post?u=234bf6777b76872feb7d92a68&amp;id=27fad95f3b",
        mailChimpTimeout: 3500,
        applyGatsbyRemarkPlugins: defaultPlugins => [
          {
            resolve: `@raae/gatsby-remark-oembed`,
            options: {
              usePrefix: ["oembed"],
              providers: {
                exclude: ["Redit"],
              },
            },
          },
          `gatsby-remark-responsive-iframe`,
          ...defaultPlugins,
        ],
      },
    },
  ],
}
