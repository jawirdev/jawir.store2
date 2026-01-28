import { Product, Testimonial } from './types';

export const APPS_DATA: Product[] = [
    { id: 'canva', name: 'Canva', image: 'https://files.catbox.moe/4omm5s.jpg', cat: ['app', 'populer', 'editing'], packages: [
        { name: "Canva Member 1 Bulan", price: "Rp 3.000", priceVal: 3000, durationVal: 30, warranty: true, desc: ["Full garansi (Only BackFree)", "Canva pro via invite", "Support All Device", "Fitur pro open", "Tidak bisa upload font"] },
        { name: "Canva Member 1 Tahun", price: "Rp 25.000", priceVal: 25000, durationVal: 365, tag: "bulk", tagName: "HEMAT 30%", saveText: "Hemat Rp 11.000", warranty: true, desc: ["Full garansi", "Renew team tiap bulan", "Canva pro via invite", "Fitur pro open"] },
        { name: "Canva Designer 1 Bulan", price: "Rp 5.000", priceVal: 5000, durationVal: 30, warranty: true, desc: ["Full garansi", "Canva pro via invite", "Support All Device", "Fitur brandkit & upload font ON"] },
        { name: "Canva Designer 1 Tahun", price: "Rp 27.000", priceVal: 27000, durationVal: 365, tag: "bulk", tagName: "HEMAT 55%", saveText: "Hemat Rp 33.000", warranty: true, desc: ["Full garansi", "Renew team tiap bulan", "Fitur brandkit & upload font ON"] },
        { name: "Canva Owner 1 Bulan", price: "Rp 8.000", priceVal: 8000, durationVal: 30, warranty: true, desc: ["Garansi 25 Hari", "Akun dari seller", "Bisa invite ±100 Member", "Support All Device"] },
        { name: "Canva Edu Lifetime", price: "Rp 15.000", priceVal: 15000, warranty: true, desc: ["Garansi 6 Bulan", "Jarang ganti² team", "Canva pro via invite", "Support All Device"] },
        { name: "Canva Edu Head", price: "Rp 40.000", priceVal: 40000, warranty: false, desc: ["Akun dari seller", "No garansi (Hanya 1x login)", "Support All Device", "Bisa invite ±500 Member"] }
    ]},
    { id: 'capcut', name: 'CapCut', image: 'https://iili.io/fR1n5B9.png', cat: ['app', 'populer', 'editing'], packages: [
        { name: "Capcut Private 7 Hari", price: "Rp 5.000", priceVal: 5000, durationVal: 7, tag: "best", tagName: "BEST SELLER 🔥", warranty: false, desc: ["No garansi", "Private Account", "Max login 3 Device", "Bisa dijual sharing", "Support all device", "Login scan QR"] },
        { name: "Capcut Private 14 Hari", price: "Rp 9.000", priceVal: 9000, durationVal: 14, tag: "rec", tagName: "RECOMMENDED", warranty: true, desc: ["Garansi 7 hari", "Private Account", "Max login 3 Device", "Bisa dijual sharing", "Support all device"] },
        { name: "Capcut Private 21 Hari", price: "Rp 13.000", priceVal: 13000, durationVal: 21, warranty: true, desc: ["Garansi 7 hari", "Private Account", "Max login 3 Device", "Bisa dijual sharing", "Support all device"] },
        { name: "Capcut Private 28 Hari", price: "Rp 16.000", priceVal: 16000, durationVal: 28, warranty: true, desc: ["Garansi 7 hari", "Private Account", "Max login 3 Device", "Bisa dijual sharing", "Support all device"] },
        { name: "Capcut Private 35 Hari", price: "Rp 20.000", priceVal: 20000, durationVal: 35, warranty: true, desc: ["Garansi 7 hari", "Private Account", "Max login 3 Device", "Bisa dijual sharing", "Support all device"] }
    ]},
    { id: 'am', name: 'Alight Motion', image: 'https://files.catbox.moe/3v9hsy.jpg', cat: ['app', 'populer', 'editing'], packages: [
        { name: "Alight Motion Sharing 1 Tahun", price: "Rp 3.000", priceVal: 3000, durationVal: 365, warranty: true, desc: ["Garansi 6 bulan", "Sharing 3U", "Support All Device", "Dilarang sebar data"] },
        { name: "Alight Motion Private 1 Tahun", price: "Rp 6.000", priceVal: 6000, durationVal: 365, warranty: true, desc: ["Garansi 6 bulan", "Akun private", "Support All Device", "Bisa dijual ulang"] },
        { name: "10x AM Private 1 Tahun", price: "Rp 30.000", priceVal: 30000, durationVal: 365, tag: "bulk", tagName: "HEMAT 50%", saveText: "Hemat Rp 30k", warranty: true, desc: ["Garansi 6 bulan", "Akun private", "Cocok reseller", "Bisa dijual ulang"] },
        { name: "20x AM Private 1 Tahun", price: "Rp 40.000", priceVal: 40000, durationVal: 365, tag: "bulk", tagName: "HEMAT 67%", saveText: "Hemat Rp 80k", warranty: true, desc: ["Garansi 6 bulan", "Akun private", "Cocok reseller", "Bisa dijual ulang"] }
    ]},
    { id: 'spotify', name: 'Spotify', image: 'https://iili.io/f5n4Szx.png', cat: ['app', 'music'], packages: [
        { name: "Spotify Famplan 1 Bulan", price: "Rp 20.000", priceVal: 20000, durationVal: 30, warranty: true, desc: ["Garansi 15 Hari", "Private Account", "Bebas Iklan", "High Audio", "Bisa Perpanjang"] },
        { name: "Spotify Famplan 2 Bulan", price: "Rp 30.000", priceVal: 30000, durationVal: 60, tag: "bulk", tagName: "HEMAT 25%", saveText: "Hemat Rp 10k", warranty: true, desc: ["Garansi 30 Hari", "Private Account", "Bebas Iklan", "High Audio", "Bisa Perpanjang"] },
        { name: "Spotify Indplan 1 Bulan", price: "Rp 10.000", priceVal: 10000, durationVal: 30, warranty: true, desc: ["Garansi 15 Hari", "Private Account", "Bebas Iklan", "Download Offline"] },
        { name: "Spotify Indplan 3 Bulan", price: "Rp 15.000", priceVal: 15000, durationVal: 90, tag: "bulk", tagName: "HEMAT 50%", saveText: "Hemat Rp 15k", warranty: true, desc: ["Garansi 15 Hari", "Private Account", "Bebas Iklan", "Download Offline"] },
        { name: "Spotify Indplan 4 Bulan", price: "Rp 20.000", priceVal: 20000, durationVal: 120, tag: "bulk", tagName: "HEMAT 50%", saveText: "Hemat Rp 20k", warranty: true, desc: ["Garansi 15 Hari", "Private Account", "Bebas Iklan", "Download Offline"] },
        { name: "Spotify Student 1 Bulan", price: "Rp 8.000", priceVal: 8000, durationVal: 30, warranty: true, desc: ["Garansi 1x24jam", "Private Account", "Bebas Iklan", "Download Offline"] }
    ]},
    { id: 'bstation', name: 'Bstation', image: 'https://iili.io/f5n4UWQ.jpg', cat: ['app', 'movie'], packages: [
        { name: "Bstation Sharing 1 Bulan", price: "Rp 10.000", priceVal: 10000, durationVal: 30, warranty: true, desc: ["Garansi 15 Hari", "Sharing Account", "Bebas Iklan", "HD Quality"] },
        { name: "Bstation Sharing 3 Bulan", price: "Rp 15.000", priceVal: 15000, durationVal: 90, tag: "bulk", tagName: "HEMAT 50%", saveText: "Hemat Rp 15k", warranty: true, desc: ["Garansi 30 Hari", "Sharing Account", "Bebas Iklan", "HD Quality"] },
        { name: "Bstation Sharing 1 Tahun", price: "Rp 20.000", priceVal: 20000, durationVal: 365, tag: "best", tagName: "SUPER HEMAT", saveText: "Hemat Rp 100k", warranty: true, desc: ["Garansi 90 Hari", "Sharing Account", "Bebas Iklan", "HD Quality"] }
    ]},
    { id: 'scribd', name: 'Scribd', image: 'https://iili.io/f5n4gsV.png', cat: ['app'], packages: [
        { name: "Scribd Sharing 1 Bulan", price: "Rp 10.000", priceVal: 10000, durationVal: 30, warranty: true, desc: ["Garansi 15 Hari", "Sharing Account", "Support All Device", "Jutaan E-Book"] },
        { name: "Scribd Private 1 Bulan", price: "Rp 15.000", priceVal: 15000, durationVal: 30, warranty: true, desc: ["Garansi 15 Hari", "Private Account", "Support All Device", "Bebas Download"] }
    ]},
    { id: 'iqiyi', name: 'iQIYI', image: 'https://iili.io/fR1no7f.webp', cat: ['app', 'movie'], packages: [
        { name: "Iqiyi Sharing Standar 1 Bulan", price: "Rp 10.000", priceVal: 10000, durationVal: 30, warranty: true, desc: ["Garansi 15 Hari", "Sharing Account", "Bebas Iklan", "1080p"] },
        { name: "Iqiyi Private Standar 1 Bulan", price: "Rp 30.000", priceVal: 30000, durationVal: 30, warranty: true, desc: ["Garansi 15 Hari", "Private Account", "Bebas Iklan", "1080p"] },
        { name: "Iqiyi Sharing Standar 1 Tahun", price: "Rp 20.000", priceVal: 20000, durationVal: 365, tag: "rec", tagName: "RECOMMENDED", saveText: "Hemat Rp 100k", warranty: true, desc: ["Garansi 30 Hari", "Sharing Account", "Bebas Iklan", "1080p"] },
        { name: "Iqiyi Sharing Premium 1 Bulan", price: "Rp 15.000", priceVal: 15000, durationVal: 30, warranty: true, desc: ["Garansi 15 Hari", "Sharing Account", "Bebas Iklan", "4K UltraHD"] },
        { name: "Iqiyi Sharing Premium 1 Tahun", price: "Rp 25.000", priceVal: 25000, durationVal: 365, tag: "rec", tagName: "RECOMMENDED", saveText: "Hemat Rp 155k", warranty: true, desc: ["Garansi 30 Hari", "Sharing Account", "Bebas Iklan", "4K UltraHD"] }
    ]},
    { id: 'viu', name: 'VIU', image: 'https://iili.io/fR1nTI2.png', cat: ['app', 'movie'], packages: [
        { name: "VIU Lifetime", price: "Rp 5.000", priceVal: 5000, durationVal: 999, warranty: true, desc: ["Garansi 6 Bulan", "Private Account", "Anti Iklan"] },
        { name: "5x VIU Lifetime", price: "Rp 15.000", priceVal: 15000, tag: "bulk", tagName: "HEMAT 40%", saveText: "Hemat Rp 10k", warranty: true, desc: ["Garansi 6 Bulan", "Private Account", "Cocok Reseller"] },
        { name: "10x VIU Lifetime", price: "Rp 20.000", priceVal: 20000, tag: "bulk", tagName: "RECOMMENDED", saveText: "Hemat Rp 30k", warranty: true, desc: ["Garansi 6 Bulan", "Private Account", "Cocok Reseller"] }
    ]},
    { id: 'prime', name: 'Prime Video', image: 'https://iili.io/fR1nBgs.png', cat: ['app', 'movie'], packages: [
        { name: "Prime Video Sharing 1 Bulan", price: "Rp 8.000", priceVal: 8000, durationVal: 30, warranty: true, desc: ["Garansi 15 Hari", "Sharing Account", "Support All device", "Non-rental film"] },
        { name: "Prime Video Private 1 Bulan", price: "Rp 15.000", priceVal: 15000, durationVal: 30, warranty: true, desc: ["Garansi 20 Hari", "Private Account", "Support All device", "Non-rental film"] }
    ]},
    { id: 'zoom', name: 'Zoom', image: 'https://iili.io/fR1nxe4.jpg', cat: ['app'], packages: [
        { name: "Zoom 100 Peserta 7 Hari", price: "Rp 5.000", priceVal: 5000, durationVal: 7, warranty: true, desc: ["Support all device", "Garansi 3 Hari"] },
        { name: "Zoom 100 Peserta 14 Hari", price: "Rp 8.000", priceVal: 8000, durationVal: 14, warranty: true, desc: ["Support all device", "Garansi 7 Hari"] }
    ]},
    { id: 'gpt', name: 'ChatGPT', image: 'https://iili.io/fR1nAL7.png', cat: ['app', 'populer'], packages: [
        { name: "ChatGPT GO 1 Tahun", price: "Rp 15.000", priceVal: 15000, durationVal: 365, warranty: true, desc: ["Garansi 1x login", "Private Account", "Akses GPT-5 (Limited)", "10x limit"] },
        { name: "ChatGPT+ 1 Bulan", price: "Rp 20.000", priceVal: 20000, durationVal: 30, tag: "rec", tagName: "POPULAR", warranty: true, desc: ["Garansi 1x login", "Private Account", "Fast Response", "Akses GPT-5 & 4o"] },
        { name: "ChatGPT Head (Business)", price: "Rp 20.000", priceVal: 20000, durationVal: 30, warranty: true, desc: ["Garansi 1x login", "Private Account", "Invite 4-5 orang"] }
    ]},
    { id: 'lr', name: 'Lightroom', image: 'https://iili.io/fR1nuXS.png', cat: ['app', 'editing'], packages: [
        { name: "Lightroom Sharing 1 Bulan", price: "Rp 5.000", priceVal: 5000, durationVal: 30, warranty: true, desc: ["Sharing Account", "Garansi 15 Hari", "Support All Device"] },
        { name: "Lightroom Sharing 1 Tahun", price: "Rp 20.000", priceVal: 20000, durationVal: 365, warranty: true, desc: ["Sharing Account", "Garansi 6 Bulan", "Support All Device"] }
    ]},
    { id: 'meitu', name: 'Meitu', image: 'https://iili.io/f0ZvMYu.webp', cat: ['app', 'new', 'editing'], packages: [
        { name: "Meitu Private 7 Hari", price: "Rp 10.000", priceVal: 10000, durationVal: 7, warranty: false, desc: ["Akun seller", "Only Android", "Private account", "1 device", "No garansi"] },
        { name: "Meitu Private 14 Hari", price: "Rp 20.000", priceVal: 20000, durationVal: 14, warranty: false, desc: ["Akun seller", "Only Android", "Private account", "1 device", "No garansi"] },
        { name: "Meitu Private 30 Hari", price: "Rp 25.000", priceVal: 25000, durationVal: 30, warranty: false, desc: ["Akun seller", "Only Android", "Private account", "1 device", "No garansi"] }
    ]},
    { id: 'crunchyroll', name: 'Crunchyroll', image: 'https://iili.io/f0Zbi5x.jpg', cat: ['app', 'new', 'movie'], packages: [
        { name: "Plan Megafan Sharing 1 Bulan", price: "Rp 10.000", priceVal: 10000, durationVal: 30, warranty: true, desc: ["Akun seller", "Only mobile", "Garansi 15 Hari"] },
        { name: "Plan Megafan Private 1 Bulan", price: "Rp 20.000", priceVal: 20000, durationVal: 30, warranty: true, desc: ["Akun seller", "Private account", "Only mobile", "Garansi 15 Hari"] }
    ]},
    { id: 'wetv', name: 'WeTV', image: 'https://iili.io/f0DH11I.jpg', cat: ['app', 'new', 'movie'], packages: [
        { name: "WETV Sharing 1 Bulan", price: "Rp 10.000", priceVal: 10000, durationVal: 30, warranty: true, desc: ["Akun seller", "Sharing 6U", "Support All Device", "Garansi 15 Hari"] },
        { name: "WETV Private 1 Bulan", price: "Rp 35.000", priceVal: 35000, durationVal: 30, warranty: true, desc: ["Akun seller", "Private Account", "Support All Device", "Garansi 15 Hari"] }
    ]}
];

