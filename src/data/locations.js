// Rota Belli — Tüm statik veriler
// Canlı veri entegrasyonu için API servislerinden güncellenebilir

export const LOKASYONLAR = [
  // ── İstanbul Doğa Lokasyonları ──
  { id:1, tip:"Mavi Bayrak", isim:"Arnavutköy Yeniköy Halk Plajı", mesafe:"27 km", puan:4.7, renk:"#0096c7", emoji:"🏅", etiket:"Karadeniz · 400m Kumsal", lat:41.2667, lon:28.9167 },
  { id:2, tip:"Mavi Bayrak", isim:"Karaburun Plajı",                mesafe:"32 km", puan:4.5, renk:"#0096c7", emoji:"🏅", etiket:"Doğa İç İçe · Gölge Orman", lat:41.3667, lon:28.6833 },
  { id:3, tip:"Mavi Bayrak", isim:"Kumluk Mevkii – Silivri",        mesafe:"70 km", puan:4.6, renk:"#0096c7", emoji:"🏅", etiket:"Marmara · Geniş Kumsal", lat:41.0736, lon:28.2478 },
  { id:4, tip:"Kamp",        isim:"Uzunya Beach Kamping",            mesafe:"55 km", puan:4.8, renk:"#e76f51", emoji:"⛺", etiket:"Korunaklı Koy · 1000 Araçlık", lat:41.1167, lon:29.0833 },
  { id:5, tip:"Kamp",        isim:"Riva Elmasburnu",                 mesafe:"48 km", puan:4.4, renk:"#e76f51", emoji:"⛺", etiket:"Elektriksiz · Doğal Kamp", lat:41.2167, lon:29.2000 },
  { id:6, tip:"Göl",         isim:"Büyükçekmece Gölü",              mesafe:"38 km", puan:4.6, renk:"#52b788", emoji:"🏞️", etiket:"Bisiklet Yolu · Piknik", lat:41.0486, lon:28.5931 },
  { id:7, tip:"Göl",         isim:"Terkos Gölü / Durusu",           mesafe:"45 km", puan:4.5, renk:"#52b788", emoji:"🏞️", etiket:"Orman Kampı · Yıldız Gözlemi", lat:41.3333, lon:28.5500 },
  { id:8, tip:"Su Sporları", isim:"Kilyos Sörf Merkezi",            mesafe:"35 km", puan:4.9, renk:"#4cc9f0", emoji:"🏄", etiket:"Karadeniz Dalgaları", lat:41.2333, lon:29.0167 },

  // ── Türkiye Tarihi Yerler (UNESCO + Önemli SİT) ──
  // Mezopotamya & Güneydoğu
  { id:10, tip:"Tarihi Yer", isim:"Balıklıgöl",              mesafe:"—", puan:4.8, renk:"#d4a373", emoji:"🐟", etiket:"Şanlıurfa · Peygamber İbrahim'e ait kutsal göl · 12.000 yıllık yerleşim", lat:37.1583, lon:38.7917 },
  { id:11, tip:"Tarihi Yer", isim:"Zerzevan Kalesi",         mesafe:"—", puan:4.6, renk:"#d4a373", emoji:"🏰", etiket:"Diyarbakır · Roma sınır kalesi · Sığınak & tapınak kompleksi", lat:37.6139, lon:40.4958 },
  { id:12, tip:"Tarihi Yer", isim:"Göbeklitepe",             mesafe:"—", puan:4.9, renk:"#d4a373", emoji:"🗿", etiket:"Şanlıurfa · Dünyanın en eski tapınağı · MÖ 9600 · UNESCO", lat:37.2231, lon:38.9225 },
  { id:13, tip:"Tarihi Yer", isim:"Harran Evleri",           mesafe:"—", puan:4.4, renk:"#d4a373", emoji:"🏠", etiket:"Şanlıurfa · Kubbe evler · 3.000 yıllık yerleşim", lat:36.8667, lon:39.0333 },
  { id:14, tip:"Tarihi Yer", isim:"Nemrut Dağı",             mesafe:"—", puan:4.8, renk:"#d4a373", emoji:"🗻", etiket:"Adıyaman · Kommagene Krallığı · Devasa heykeller · UNESCO", lat:37.9819, lon:38.7413 },
  { id:15, tip:"Tarihi Yer", isim:"Dara Antik Kenti",        mesafe:"—", puan:4.3, renk:"#d4a373", emoji:"🏛️", etiket:"Mardin · Roma şehir kalıntıları · Sarnıçlar & mezarlık", lat:37.1792, lon:40.2203 },

  // İç Anadolu
  { id:20, tip:"Tarihi Yer", isim:"Çatalhöyük",              mesafe:"—", puan:4.8, renk:"#bc6c25", emoji:"🏺", etiket:"Konya · Dünyanın ilk şehirlerinden · MÖ 7500 · UNESCO", lat:37.6667, lon:32.8283 },
  { id:21, tip:"Tarihi Yer", isim:"Kapadokya",               mesafe:"—", puan:4.9, renk:"#bc6c25", emoji:"🎈", etiket:"Nevşehir · Peribacaları · Yeraltı şehirleri · UNESCO", lat:38.6431, lon:34.8331 },
  { id:22, tip:"Tarihi Yer", isim:"Alacahöyük",              mesafe:"—", puan:4.5, renk:"#bc6c25", emoji:"⚱️", etiket:"Çorum · Hitit merkezi · Sfenks kapı · MÖ 4000", lat:40.2333, lon:34.6833 },
  { id:23, tip:"Tarihi Yer", isim:"Yazılıkaya",              mesafe:"—", puan:4.6, renk:"#bc6c25", emoji:"🪨", etiket:"Çorum · Hitit tapınağı · Hitit tanrı reliefleri", lat:40.0278, lon:34.6436 },
  { id:24, tip:"Tarihi Yer", isim:"Gordion",                 mesafe:"—", puan:4.4, renk:"#bc6c25", emoji:"🪢", etiket:"Ankara · Frigya başkenti · Gordion düğümü · UNESCO", lat:39.6500, lon:31.9833 },
  { id:25, tip:"Tarihi Yer", isim:"Divriği Ulu Camii",       mesafe:"—", puan:4.7, renk:"#bc6c25", emoji:"🕌", etiket:"Sivas · Selçuklu mimarisi · UNESCO", lat:39.3714, lon:38.1136 },

  // Ege & Batı
  { id:30, tip:"Tarihi Yer", isim:"Efes Antik Kenti",        mesafe:"—", puan:4.9, renk:"#6a994e", emoji:"🏛️", etiket:"İzmir · Roma dönemi · Celsus Kütüphanesi · UNESCO", lat:37.9397, lon:27.3408 },
  { id:31, tip:"Tarihi Yer", isim:"Bergama (Pergamon)",      mesafe:"—", puan:4.8, renk:"#6a994e", emoji:"📜", etiket:"İzmir · Helenistik krallık merkezi · UNESCO", lat:39.1333, lon:27.1833 },
  { id:32, tip:"Tarihi Yer", isim:"Aphrodisias",             mesafe:"—", puan:4.6, renk:"#6a994e", emoji:"🎭", etiket:"Aydın · Afrodit tapınağı · Stadyum · UNESCO", lat:37.7083, lon:28.7236 },
  { id:33, tip:"Tarihi Yer", isim:"Hierapolis",              mesafe:"—", puan:4.7, renk:"#6a994e", emoji:"♨️", etiket:"Denizli · Antik Roma kaplıcaları · UNESCO (Pamukkale ile birlikte)", lat:37.9250, lon:29.1256 },
  { id:34, tip:"Tarihi Yer", isim:"Pamukkale",               mesafe:"—", puan:4.8, renk:"#6a994e", emoji:"💎", etiket:"Denizli · Kalsiyum terasları · UNESCO", lat:37.9139, lon:29.1189 },
  { id:35, tip:"Tarihi Yer", isim:"Laodikeia",               mesafe:"—", puan:4.4, renk:"#6a994e", emoji:"🏟️", etiket:"Denizli · Yedi kiliseden biri · Antik stadyum", lat:37.8347, lon:29.1094 },
  { id:36, tip:"Tarihi Yer", isim:"Milet",                   mesafe:"—", puan:4.5, renk:"#6a994e", emoji:"🧭", etiket:"Aydın · Antik liman şehir · Thales'in şehri", lat:37.5306, lon:27.2786 },
  { id:37, tip:"Tarihi Yer", isim:"Didyma",                  mesafe:"—", puan:4.5, renk:"#6a994e", emoji:"🔮", etiket:"Aydın · Apollon tapınağı · Antik kehanet merkezi", lat:37.3853, lon:27.2569 },
  { id:38, tip:"Tarihi Yer", isim:"Priene",                  mesafe:"—", puan:4.3, renk:"#6a994e", emoji:"🏘️", etiket:"Aydın · Helenistik planlı şehir · Grid mimari", lat:37.6597, lon:27.2978 },

  // Karadeniz
  { id:40, tip:"Tarihi Yer", isim:"Trabzon Ayasofya Müzesi", mesafe:"—", puan:4.7, renk:"#588157", emoji:"⛪", etiket:"Trabzon · Bizans dönemi kilisesi · 13. yüzyıl freskleri", lat:41.0067, lon:39.7167 },
  { id:41, tip:"Tarihi Yer", isim:"Sumela Manastırı",        mesafe:"—", puan:4.8, renk:"#588157", emoji:"🏔️", etiket:"Trabzon · Kaya manastırı · MÖ 386 · Uçurum kenarı", lat:40.6903, lon:39.6592 },
  { id:42, tip:"Tarihi Yer", isim:"Amasya Kral Kaya Mezarları", mesafe:"—", puan:4.5, renk:"#588157", emoji:"👑", etiket:"Amasya · Pontus kralları · Kaya mezarları", lat:40.6500, lon:35.8333 },
  { id:43, tip:"Tarihi Yer", isim:"Safranbolu",              mesafe:"—", puan:4.7, renk:"#588157", emoji:"🏡", etiket:"Karabük · Osmanlı evleri · UNESCO", lat:41.2500, lon:32.6833 },
  { id:44, tip:"Tarihi Yer", isim:"Hattuşaş",                mesafe:"—", puan:4.8, renk:"#588157", emoji:"🦁", etiket:"Çorum · Hitit başkenti · UNESCO", lat:40.0167, lon:34.6167 },

  // Akdeniz & Güney
  { id:50, tip:"Tarihi Yer", isim:"Antalya Kaleiçi",         mesafe:"—", puan:4.6, renk:"#457b9d", emoji:"🏰", etiket:"Antalya · Roma, Bizans, Osmanlı katmanları · Liman", lat:36.8841, lon:30.7056 },
  { id:51, tip:"Tarihi Yer", isim:"Perge Antik Kenti",       mesafe:"—", puan:4.7, renk:"#457b9d", emoji:"🏟️", etiket:"Antalya · Roma stadyumu · Helenistik surlar", lat:36.9617, lon:30.8533 },
  { id:52, tip:"Tarihi Yer", isim:"Aspendos",                mesafe:"—", puan:4.9, renk:"#457b9d", emoji:"🎭", etiket:"Antalya · Dünyanın en iyi korunmuş Roma tiyatrosu", lat:36.9383, lon:31.1733 },
  { id:53, tip:"Tarihi Yer", isim:"Side Antik Kenti",        mesafe:"—", puan:4.6, renk:"#457b9d", emoji:"🌊", etiket:"Antalya · Antik liman · Apollon tapınağı", lat:36.7667, lon:31.3889 },
  { id:54, tip:"Tarihi Yer", isim:"Patara",                  mesafe:"—", puan:4.5, renk:"#457b9d", emoji:"🏖️", etiket:"Antalya · Likya medeniyeti · Dünya'nın en eski parlamento binası", lat:36.2667, lon:29.3167 },
  { id:55, tip:"Tarihi Yer", isim:"Letoon",                  mesafe:"—", puan:4.4, renk:"#457b9d", emoji:"🏛️", etiket:"Antalya · Likya başkenti · UNESCO (Xanthos ile birlikte)", lat:36.3333, lon:29.3167 },
  { id:56, tip:"Tarihi Yer", isim:"Xanthos",                 mesafe:"—", puan:4.5, renk:"#457b9d", emoji:"🪦", etiket:"Antalya · Likya birlik başkenti · UNESCO", lat:36.3569, lon:29.3186 },
  { id:57, tip:"Tarihi Yer", isim:"Myra Antik Kenti",        mesafe:"—", puan:4.6, renk:"#457b9d", emoji:"⚰️", etiket:"Antalya · Kaya mezarları · Aziz Nikolaos'un şehri", lat:36.2583, lon:29.9833 },
  { id:58, tip:"Tarihi Yer", isim:"Phaselis",                mesafe:"—", puan:4.5, renk:"#457b9d", emoji:"⚓", etiket:"Antalya · Antik liman şehir · 3 liman", lat:36.5167, lon:30.5500 },
  { id:59, tip:"Tarihi Yer", isim:"Olympos",                 mesafe:"—", puan:4.4, renk:"#457b9d", emoji:"🔥", etiket:"Antalya · Likya şehri · Yanardağ ateşi", lat:36.3833, lon:30.4667 },

  // Marmara & İstanbul
  { id:60, tip:"Tarihi Yer", isim:"Ayasofya-i Kebir Camii",  mesafe:"—", puan:4.9, renk:"#7f5539", emoji:"🕌", etiket:"İstanbul · Bizans & Osmanlı · UNESCO", lat:41.0086, lon:28.9802 },
  { id:61, tip:"Tarihi Yer", isim:"Topkapı Sarayı",          mesafe:"—", puan:4.8, renk:"#7f5539", emoji:"👑", etiket:"İstanbul · Osmanlı sarayı · 400 yıl başkent · UNESCO", lat:41.0115, lon:28.9833 },
  { id:62, tip:"Tarihi Yer", isim:"Sultanahmet Camii",       mesafe:"—", puan:4.8, renk:"#7f5539", emoji:"🕌", etiket:"İstanbul · Mavi Camii · 6 minare", lat:41.0054, lon:28.9768 },
  { id:63, tip:"Tarihi Yer", isim:"Yedikule Hisarı",         mesafe:"—", puan:4.5, renk:"#7f5539", emoji:"🏰", etiket:"İstanbul · Bizans surları · Osmanlı dönemi", lat:41.0214, lon:28.9211 },
  { id:64, tip:"Tarihi Yer", isim:"Süleymaniye Camii",       mesafe:"—", puan:4.8, renk:"#7f5539", emoji:"🕌", etiket:"İstanbul · Mimar Sinan başyapıtı", lat:41.0161, lon:28.9639 },
  { id:65, tip:"Tarihi Yer", isim:"Kariye Camii",            mesafe:"—", puan:4.7, renk:"#7f5539", emoji:"🎨", etiket:"İstanbul · Bizans mozaikleri & freskleri", lat:41.0317, lon:28.9392 },
  { id:66, tip:"Tarihi Yer", isim:"Troya Antik Kenti",       mesafe:"—", puan:4.7, renk:"#7f5539", emoji:"🐴", etiket:"Çanakkale · Truva Savaşı · UNESCO", lat:39.9575, lon:26.2389 },
  { id:67, tip:"Tarihi Yer", isim:"Gallipoli Yarımadası",    mesafe:"—", puan:4.8, renk:"#7f5539", emoji:"⚔️", etiket:"Çanakkale · Çanakkale Savaşı · Anıt mezarlık", lat:40.3572, lon:26.4553 },
  { id:68, tip:"Tarihi Yer", isim:"Edirne Selimiye Camii",   mesafe:"—", puan:4.8, renk:"#7f5539", emoji:"🕌", etiket:"Edirne · Mimar Sinan'ın ustalık eseri · UNESCO", lat:41.6771, lon:26.5557 },
];

