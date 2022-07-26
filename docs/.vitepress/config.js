import { defineConfig } from "vitepress"

export default defineConfig({
  lang: 'en-US',
  title: 'Klearance Online',
  description: 'Aplikasi Pelaporan Bea Cukai',
  lastUpdated: true,
  head:[['link', { rel: "shortcut icon", href: "/freightdaylogo.ico"}]],
  themeConfig: {
    logo: '/freightdaylogo.svg',
    siteTitle: false,
    nav: nav(),
    sidebar: {
      '/overview/': [
        {
          text: 'Overview',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Freightday', link: '/overview/' }, 
            { text: 'Langkah Awal', link: '/overview/langkahawal' }, 
          ]
        },
        {
          text: 'Pengelolaan',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Profil Perusahaan', link: '/overview/profil' }, 
            { text: 'Legalitas Perusahaan', link: '/overview/legalitas' }, 
            { text: 'Pengguna', link: '/overview/pengguna' }, 
          ]
        }
      ],
      '/klrkb/': [
        {
          text: 'Dokumen',
          items: [
            { text: 'Kepabeanan', link: '/klrkb/dokumenbc/' }, 
            { text: 'Internal', link: '/klrkb/dokumeninternal/' }, 
          ]
        },
        {
          text: 'Integrasi',
          items: [
            { text: 'Sync Client', link: '/klrkb/syncclient/' }, 
            { text: 'API', link: '/klrkb/api/' }, 
            { text: 'TPB CEISA', link: '/klrkb/tpbceisa/' }, 
            { text: 'CDMS KB', link: '/klrkb/cdmskb/' }, 
          ]
        }
      ],

    },
    footer: {
      message: 'Bea Cukai Lebih Baik',
      copyright: 'Copyright © 2022 PT Solusi Manufaktur Teknologi'
    }
  }
})

function nav() {
  return [
    { text: 'Overview', link: '/overview/', activeMatch: '/overview/' },
    { text: 'Customer', link: '/customer/', activeMatch: '/customer/' },
    { text: 'Freight Forwarder', link: '/ff/', activeMatch: '/ff/' },
    { text: 'Truk', link: '/truk/', activeMatch: '/truk/' },
    { text: 'Gudang', link: '/gudang/', activeMatch: '/gudang/' },
    { text: 'Pelayaran', link: '/pelayaran/', activeMatch: '/pelayaran/' },
  ]
}

