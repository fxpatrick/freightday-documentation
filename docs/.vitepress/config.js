import { defineConfig } from "vitepress"

export default defineConfig({
  lang: 'en-US',
  title: 'Klearance Online',
  description: 'Aplikasi Pelaporan Bea Cukai',
  lastUpdated: true,
  head:[['link', { rel: "shortcut icon", href: "/favicofd.ico"}]],
  themeConfig: {
    logo: '/freightday.svg',
    siteTitle: false,
    nav: nav(),
    sidebar: {
      '/overview/': [
        {
          text: 'Overview',
          collapsible: true,
          // collapsed: true,
          items: [
            { text: 'FreightDay', link: '/overview/' },
            { text: 'Langkah Awal', link: '/overview/langkahawal' },
            { text: 'Jenis Order', link: '/overview/jenisorder' },
          ]
        },
        {
          text: 'Pengelolaan',
          collapsible: true,
          // collapsed: true,
          items: [
            { text: 'Profil Perusahaan', link: '/overview/profil' },
            { text: 'Legalitas Perusahaan', link: '/overview/legalitas' },
            { text: 'Pengguna', link: '/overview/pengguna' },
          ]
        }
      ],
      '/customer/': [
        {
          text: 'Order Saya',
          collapsible: true,
          items: [
            { text: 'Order Saya', link: '/customer/ordersaya' },
            { text: 'Invoice', link: '/customer/invoice' },
          ]
        },
      ],
      '/ff/': [
        {
          text: 'Kolam Order',
          collapsible: true,
          // collapsed: true,
          items: [
            { text: 'Memberikan Penawaran', link: '/ff/kolamorder' },
          ]
        },
        {
          text: 'Pekerjaan Saya',
          collapsible: true,
          // collapsed: true,
          items: [
            { text: 'Pekerjaan Saya', link: '/ff/pekerjaansaya' },
            { text: 'Penawaran', link: '/ff/penawaran' },
            { text: 'Invoice', link: '/ff/invoice' },
            { text: 'Order Mitra', link: '/ff/ordermitra' },
            { text: 'Invoice Mitra', link: '/ff/invoicemitra' },
            { text: 'Outward Manifest', link: '/ff/outwardmanifest' },
          ]
        },
        {
          text: 'Pengelolaan',
          collapsible: true,
          // collapsed: true,
          items: [
            { text: 'Riwayat Transaksi', link: '/ff/riwayattransaksi' },
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
    { text: 'Term of Services', link: '/legal/tos', activeMatch: '/legal/' },
    // { text: 'Truk', link: '/truk/', activeMatch: '/truk/' },
    // { text: 'Gudang', link: '/gudang/', activeMatch: '/gudang/' },
    // { text: 'Pelayaran', link: '/pelayaran/', activeMatch: '/pelayaran/' },
  ]
}