export const AKTIVITELER = [
  { id:"yuruyus",  icon:"🥾", label:"Yürüyüş",     color:"#52b788", rota:"Belgrad Ormanı – Şile – Ağva Kıyı – Polonezköy",   detay:"3–15 km parkurlar · Tüm seviyeler · Toplu taşıma uyumlu", km:"3–15 km" },
  { id:"trekking", icon:"⛰️", label:"Trekking",    color:"#f4a261", rota:"Aydos Tepesi – Ihlamur Vadisi – Armutlu Yarımadası", detay:"Teknik arazi · Rehberli grup çıkışları · GPS destekli",    km:"8–20 km" },
  { id:"bisiklet", icon:"🚴", label:"Bisiklet",    color:"#4cc9f0", rota:"Büyükçekmece Gölü – Adalar – Belgrad Ormanı MTB",    detay:"Asfalt & çakıl · E-bike kiralama noktaları",             km:"12–30 km" },
  { id:"kamp",     icon:"⛺", label:"Kamp",         color:"#e76f51", rota:"Sahilköy – Uzunya – Riva – Terkos – Ağva",           detay:"Plaj + orman + dere kenarı · Ekipman kiralama mevcut",   km:"Yerleşik" },
  { id:"su",       icon:"🏄", label:"Su Sporları", color:"#0096c7", rota:"Kilyos (sörf) · Büyükada (SUP) · Ağva (kano)",       detay:"CMAS sertifikalı merkezler · Başlangıç–ileri seviye",    km:"Deniz & Göl" },
  { id:"doga",     icon:"🌿", label:"Doğa",        color:"#a8dadc", rota:"Terkos (kuş) · Şile (fotoğraf) · Kilyos (yoga)",     detay:"Yıldız gözlemi · Botanik tur · Aile piknik alanları",   km:"Tüm Alanlar" },
];

