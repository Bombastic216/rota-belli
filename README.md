# 🧭 Rota Belli

İstanbul'un mavi bayraklı plajlarını, göllerini, kamp alanlarını ve Türkiye'nin tarihi yerlerini harita üzerinde keşfet. Yüzme suyu kalitesi takibi, sosyal profil ve rota planlama özellikleriyle açık hava platformu.

![Rota Belli](public/og-image.png)

## ✨ Özellikler

### 🗺️ Harita Tabanlı Keşif
- **Mavi Bayraklı Plajlar** — İstanbul ve Türkiye geneli plaj bilgileri
- **Göl & Kamp Alanları** — Doğa içi kamp ve göl lokasyonları
- **Tarihi Yerler** — UNESCO mirasları ve antik kentler
- **Su Sporları** — Sörf, SUP, kano ve dalış noktaları

### 🏊 Yüzme Suyu Kalitesi
- Sağlık Bakanlığı **ÇSBS** (Çevre Sağlığı Bilgi Sistemi) entegrasyonu
- İl / ilçe / yüzme alanı bazlı filtreleme
- **Kalite sınıfı** gösterimi: Mükemmel, İyi, Yeterli, Zayıf
- Olanaklar: Mavi Bayrak, duş, otopark, can kurtaran, engelli erişimi
- Son analiz tarihi

### 👤 Sosyal Profil
- Keşif puanı ve rozet sistemi
- Favori rotalar ve yerler
- Kullanıcı istatistikleri

### 🥾 Rota Planlama
- Türkiye geneli **7 tarihi rota** (Mezopotamya, Hitit, Kapadokya, Ege, Likya, Karadeniz, Osmanlı)
- Detaylı durak bilgileri ve açıklamalar
- Zorluk seviyesi ve süre bilgisi

### 📚 Kütüphane
- Doğa yürüyüşü, kamp, fotoğrafçılık, navigasyon rehberleri
- Güvenlik protokolleri ve acil durum bilgileri

## 🛠️ Teknolojiler

| Katman | Teknoloji |
|--------|-----------|
| Frontend | React 18 + Vite |
| Harita | Leaflet |
| Stiller | CSS-in-JS (inline) |
| Build | Vite |
| Container | Docker + nginx |
| API Proxy | Vite dev server proxy |

## 🚀 Kurulum

### Geliştirme Ortamı

```bash
# Repo'yu klonla
git clone https://github.com/Bombastic216/rota-belli.git
cd rota-belli

# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev
```

Uygulama `http://localhost:5173` adresinde çalışacaktır.

### Docker ile

```bash
# Docker Compose ile başlat
docker-compose up -d

# Tek başına Docker
docker build -t rota-belli .
docker run -p 80:80 rota-belli
```

### Production Build

```bash
npm run build
# dist/ klasörü production'a hazır
```

## 📁 Proje Yapısı

```
rota-belli/
├── src/
│   ├── components/
│   │   ├── explore/        # Keşfet paneli (lokasyon kartları)
│   │   ├── map/            # Harita paneli (Leaflet)
│   │   ├── profile/        # Kullanıcı profili
│   │   ├── yuzme/          # Yüzme suyu kalitesi paneli
│   │   └── layout/         # Ortak bileşenler (Panel, Stars, WeatherWidget)
│   ├── data/               # Statik veriler (lokasyonlar, rotalar, makaleler)
│   ├── hooks/              # Custom React hook'ları
│   ├── services/
│   │   ├── api.js          # Genel API servisleri (hava durumu, lokasyonlar)
│   │   └── yuzmeSuyuApi.js # Sağlık Bakanlığı ÇSBS API servisi
│   ├── App.jsx             # Ana uygulama bileşeni
│   ├── App.css             # Global stiller
│   └── main.jsx            # Giriş noktası
├── public/                 # Statik dosyalar
├── dist/                   # Production build
├── Dockerfile              # Docker imajı
├── docker-compose.yaml     # Docker Compose yapılandırması
├── nginx.conf              # nginx yapılandırması
└── vite.config.js          # Vite + proxy yapılandırması
```

## 🔌 API Entegrasyonları

### Sağlık Bakanlığı ÇSBS
Yüzme suyu kalitesi verileri için resmi API kullanılır:
- **Endpoint:** `csbsapi.saglik.gov.tr/api/app/portal-public/`
- **Proxy:** Vite dev server üzerinden CORS çözümü
- **Authentication:** Session cookie (tarayıcı üzerinden)

### Hava Durumu
- **Open-Meteo API** — Ücretsiz, API key gerektirmez
- Lokasyon bazlı anlık hava durumu

## 📊 Veri Kaynakları

| Veri | Kaynak |
|------|--------|
| Yüzme alanları | Sağlık Bakanlığı ÇSBS |
| Tariki yerler | Türkiye Kültür ve Turizm Bakanlığı, UNESCO |
| Hava durumu | Open-Meteo |
| Lokasyonlar | Manuel derleme |

## 🤝 Katkı

1. Fork'la
2. Feature branch oluştur (`git checkout -b feature/yeni-ozellik`)
3. Commit'le (`git commit -m "feat: yeni özellik eklendi"`)
4. Push'la (`git push origin feature/yeni-ozellik`)
5. Pull Request aç

## 📄 Lisans

MIT License — Detaylar için [LICENSE](LICENSE) dosyasına bakın.

---

**Not:** Bu proje kişisel geliştirme amaçlıdır. Sağlık Bakanlığı verileri resmi kaynaktan çekilmektedir.