export const TESTIMONIALS: Testimonial[] = [
    { u: "@kokoroaja", c: "aman wak", d: "26 Mei 2026" }, { u: "@arry_sat", c: "aman kali wir🔥", d: "19 Mei 2026" }, 
    { u: "@ethaniy", c: "aman bet🙌🙌", d: "6 Okt 2026" }, { u: "@m_wildann1809", c: "AMAN+amanah👏", d: "4 Des 2026" },
    { u: "@zzakyd_", c: "Amaan👏", d: "23 Jun 2026" }, { u: "@v1nnn_ib", c: "Aman", d: "3 Nov 2026" },
    { u: "@ricditzz_design", c: "Aman", d: "8 Sep 2026" }, { u: "@mhmmdfamii", c: "BUY PANEL MURAH AMAN", d: "10 Nov 2026" },
    { u: "@mr.barr_", c: "Amanyoooo😂", d: "30 Jun 2026" }, { u: "@vqmakk", c: "AMAN", d: "15 Sep 2026" },
    { u: "@adhipele", c: "aman X", d: "7 Jul 2026" }, { u: "@azelonyth", c: "Aman", d: "17 Nov 2026" },
    { u: "@szenorthlenz", c: "aman min", d: "23 Jun 2026" }, { u: "@kinggmielz", c: "amann🔥", d: "26 Mei 2026" },
    { u: "@availa6le_", c: "aman cuy🔥", d: "6 Okt 2026" }, { u: "@gyuutaro_", c: "AMAN MIN", d: "16 Jun 2026" },
    { u: "@jusz.ordinary", c: "aman🔥", d: "6 Okt 2026" }, { u: "@raka_budi_s", c: "❤️", d: "12 Mei 2026" },
    { u: "@mraiseffendy59", c: "Aman bgt 🔥🔥", d: "27 Okt 2026" }, { u: "@fahri26429", c: "hm", d: "10 Nov 2026" },
    { u: "@ptra.valenn", c: "aman pol josjis🔥", d: "29 Sep 2026" }, { u: "@vigsjsns", c: "Aman", d: "29 Sep 2026" },
    { u: "@cylla12025", c: "Amanah", d: "17 Nov 2026" }, { u: "@madz.std", c: "aman dan aman🗿", d: "11 Ags 2026" },
    { u: "@ardiizxx", c: "Aman👍", d: "6 Okt 2026" }, { u: "@zenn_non", c: "AMAN WAK", d: "26 Mei 2026" },
    { u: "@by4ann_", c: "AMAN WOK", d: "22 Sep 2026" }, { u: "@venerable_fanzx", c: "aman si jawir", d: "3 Nov 2026" },
    { u: "@febgt_1yt", c: "Aman wir", d: "6 Des 2026" }, { u: "@aboyypeacefully", c: "Saya baru beli Akun sharing", d: "13 Okt 2026" },
    { u: "@rivaldyaj", c: "AMAN", d: "28 Jul 2026" }, { u: "@aldocukurukuk", c: "Aman", d: "9 Jun 2026" },
    { u: "@mpawsukayepink", c: "amann bangett", d: "25 Ags 2026" }, { u: "@azrilervandr", c: "aman cik", d: "28 Jul 2026" },
    { u: "@vall9.18", c: "AMAN", d: "29 Sep 2026" }, { u: "@vicky.mra", c: "Aman ges", d: "9 Jun 2026" },
    { u: "@mad.armanda", c: "aman", d: "7 Jul 2026" }, { u: "@alviskhairullah", c: "aman", d: "5 Des 2026" },
    { u: "@conutx4_", c: "bagi kalian yang mauuu beli", d: "12 Mei 2026" }, { u: "@mirfanpann", c: "Aman", d: "12 Mei 2026" },
    { u: "@tarow_design", c: "aman kali ini wak😍", d: "12 Mei 2026" }, { u: "@peqwougt", c: "AMAN", d: "12 Mei 2026" }
];