// ═══════════════════════════════════════════
// TARİHİ GEZİ ROTALARI — Türkiye Genel
// ═══════════════════════════════════════════
export const TARIHI_ROTLAR = [
  {
    id:"mezopotamya",
    icon:"🏛️",
    label:"Mezopotamya Uygarlıkları Rotası",
    color:"#d4a373",
    seviye:"Orta",
    sure:"4–5 gün",
    mesafe:"~1.200 km",
    konum:"Güneydoğu Anadolu",
    aciklama:"İbrahim'in şehri Urfa'dan başlayan, insanlığın ilk kentlerini keşfetme yolculuğu.",
    duraklar:[
      { sira:1, isim:"Balıklıgöl & Urfa Kalesi",    il:"Şanlıurfa", detay:"Kutsal göl · Haleplibahçe Mozaik Müzesi · Balıklıgöl Camii" },
      { sira:2, isim:"Göbeklitepe",                  il:"Şanlıurfa", detay:"Dünyanın en eski tapınağı · MÖ 9600 · UNESCO Dünya Mirası" },
      { sira:3, isim:"Harran Evleri",               il:"Şanlıurfa", detay:"Kubbe evler · 3.000 yıllık yerleşim · Harran Üniversitesi kalıntıları" },
      { sira:4, isim:"Nemrut Dağı",                 il:"Adıyaman",  detay:"Kommagene Krallığı · Devasa heykeller · Günümüz/gün batımı · UNESCO" },
      { sira:5, isim:"Dara Antik Kenti",            il:"Mardin",    detay:"Roma şehir kalıntıları · Sarnıçlar · Mezarlık" },
      { sira:6, isim:"Zerzevan Kalesi",             il:"Diyarbakır",detay:"Roma sınır kalesi · Sığınak & tapınak kompleksi · Mithras tapınağı" },
    ],
  },
  {
    id:"anadolu-hitit",
    icon:"🦁",
    label:"Hitit İmparatorluğu Rotası",
    color:"#bc6c25",
    seviye:"Orta",
    sure:"3–4 gün",
    mesafe:"~600 km",
    konum:"İç Anadolu",
    aciklama:"Anadolu'nun ilk büyük imparatorluğunun izinde — başkent Hattuşaş'tan Alacahöyük'e.",
    duraklar:[
      { sira:1, isim:"Hattuşaş (Boğazkale)",        il:"Çorum",  detay:"Hitit başkenti · Aslanlı Kapı · Kral Kapısı · Yazılıkaya · UNESCO" },
      { sira:2, isim:"Yazılıkaya",                  il:"Çorum",  detay:"Hitit tapınağı · Tanrı ve tanrıça reliefleri · Açık hava tapınağı" },
      { sira:3, isim:"Alacahöyük",                  il:"Çorum",  detay:"Hitit merkezi · Sfenks kapı · Kral mezarları · MÖ 4000 yerleşim" },
      { sira:4, isim:"Gordion",                     il:"Ankara", detay:"Frigya başkenti · Gordion düğümü · Midas Tümülüsü · UNESCO" },
      { sira:5, isim:"Çatalhöyük",                  il:"Konya",  detay:"Dünyanın ilk şehirlerinden · MÖ 7500 · UNESCO Dünya Mirası" },
    ],
  },
  {
    id:"kapadokya",
    icon:"🎈",
    label:"Kapadokya Büyüleyici Rotası",
    color:"#e07a5f",
    seviye:"Kolay",
    sure:"2–3 gün",
    mesafe:"~300 km",
    konum:"İç Anadolu (Nevşehir)",
    aciklama:"Peribacaları, yeraltı şehirleri ve balon turuyla eşsiz bir coğrafya.",
    duraklar:[
      { sira:1, isim:"Göreme Açık Hava Müzesi",     il:"Nevşehir", detay:"Kaya kiliseler · UNESCO · Tokalı Kilise · Karanlık Kilise" },
      { sira:2, isim:"Derinkuyu Yeraltı Şehri",     il:"Nevşehir", detay:"8 kat derinlik · 20.000 kişilik · Hıristiğan sığınak şehri" },
      { sira:3, isim:"Kaymaklı Yeraltı Şehri",      il:"Nevşehir", detay:"4 kat açılmış · Tünel sistemleri · Koridorlar" },
      { sira:4, isim:"Uçhisar Kalesi",              il:"Nevşehir", detay:"60 metre kaya kalesi · Panoramik Kapadokya manzarası" },
      { sira:5, isim:"Ihlara Vadisi",               il:"Aksaray",  detay:"14 km kanyon · Kaya kiliseler · Botanik yürüyüş" },
      { sira:6, isim:"Soğanlı Vadisi",              il:"Kayseri",  detay:"Gizli kiliseler · Freskler · Keşfedilmemiş Kapadokya" },
    ],
  },
  {
    id:"ege-antik",
    icon:"🏛️",
    label:"Ege Antik Kentleri Rotası",
    color:"#6a994e",
    seviye:"Kolay–Orta",
    sure:"5–7 gün",
    mesafe:"~800 km",
    konum:"Ege Bölgesi",
    aciklama:"Roma, Helenistik ve Likya medeniyetlerinin en iyi korunmuş kalıntıları.",
    duraklar:[
      { sira:1, isim:"Efes Antik Kenti",            il:"İzmir",  detay:"Celsus Kütüphanesi · Büyük Tiyatro · UNESCO · Meryem Ana Evi" },
      { sira:2, isim:"Priene",                      il:"Aydın",  detay:"Helenistik planlı şehir · Grid mimari · Athena tapınağı" },
      { sira:3, isim:"Milet",                       il:"Aydın",  detay:"Antik liman şehir · Thales'in şehir · Tiyatro · Hamam" },
      { sira:4, isim:"Didyma",                      il:"Aydın",  detay:"Apollon tapınağı · Antik kehanet merkezi · Devasa İyon sütunlar" },
      { sira:5, isim:"Bergama (Pergamon)",          il:"İzmir",  detay:"Helenistik krallık merkezi · Asklepion · Kütüphane · UNESCO" },
      { sira:6, isim:"Aphrodisias",                 il:"Aydın",  detay:"Afrodit tapınağı · Stadyum · Sebasteion · UNESCO" },
      { sira:7, isim:"Hierapolis & Pamukkale",      il:"Denizli",detay:"Antik Roma kaplıcaları · Kalsiyum terasları · UNESCO" },
      { sira:8, isim:"Laodikeia",                   il:"Denizli",detay:"Yedi kiliseden biri · Antik stadyum · Su kemeri" },
    ],
  },
  {
    id:"akdeniz-likya",
    icon:"⚓",
    label:"Likya Yolu & Akdeniz Rotası",
    color:"#457b9d",
    seviye:"Orta–İleri",
    sure:"5–7 gün",
    mesafe:"~700 km",
    konum:"Akdeniz (Antalya–Muğla)",
    aciklama:"Likya medeniyetinin kaya mezarları, antik limanları ve dünyanın en güzel yürüyüş yolu.",
    duraklar:[
      { sira:1, isim:"Antalya Kaleiçi",             il:"Antalya", detay:"Roma, Bizans, Osmanlı katmanları · Hadrian Kapısı · Liman" },
      { sira:2, isim:"Perge Antik Kenti",           il:"Antalya", detay:"Roma stadyumu · Helenistik surlar · Nymphaeum" },
      { sira:3, isim:"Aspendos",                    il:"Antalya", detay:"Dünyanın en iyi korunmuş Roma tiyatrosu · 15.000 kişi" },
      { sira:4, isim:"Side Antik Kenti",            il:"Antalya", detay:"Antik liman · Apollon tapınağı · Agora" },
      { sira:5, isim:"Alanya Kalesi",               il:"Antalya", detay:"Selçuklu kalesi · Tersane · Kızıl Kule" },
      { sira:6, isim:"Patara",                      il:"Antalya", detay:"Likya medeniyeti · Dünya'nın en eski parlamento binası · Plaj" },
      { sira:7, isim:"Xanthos & Letoon",           il:"Antalya", detay:"Likya birlik başkenti · UNESCO · Harf anıtları" },
      { sira:8, isim:"Myra Antik Kenti",            il:"Antalya", detay:"Kaya mezarları · Aziz Nikolaos'un şehir · Tiyatro" },
      { sira:9, isim:"Olympos & Çıralı",            il:"Antalya", detay:"Likya şehri · Yanardağ ateşi · Plaj · Likya Yolu başlangıcı" },
      { sira:10, isim:"Phaselis",                   il:"Antalya", detay:"Antik liman şehir · 3 liman · Plaj · Agora" },
    ],
  },
  {
    id:"karadeniz-bizans",
    icon:"⛪",
    label:"Karadeniz Bizans Rotası",
    color:"#588157",
    seviye:"Orta",
    sure:"3–4 gün",
    mesafe:"~500 km",
    konum:"Karadeniz Bölgesi",
    aciklama:"Bizans döneminin gizli hazine kalmış kilise ve manastırları.",
    duraklar:[
      { sira:1, isim:"Trabzon Ayasofya Müzesi",     il:"Trabzon", detay:"Bizans dönemi kilisesi · 13. yüzyıl freskleri · Müze" },
      { sira:2, isim:"Sumela Manastırı",            il:"Trabzon", detay:"Kaya manastırı · MÖ 386 · Uçurum kenarı · Doğa içinde" },
      { sira:3, isim:"Amasya Kral Kaya Mezarları",  il:"Amasya",  detay:"Pontus kralları · Kaya mezarları · Boztepe manzarası" },
      { sira:4, isim:"Safranbolu",                  il:"Karabük", detay:"Osmanlı evleri · UNESCO Dünya Mirası · Tarihi çarşı" },
      { sira:5, isim:"Divriği Ulu Camii",           il:"Sivas",  detay:"Selçuklu mimarisi · UNESCO · Taç kapı" },
    ],
  },
  {
    id:"marmara-osmanli",
    icon:"🕌",
    label:"Osmanlı Başkentleri Rotası",
    color:"#7f5539",
    seviye:"Kolay",
    sure:"3–4 gün",
    mesafe:"~400 km",
    konum:"Marmara Bölgesi",
    aciklama:"Osmanlı İmparatorluğu'nun ilk başkentleri ve en görkemli yapıları.",
    duraklar:[
      { sira:1, isim:"Edirne Selimiye Camii",       il:"Edirne",  detay:"Mimar Sinan'ın ustalık eseri · UNESCO · Minareler" },
      { sira:2, isim:"Troya Antik Kenti",           il:"Çanakkale",detay:"Truva Savaşı · UNESCO · Truva Atı · 5.000 yıllık" },
      { sira:3, isim:"Gallipoli Yarımadası",        il:"Çanakkale",detay:"Çanakkale Savaşı · Anıt mezarlık · Şehitlikler" },
      { sira:4, isim:"Ayasofya-i Kebir Camii",      il:"İstanbul", detay:"Bizans & Osmanlı · UNESCO · 1.500 yıllık" },
      { sira:5, isim:"Topkapı Sarayı",              il:"İstanbul", detay:"Osmanlı sarayı · 400 yıl başkent · Hazine · UNESCO" },
      { sira:6, isim:"Süleymaniye Camii",           il:"İstanbul", detay:"Mimar Sinan başyapıtı · Külliye" },
      { sira:7, isim:"Kariye Camii",                il:"İstanbul", detay:"Bizans mozaikleri & freskleri · Pantokrator" },
    ],
  },
];

export const ROZETLER = [
  { icon:"🏅", isim:"Mavi Bayrak Avcısı",  tamamlandi:true,  aciklama:"3/3 plajı ziyaret ettin" },
  { icon:"⛰️", isim:"Trekking Kahramanı",   tamamlandi:true,  aciklama:"Aydos Tepesi zirvelendi" },
  { icon:"🌊", isim:"Su Gezgini",           tamamlandi:false, aciklama:"2/5 göl tamamlandı" },
  { icon:"⛺", isim:"Kamp Ustası",           tamamlandi:false, aciklama:"4/10 check-in yapıldı" },
  { icon:"🚴", isim:"Bisiklet Rotacısı",    tamamlandi:false, aciklama:"1/3 parkur tamamlandı" },
  { icon:"📸", isim:"Top Fotoğrafçı",       tamamlandi:true,  aciklama:"12 fotoğraf beğenildi" },
];

export const KATEGORILER = ["Tümü","Rehber","Ekipman","Güvenlik","Fotoğrafçılık","Navigasyon"];
export const SEVIYELER  = ["Tümü","Başlangıç","Orta","İleri"];

export const MAKALELER = [
  { id:1,  kategori:"Rehber",   seviye:"Başlangıç", simge:"🥾", isim:"İlk Doğa Yürüyüşü Rehberi",     sure:"8 dk",  boyut:"1.2 MB", aciklama:"Hazırlık, yol seçimi, temel adımlar ve ilk gününüz için kontrol listesi.", bookmark:true  },
  { id:2,  kategori:"Ekipman",  seviye:"Başlangıç", simge:"🎒", isim:"Türk Zırhlısı Kilo Çantası",   sure:"6 dk",  boyut:"0.9 MB", aciklama:"Hafif trekking ve 1 günlük kamp için ideal ekipman listesi ve paketleme ipuçları.", bookmark:false },
  { id:3,  kategori:"Güvenlik", seviye:"Orta",      simge:"🆘", isim:"Acil Durum Protokolleri",      sure:"10 dk", boyut:"2.1 MB", aciklama:"Kaybolma, yaralanma, hava değişimi — doğada karşılaşılabilecek acil durumlar ve müdahale yöntemleri.", bookmark:true  },
  { id:4,  kategori:"Rehber",   seviye:"Orta",      simge:"🌌", isim:"Yıldız Gözlemi Rehberi",       sure:"7 dk",  boyut:"1.8 MB", aciklama:"Terkos ve Ağva'da gökyüzü haritaları, takvim ve fotoğraf kompozisyon ipuçları.", bookmark:false },
  { id:5,  kategori:"Fotoğrafçılık", seviye:"Başlangıç", simge:"📸", isim:"Doğa Fotoğrafçılığı Başlangıç",   sure:"12 dk", boyut:"3.4 MB", aciklama:"Işık, kompoziyon, doğa ve kuş fotoğrafçılığı için telefonla başlangıç teknikleri.", bookmark:false },
  { id:6,  kategori:"Navigasyon", seviye:"İleri",   simge:"🧭", isim:"GPS & Pusula ile Off-Road",     sure:"9 dk",  boyut:"1.5 MB", aciklama:"Adalar ve Şile ormanlarında off-road navigasyon, offline harita ve waypoint stratejileri.", bookmark:true  },
  { id:7,  kategori:"Ekipman",  seviye:"İleri",     simge:"⛺", isim:"4 Mevsim Kamp Teknikleri",      sure:"14 dk", boyut:"4.2 MB", aciklama:"Kar, rüzgar, yağmur — ağır şartlarda kamp kurma, ısınma ve hayatta kalma.", bookmark:false },
  { id:8,  kategori:"Güvenlik", seviye:"Başlangıç", simge:"🏄", isim:"Su Güvenliği Temelleri",       sure:"5 dk",  boyut:"0.8 MB", aciklama:"Dalga analizi, akıntı tespiti, hayatta kalma teknikleri ve can yeleği seçimi.", bookmark:false },
  { id:9,  kategori:"Rehber",   seviye:"İleri",     simge:"🗺️", isim:"İstanbul Sırtları Haritası",    sure:"3 dk",  boyut:"0.6 MB", aciklama:"Sırtta geçecek 7 günlük rota: depolama, çadır, su noktaları ve acil toplanma alanları.", bookmark:false },
  { id:10, kategori:"Fotoğrafçılık", seviye:"Orta", simge:"🌅", isim:"Altın Saat & Manzara Fotoğrafı",sure:"11 dk", boyut:"2.8 MB", aciklama:"Gündoğumu / batımı — doğal ışık, kontrast, panoramik çekim ve düzenleme ipuçları.", bookmark:false },
  { id:11, kategori:"Navigasyon", seviye:"Başlangıç",simge:"🌐", isim:"Offline Harita Çözümleri",      sure:"6 dk",  boyut:"1.1 MB", aciklama:"Maps.me, Komoot, Gaia GPS karşılaştırması — internet olmadan rotanız hiç kaybolmaz.", bookmark:true  },
  { id:12, kategori:"Güvenlik", seviye:"Orta",      simge:"🐻", isim:"Vahşi Hayvanla Karşılaşma",    sure:"4 dk",  boyut:"0.7 MB", aciklama:"İstanbul'da geyik, ayı ve yaban domuzu — ne yapmalı, ne yapmamalı, kampta güvenlik önlemleri.", bookmark:false },
];
