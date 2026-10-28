/* =========================================
   RUANG CERITA
   DATA CERITA DAN FITUR WEBSITE
========================================= */


/*
  CARA MENAMBAH CERITA:

  1. Salin salah satu objek cerita di bawah.
  2. Tempel sebelum tanda penutup ]; terakhir.
  3. Ganti id dengan angka yang berbeda.
  4. Isi judul, penulis, genre, sampul, dan cerita.

  Gunakan foto sampul yang kamu miliki atau
  gambar yang memang boleh kamu gunakan.
*/


const stories = [

    // =====================================
    // CERPEN 1
    // =====================================

    {
        id: 1,
        title: "Hujan di Bulan November",
        author: "Ruang Cerita",
        type: "Cerpen",
        genre: "Romantis",
        duration: "5 menit",

        cover: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=600&q=80",

        description:
            "Pertemuan sederhana di tengah hujan yang mengubah hidup dua orang asing.",

        content: `
            <h2>Hujan di Bulan November</h2>

            <p class="chapter-intro">
                Ada pertemuan yang datang tanpa direncanakan,
                tetapi meninggalkan kenangan yang sulit dilupakan.
            </p>

            <p>
                Hujan turun ketika Alya keluar dari sebuah toko buku
                kecil di sudut kota. Ia berdiri di depan pintu,
                memandangi jalanan yang perlahan berubah menjadi
                cermin bagi lampu-lampu kendaraan.
            </p>

            <p>
                Ia tidak membawa payung. Padahal, sejak pagi langit
                sudah tampak mendung. Alya hanya berharap hujan akan
                berhenti sebelum malam tiba.
            </p>

            <p>
                "Tidak membawa payung?"
            </p>

            <p>
                Sebuah suara membuatnya menoleh. Seorang laki-laki
                berdiri di sampingnya dengan payung hitam di tangan.
                Kemeja putihnya sedikit basah, sementara senyum
                kecil menghiasi wajahnya.
            </p>

            <p>
                "Sepertinya begitu," jawab Alya sambil tertawa kecil.
            </p>

            <p>
                "Kalau rumahmu searah denganku, kita bisa berbagi
                payung."
            </p>

            <p>
                Alya sempat ragu. Ia bahkan belum mengetahui nama
                laki-laki itu. Namun, hujan semakin deras dan jalanan
                mulai sepi. Akhirnya, ia mengangguk.
            </p>

            <p>
                Namanya Arga. Ia bekerja di sebuah kantor tidak jauh
                dari toko buku itu. Mereka berjalan perlahan,
                membicarakan hal-hal sederhana: buku yang mereka
                sukai, makanan favorit, dan kota yang tidak pernah
                benar-benar tidur.
            </p>

            <p>
                Aneh rasanya. Alya biasanya sulit berbicara dengan
                orang baru, tetapi bersama Arga, setiap percakapan
                terasa mudah.
            </p>

            <p>
                Ketika sampai di persimpangan, mereka harus berpisah.
            </p>

            <p>
                "Terima kasih untuk payungnya," kata Alya.
            </p>

            <p>
                "Sama-sama. Tapi aku belum tahu namamu."
            </p>

            <p>
                "Alya."
            </p>

            <p>
                "Aku Arga. Semoga kita bertemu lagi, Alya."
            </p>

            <p>
                Ia tersenyum, kemudian berjalan menjauh.
                Alya melanjutkan langkahnya dengan perasaan yang
                sulit dijelaskan. Hujan masih turun, tetapi malam
                terasa jauh lebih hangat.
            </p>

            <p>
                Seminggu kemudian, Alya kembali mengunjungi toko
                buku yang sama. Ia mengatakan kepada dirinya sendiri
                bahwa ia hanya ingin membeli novel baru.
            </p>

            <p>
                Namun, di depan pintu, seorang laki-laki berdiri
                sambil memegang dua cangkir kopi.
            </p>

            <p>
                "Aku mulai berpikir kamu tidak akan datang lagi,"
                kata Arga.
            </p>

            <p>
                Alya tersenyum. Mungkin beberapa kisah memang
                dimulai dari hal sederhana: hujan, sebuah payung,
                dan dua orang yang kebetulan berjalan ke arah sama.
            </p>

            <p>
                Sejak hari itu, November tidak pernah terasa sama
                bagi Alya. Sebab, di antara ribuan tetes hujan,
                ia menemukan seseorang yang ingin ia temui lagi.
            </p>
        `
    },


    // =====================================
    // CERPEN 2
    // =====================================

    {
        id: 2,
        title: "Surat untuk Ayah",
        author: "Ruang Cerita",
        type: "Cerpen",
        genre: "Drama",
        duration: "6 menit",

        cover: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=600&q=80",

        description:
            "Sepucuk surat membawa seorang anak kembali pada kenangan tentang ayahnya.",

        content: `
            <h2>Surat untuk Ayah</h2>

            <p class="chapter-intro">
                Ada banyak hal yang ingin kita katakan,
                tetapi terkadang waktu tidak memberi kesempatan.
            </p>

            <p>
                Di dalam laci meja yang sudah lama tidak dibuka,
                Raka menemukan sebuah amplop berwarna cokelat.
                Tulisan di depannya membuat tangannya berhenti
                bergerak.
            </p>

            <p>
                Untuk Raka, dari Ayah.
            </p>

            <p>
                Ia duduk perlahan. Selama bertahun-tahun,
                ia menyimpan kemarahan kepada ayahnya yang selalu
                sibuk bekerja. Ayah jarang datang ke sekolah,
                jarang menghadiri acara penting, dan hampir tidak
                pernah bertanya tentang hari-harinya.
            </p>

            <p>
                Raka tumbuh dengan keyakinan bahwa pekerjaan
                selalu menjadi hal yang lebih penting daripada
                dirinya.
            </p>

            <p>
                Dengan tangan gemetar, ia membuka amplop itu.
            </p>

            <p>
                "Nak, jika suatu hari kamu membaca surat ini,
                mungkin Ayah tidak sempat mengatakan semuanya
                secara langsung."
            </p>

            <p>
                Raka menahan napas.
            </p>

            <p>
                "Ayah tahu Ayah bukan orang tua yang sempurna.
                Ada banyak sore yang seharusnya kita habiskan
                bersama, tetapi Ayah justru berada di kantor.
                Ada banyak cerita yang seharusnya Ayah dengarkan,
                tetapi Ayah terlalu lelah untuk bertanya."
            </p>

            <p>
                Matanya mulai berkaca-kaca.
            </p>

            <p>
                "Ayah bekerja karena ingin kamu memiliki kesempatan
                yang lebih baik. Tetapi sekarang Ayah mengerti,
                bahwa memberikan waktu juga sama pentingnya
                dengan memberikan sesuatu."
            </p>

            <p>
                Raka teringat sebuah sore ketika ia memenangkan
                lomba menggambar. Ia berdiri di depan gerbang
                sekolah selama berjam-jam, berharap ayahnya datang.
                Ayah tidak datang hari itu.
            </p>

            <p>
                Selama ini, ia hanya mengingat kekecewaan tersebut.
                Ia tidak pernah bertanya apa yang sebenarnya
                terjadi di balik ketidakhadiran itu.
            </p>

            <p>
                Surat itu berlanjut.
            </p>

            <p>
                "Ayah mungkin tidak selalu hadir ketika kamu
                membutuhkan seseorang. Untuk itu, Ayah minta maaf.
                Tetapi jangan pernah berpikir bahwa kamu tidak
                penting. Kamu selalu menjadi alasan Ayah untuk
                berusaha lebih keras."
            </p>

            <p>
                Air mata Raka jatuh ke atas kertas.
            </p>

            <p>
                Di bagian paling bawah, ada sebuah kalimat pendek.
            </p>

            <p>
                "Kalau suatu hari kamu menjadi orang tua,
                jangan ulangi kesalahan Ayah. Pulanglah lebih awal.
                Dengarkan ceritanya. Sebab, waktu tidak bisa
                dibeli kembali."
            </p>

            <p>
                Raka melipat surat itu dengan hati-hati.
                Untuk pertama kalinya setelah sekian lama,
                ia membuka album foto keluarga dan memandang
                wajah ayahnya dalam setiap gambar.
            </p>

            <p>
                Ia tidak bisa mengubah masa lalu. Namun, ia bisa
                belajar darinya.
            </p>

            <p>
                Malam itu, Raka menulis surat balasan.
                Bukan untuk menghapus kesedihan, melainkan untuk
                mengucapkan hal yang selama ini sulit ia katakan.
            </p>

            <p>
                "Ayah, aku membaca suratmu. Ada banyak hal yang
                belum sempat kita bicarakan. Tetapi hari ini,
                aku ingin belajar memahami. Terima kasih sudah
                berusaha, meskipun kita tidak selalu saling mengerti."
            </p>
        `
    },


    // =====================================
    // NOVEL 1
    // =====================================

    {
        id: 3,
        title: "Kota yang Melupakan Kita",
        author: "Ruang Cerita",
        type: "Novel",
        genre: "Romantis",
        duration: "Bab 1",

        cover: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=600&q=80",

        description:
            "Dua orang yang pernah saling mencintai bertemu kembali di kota tempat semuanya bermula.",

        content: `
            <h2>Bab 1 — Kembali</h2>

            <p class="chapter-intro">
                Beberapa kota menyimpan kenangan lebih lama
                daripada orang-orang yang pernah tinggal di dalamnya.
            </p>

            <p>
                Kereta tiba pukul enam lewat dua belas menit.
                Nara turun dengan sebuah koper kecil dan tas
                selempang yang sudah menemaninya selama bertahun-tahun.
            </p>

            <p>
                Kota itu tidak banyak berubah. Bangunan stasiun
                masih berwarna putih kusam. Penjual kopi di
                dekat pintu keluar masih meneriakkan dagangannya.
                Bahkan, pohon besar di seberang jalan masih
                berdiri dengan cabang yang sama.
            </p>

            <p>
                Yang berubah hanyalah dirinya.
            </p>

            <p>
                Lima tahun lalu, Nara meninggalkan kota itu
                tanpa menoleh kembali. Ia membawa mimpi untuk
                membangun hidup baru, juga luka yang tidak
                pernah benar-benar ia ceritakan kepada siapa pun.
            </p>

            <p>
                Sekarang ia kembali untuk menghadiri pernikahan
                sahabatnya. Ia berjanji hanya akan tinggal tiga hari.
                Setelah itu, ia akan kembali ke kota tempat
                ia bekerja.
            </p>

            <p>
                Setidaknya, itulah rencananya.
            </p>

            <p>
                "Nara?"
            </p>

            <p>
                Suara itu membuatnya berhenti.
            </p>

            <p>
                Di antara kerumunan penumpang, seorang laki-laki
                berdiri dengan jaket abu-abu. Rambutnya lebih
                pendek daripada yang Nara ingat, dan wajahnya
                terlihat lebih dewasa.
            </p>

            <p>
                Namun, matanya masih sama.
            </p>

            <p>
                Dimas.
            </p>

            <p>
                Ada ribuan kalimat yang pernah Nara siapkan
                jika suatu hari mereka bertemu lagi. Ia pernah
                membayangkan akan marah, menangis, atau berjalan
                pergi tanpa mengatakan apa-apa.
            </p>

            <p>
                Kenyataannya, ia hanya berdiri diam.
            </p>

            <p>
                "Hai," kata Dimas akhirnya.
            </p>

            <p>
                "Hai."
            </p>

            <p>
                Lima tahun terpisah, dan hanya itu yang berhasil
                mereka ucapkan.
            </p>

            <p>
                Dimas melirik koper di sampingnya.
            </p>

            <p>
                "Baru sampai?"
            </p>

            <p>
                "Iya. Aku datang untuk pernikahan Sinta."
            </p>

            <p>
                "Aku tahu. Sinta memberitahuku."
            </p>

            <p>
                Tentu saja. Di kota sekecil ini, kabar perjalanan
                seseorang bisa sampai ke mana-mana sebelum orangnya
                sendiri tiba.
            </p>

            <p>
                Mereka berjalan keluar stasiun dengan jarak
                beberapa langkah. Dimas menawarkan untuk
                mengantarnya ke penginapan, tetapi Nara menolak
                dengan alasan bahwa ia sudah memesan kendaraan.
            </p>

            <p>
                Dimas tidak memaksa.
            </p>

            <p>
                Sebelum berpisah, ia berkata, "Aku senang kamu
                pulang, Nara."
            </p>

            <p>
                Kalimat itu terdengar sederhana. Justru karena
                sederhana, Nara tidak tahu bagaimana harus
                menanggapinya.
            </p>

            <p>
                Ia masuk ke kendaraan dan memandang keluar jendela.
                Dimas masih berdiri di depan stasiun ketika mobil
                mulai bergerak.
            </p>

            <p>
                Nara membuka ponselnya. Ada pesan baru dari Sinta,
                lengkap dengan alamat tempat acara pernikahan.
            </p>

            <p>
                Ia mencoba memusatkan perhatian pada pesan itu.
                Namun, pikirannya kembali kepada satu pertanyaan
                yang selama lima tahun ia hindari.
            </p>

            <p>
                Bagaimana jika beberapa orang tidak pernah
                benar-benar menjadi masa lalu?
            </p>

            <h2>Bab 2 — Hal yang Tertinggal</h2>

            <p>
                Pagi berikutnya, Nara berjalan menyusuri jalan
                kecil menuju kedai kopi favoritnya dahulu.
                Ia tidak berencana singgah lama. Hanya ingin
                menikmati secangkir kopi sebelum menemui Sinta.
            </p>

            <p>
                Bel pintu berbunyi ketika ia masuk.
                Aroma kopi dan roti hangat menyambutnya.
                Di dinding, foto-foto lama masih tergantung,
                termasuk foto sekelompok anak muda yang tertawa
                di depan kedai.
            </p>

            <p>
                Nara mengenali dirinya dalam foto itu.
                Di sampingnya, Dimas tersenyum sambil memegang
                dua cangkir kopi.
            </p>

            <p>
                "Aku kira kamu sudah lupa tempat ini."
            </p>

            <p>
                Nara menoleh. Dimas berdiri di dekat meja kasir.
                Entah sejak kapan ia berada di sana.
            </p>

            <p>
                "Aku hanya lupa beberapa hal," jawab Nara.
            </p>

            <p>
                "Termasuk aku?"
            </p>

            <p>
                Pertanyaan itu menggantung di antara mereka.
                Nara menatap foto di dinding, lalu kembali
                memandang Dimas.
            </p>

            <p>
                "Aku tidak pernah bilang begitu."
            </p>

            <p>
                Untuk pertama kalinya sejak kembali, Dimas
                tersenyum. Bukan senyum bahagia, melainkan
                senyum seseorang yang baru menemukan sedikit
                harapan setelah menunggu lama.
            </p>

            <p>
                Nara belum tahu apa yang akan terjadi setelah
                tiga hari itu berakhir. Ia juga belum tahu
                apakah luka lama bisa benar-benar sembuh.
            </p>

            <p>
                Tetapi pagi itu, untuk pertama kalinya,
                ia tidak terburu-buru mencari jalan pulang.
            </p>
        `
    },


    // =====================================
    // NOVEL 2
    // =====================================

    {
        id: 4,
        title: "Rahasia di Balik Kabut",
        author: "Ruang Cerita",
        type: "Novel",
        genre: "Fantasi",
        duration: "Bab 1",

        cover: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=600&q=80",

        description:
            "Sebuah desa tersembunyi, kabut misterius, dan rahasia yang diwariskan selama beberapa generasi.",

        content: `
            <h2>Bab 1 — Desa yang Hilang</h2>

            <p class="chapter-intro">
                Di tempat kabut tidak pernah menghilang,
                ada sebuah rahasia yang tidak boleh dibangunkan.
            </p>

            <p>
                Orang-orang di Desa Arunika percaya bahwa hutan
                di sebelah utara memiliki ingatan sendiri.
                Mereka tidak pernah memasuki hutan itu setelah
                matahari terbenam. Bahkan, anak-anak dilarang
                menyebut namanya ketika kabut mulai turun.
            </p>

            <p>
                Liora tidak pernah mempercayai larangan tersebut.
                Baginya, semua itu hanyalah cerita lama yang
                digunakan orang dewasa untuk menakut-nakuti anak-anak.
            </p>

            <p>
                Sampai suatu malam, ia melihat cahaya biru
                bergerak di antara pepohonan.
            </p>

            <p>
                Cahaya itu tidak seperti lentera. Ia melayang
                tanpa suara, berhenti sejenak, lalu bergerak
                semakin dalam ke hutan.
            </p>

            <p>
                Liora seharusnya kembali ke rumah.
                Namun, ada sesuatu di dalam dirinya yang
                menyuruhnya mengikuti cahaya itu.
            </p>

            <p>
                Ia mengambil mantel, menyelipkan pisau kecil
                ke ikat pinggang, kemudian keluar melalui
                pintu belakang.
            </p>

            <p>
                Udara terasa dingin. Kabut menutupi jalan setapak,
                membuat rumah-rumah di belakangnya perlahan
                menghilang dari pandangan.
            </p>

            <p>
                Semakin jauh ia berjalan, semakin jelas suara
                yang terdengar dari dalam hutan. Bukan suara
                binatang, bukan pula suara angin.
            </p>

            <p>
                Suara itu menyerupai seseorang yang sedang
                memanggil namanya.
            </p>

            <p>
                "Liora..."
            </p>

            <p>
                Ia berhenti.
            </p>

            <p>
                "Siapa di sana?" serunya.
            </p>

            <p>
                Tidak ada jawaban. Hanya cahaya biru yang
                kini berhenti di depan sebuah gerbang batu.
            </p>

            <p>
                Liora belum pernah melihat gerbang itu sebelumnya.
                Ukiran pada permukaannya menyerupai simbol
                yang sering ia lihat pada liontin peninggalan
                ibunya.
/* =========================================
   RUANG CERITA
   DATA CERITA DAN FITUR WEBSITE
========================================= */


/*
  CARA MENAMBAH CERITA:

  1. Salin salah satu objek cerita di bawah.
  2. Tempel sebelum tanda penutup ]; terakhir.
  3. Ganti id dengan angka yang berbeda.
  4. Isi judul, penulis, genre, sampul, dan cerita.

  Gunakan foto sampul yang kamu miliki atau
  gambar yang memang boleh kamu gunakan.
*/


const stories = [

    // =====================================
    // CERPEN 1
    // =====================================

    {
        id: 1,
        title: "Hujan di Bulan November",
        author: "Ruang Cerita",
        type: "Cerpen",
        genre: "Romantis",
        duration: "5 menit",

        cover: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=600&q=80",

        description:
            "Pertemuan sederhana di tengah hujan yang mengubah hidup dua orang asing.",

        content: `
            <h2>Hujan di Bulan November</h2>

            <p class="chapter-intro">
                Ada pertemuan yang datang tanpa direncanakan,
                tetapi meninggalkan kenangan yang sulit dilupakan.
            </p>

            <p>
                Hujan turun ketika Alya keluar dari sebuah toko buku
                kecil di sudut kota. Ia berdiri di depan pintu,
                memandangi jalanan yang perlahan berubah menjadi
                cermin bagi lampu-lampu kendaraan.
            </p>

            <p>
                Ia tidak membawa payung. Padahal, sejak pagi langit
                sudah tampak mendung. Alya hanya berharap hujan akan
                berhenti sebelum malam tiba.
            </p>

            <p>
                "Tidak membawa payung?"
            </p>

            <p>
                Sebuah suara membuatnya menoleh. Seorang laki-laki
                berdiri di sampingnya dengan payung hitam di tangan.
                Kemeja putihnya sedikit basah, sementara senyum
                kecil menghiasi wajahnya.
            </p>

            <p>
                "Sepertinya begitu," jawab Alya sambil tertawa kecil.
            </p>

            <p>
                "Kalau rumahmu searah denganku, kita bisa berbagi
                payung."
            </p>

            <p>
                Alya sempat ragu. Ia bahkan belum mengetahui nama
                laki-laki itu. Namun, hujan semakin deras dan jalanan
                mulai sepi. Akhirnya, ia mengangguk.
            </p>

            <p>
                Namanya Arga. Ia bekerja di sebuah kantor tidak jauh
                dari toko buku itu. Mereka berjalan perlahan,
                membicarakan hal-hal sederhana: buku yang mereka
                sukai, makanan favorit, dan kota yang tidak pernah
                benar-benar tidur.
            </p>

            <p>
                Aneh rasanya. Alya biasanya sulit berbicara dengan
                orang baru, tetapi bersama Arga, setiap percakapan
                terasa mudah.
            </p>

            <p>
                Ketika sampai di persimpangan, mereka harus berpisah.
            </p>

            <p>
                "Terima kasih untuk payungnya," kata Alya.
            </p>

            <p>
                "Sama-sama. Tapi aku belum tahu namamu."
            </p>

            <p>
                "Alya."
            </p>

            <p>
                "Aku Arga. Semoga kita bertemu lagi, Alya."
            </p>

            <p>
                Ia tersenyum, kemudian berjalan menjauh.
                Alya melanjutkan langkahnya dengan perasaan yang
                sulit dijelaskan. Hujan masih turun, tetapi malam
                terasa jauh lebih hangat.
            </p>

            <p>
                Seminggu kemudian, Alya kembali mengunjungi toko
                buku yang sama. Ia mengatakan kepada dirinya sendiri
                bahwa ia hanya ingin membeli novel baru.
            </p>

            <p>
                Namun, di depan pintu, seorang laki-laki berdiri
                sambil memegang dua cangkir kopi.
            </p>

            <p>
                "Aku mulai berpikir kamu tidak akan datang lagi,"
                kata Arga.
            </p>

            <p>
                Alya tersenyum. Mungkin beberapa kisah memang
                dimulai dari hal sederhana: hujan, sebuah payung,
                dan dua orang yang kebetulan berjalan ke arah sama.
            </p>

            <p>
                Sejak hari itu, November tidak pernah terasa sama
                bagi Alya. Sebab, di antara ribuan tetes hujan,
                ia menemukan seseorang yang ingin ia temui lagi.
            </p>
        `
    },


    // =====================================
    // CERPEN 2
    // =====================================

    {
        id: 2,
        title: "Surat untuk Ayah",
        author: "Ruang Cerita",
        type: "Cerpen",
        genre: "Drama",
        duration: "6 menit",

        cover: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=600&q=80",

        description:
            "Sepucuk surat membawa seorang anak kembali pada kenangan tentang ayahnya.",

        content: `
            <h2>Surat untuk Ayah</h2>

            <p class="chapter-intro">
                Ada banyak hal yang ingin kita katakan,
                tetapi terkadang waktu tidak memberi kesempatan.
            </p>

            <p>
                Di dalam laci meja yang sudah lama tidak dibuka,
                Raka menemukan sebuah amplop berwarna cokelat.
                Tulisan di depannya membuat tangannya berhenti
                bergerak.
            </p>

            <p>
                Untuk Raka, dari Ayah.
            </p>

            <p>
                Ia duduk perlahan. Selama bertahun-tahun,
                ia menyimpan kemarahan kepada ayahnya yang selalu
                sibuk bekerja. Ayah jarang datang ke sekolah,
                jarang menghadiri acara penting, dan hampir tidak
                pernah bertanya tentang hari-harinya.
            </p>

            <p>
                Raka tumbuh dengan keyakinan bahwa pekerjaan
                selalu menjadi hal yang lebih penting daripada
                dirinya.
            </p>

            <p>
                Dengan tangan gemetar, ia membuka amplop itu.
            </p>

            <p>
                "Nak, jika suatu hari kamu membaca surat ini,
                mungkin Ayah tidak sempat mengatakan semuanya
                secara langsung."
            </p>

            <p>
                Raka menahan napas.
            </p>

            <p>
                "Ayah tahu Ayah bukan orang tua yang sempurna.
                Ada banyak sore yang seharusnya kita habiskan
                bersama, tetapi Ayah justru berada di kantor.
                Ada banyak cerita yang seharusnya Ayah dengarkan,
                tetapi Ayah terlalu lelah untuk bertanya."
            </p>

            <p>
                Matanya mulai berkaca-kaca.
            </p>

            <p>
                "Ayah bekerja karena ingin kamu memiliki kesempatan
                yang lebih baik. Tetapi sekarang Ayah mengerti,
                bahwa memberikan waktu juga sama pentingnya
                dengan memberikan sesuatu."
            </p>

            <p>
                Raka teringat sebuah sore ketika ia memenangkan
                lomba menggambar. Ia berdiri di depan gerbang
                sekolah selama berjam-jam, berharap ayahnya datang.
                Ayah tidak datang hari itu.
            </p>

            <p>
                Selama ini, ia hanya mengingat kekecewaan tersebut.
                Ia tidak pernah bertanya apa yang sebenarnya
                terjadi di balik ketidakhadiran itu.
            </p>

            <p>
                Surat itu berlanjut.
            </p>

            <p>
                "Ayah mungkin tidak selalu hadir ketika kamu
                membutuhkan seseorang. Untuk itu, Ayah minta maaf.
                Tetapi jangan pernah berpikir bahwa kamu tidak
                penting. Kamu selalu menjadi alasan Ayah untuk
                berusaha lebih keras."
            </p>

            <p>
                Air mata Raka jatuh ke atas kertas.
            </p>

            <p>
                Di bagian paling bawah, ada sebuah kalimat pendek.
            </p>

            <p>
                "Kalau suatu hari kamu menjadi orang tua,
                jangan ulangi kesalahan Ayah. Pulanglah lebih awal.
                Dengarkan ceritanya. Sebab, waktu tidak bisa
                dibeli kembali."
            </p>

            <p>
                Raka melipat surat itu dengan hati-hati.
                Untuk pertama kalinya setelah sekian lama,
                ia membuka album foto keluarga dan memandang
                wajah ayahnya dalam setiap gambar.
            </p>

            <p>
                Ia tidak bisa mengubah masa lalu. Namun, ia bisa
                belajar darinya.
            </p>

            <p>
                Malam itu, Raka menulis surat balasan.
                Bukan untuk menghapus kesedihan, melainkan untuk
                mengucapkan hal yang selama ini sulit ia katakan.
            </p>

            <p>
                "Ayah, aku membaca suratmu. Ada banyak hal yang
                belum sempat kita bicarakan. Tetapi hari ini,
                aku ingin belajar memahami. Terima kasih sudah
                berusaha, meskipun kita tidak selalu saling mengerti."
            </p>
        `
    },


    // =====================================
    // NOVEL 1
    // =====================================

    {
        id: 3,
        title: "Kota yang Melupakan Kita",
        author: "Ruang Cerita",
        type: "Novel",
        genre: "Romantis",
        duration: "Bab 1",

        cover: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=600&q=80",

        description:
            "Dua orang yang pernah saling mencintai bertemu kembali di kota tempat semuanya bermula.",

        content: `
            <h2>Bab 1 — Kembali</h2>

            <p class="chapter-intro">
                Beberapa kota menyimpan kenangan lebih lama
                daripada orang-orang yang pernah tinggal di dalamnya.
            </p>

            <p>
                Kereta tiba pukul enam lewat dua belas menit.
                Nara turun dengan sebuah koper kecil dan tas
                selempang yang sudah menemaninya selama bertahun-tahun.
            </p>

            <p>
                Kota itu tidak banyak berubah. Bangunan stasiun
                masih berwarna putih kusam. Penjual kopi di
                dekat pintu keluar masih meneriakkan dagangannya.
                Bahkan, pohon besar di seberang jalan masih
                berdiri dengan cabang yang sama.
            </p>

            <p>
                Yang berubah hanyalah dirinya.
            </p>

            <p>
                Lima tahun lalu, Nara meninggalkan kota itu
                tanpa menoleh kembali. Ia membawa mimpi untuk
                membangun hidup baru, juga luka yang tidak
                pernah benar-benar ia ceritakan kepada siapa pun.
            </p>

            <p>
                Sekarang ia kembali untuk menghadiri pernikahan
                sahabatnya. Ia berjanji hanya akan tinggal tiga hari.
                Setelah itu, ia akan kembali ke kota tempat
                ia bekerja.
            </p>

            <p>
                Setidaknya, itulah rencananya.
            </p>

            <p>
                "Nara?"
            </p>

            <p>
                Suara itu membuatnya berhenti.
            </p>

            <p>
                Di antara kerumunan penumpang, seorang laki-laki
                berdiri dengan jaket abu-abu. Rambutnya lebih
                pendek daripada yang Nara ingat, dan wajahnya
                terlihat lebih dewasa.
            </p>

            <p>
                Namun, matanya masih sama.
            </p>

            <p>
                Dimas.
            </p>

            <p>
                Ada ribuan kalimat yang pernah Nara siapkan
                jika suatu hari mereka bertemu lagi. Ia pernah
                membayangkan akan marah, menangis, atau berjalan
                pergi tanpa mengatakan apa-apa.
            </p>

            <p>
                Kenyataannya, ia hanya berdiri diam.
            </p>

            <p>
                "Hai," kata Dimas akhirnya.
            </p>

            <p>
                "Hai."
            </p>

            <p>
                Lima tahun terpisah, dan hanya itu yang berhasil
                mereka ucapkan.
            </p>

            <p>
                Dimas melirik koper di sampingnya.
            </p>

            <p>
                "Baru sampai?"
            </p>

            <p>
                "Iya. Aku datang untuk pernikahan Sinta."
            </p>

            <p>
                "Aku tahu. Sinta memberitahuku."
            </p>

            <p>
                Tentu saja. Di kota sekecil ini, kabar perjalanan
                seseorang bisa sampai ke mana-mana sebelum orangnya
                sendiri tiba.
            </p>

            <p>
                Mereka berjalan keluar stasiun dengan jarak
                beberapa langkah. Dimas menawarkan untuk
                mengantarnya ke penginapan, tetapi Nara menolak
                dengan alasan bahwa ia sudah memesan kendaraan.
            </p>

            <p>
                Dimas tidak memaksa.
            </p>

            <p>
                Sebelum berpisah, ia berkata, "Aku senang kamu
                pulang, Nara."
            </p>

            <p>
                Kalimat itu terdengar sederhana. Justru karena
                sederhana, Nara tidak tahu bagaimana harus
                menanggapinya.
            </p>

            <p>
                Ia masuk ke kendaraan dan memandang keluar jendela.
                Dimas masih berdiri di depan stasiun ketika mobil
                mulai bergerak.
            </p>

            <p>
                Nara membuka ponselnya. Ada pesan baru dari Sinta,
                lengkap dengan alamat tempat acara pernikahan.
            </p>

            <p>
                Ia mencoba memusatkan perhatian pada pesan itu.
                Namun, pikirannya kembali kepada satu pertanyaan
                yang selama lima tahun ia hindari.
            </p>

            <p>
                Bagaimana jika beberapa orang tidak pernah
                benar-benar menjadi masa lalu?
            </p>

            <h2>Bab 2 — Hal yang Tertinggal</h2>

            <p>
                Pagi berikutnya, Nara berjalan menyusuri jalan
                kecil menuju kedai kopi favoritnya dahulu.
                Ia tidak berencana singgah lama. Hanya ingin
                menikmati secangkir kopi sebelum menemui Sinta.
            </p>

            <p>
                Bel pintu berbunyi ketika ia masuk.
                Aroma kopi dan roti hangat menyambutnya.
                Di dinding, foto-foto lama masih tergantung,
                termasuk foto sekelompok anak muda yang tertawa
                di depan kedai.
            </p>

            <p>
                Nara mengenali dirinya dalam foto itu.
                Di sampingnya, Dimas tersenyum sambil memegang
                dua cangkir kopi.
            </p>

            <p>
                "Aku kira kamu sudah lupa tempat ini."
            </p>

            <p>
                Nara menoleh. Dimas berdiri di dekat meja kasir.
                Entah sejak kapan ia berada di sana.
            </p>

            <p>
                "Aku hanya lupa beberapa hal," jawab Nara.
            </p>

            <p>
                "Termasuk aku?"
            </p>

            <p>
                Pertanyaan itu menggantung di antara mereka.
                Nara menatap foto di dinding, lalu kembali
                memandang Dimas.
            </p>

            <p>
                "Aku tidak pernah bilang begitu."
            </p>

            <p>
                Untuk pertama kalinya sejak kembali, Dimas
                tersenyum. Bukan senyum bahagia, melainkan
                senyum seseorang yang baru menemukan sedikit
                harapan setelah menunggu lama.
            </p>

            <p>
                Nara belum tahu apa yang akan terjadi setelah
                tiga hari itu berakhir. Ia juga belum tahu
                apakah luka lama bisa benar-benar sembuh.
            </p>

            <p>
                Tetapi pagi itu, untuk pertama kalinya,
                ia tidak terburu-buru mencari jalan pulang.
            </p>
        `
    },


    // =====================================
    // NOVEL 2
    // =====================================

    {
        id: 4,
        title: "Rahasia di Balik Kabut",
        author: "Ruang Cerita",
        type: "Novel",
        genre: "Fantasi",
        duration: "Bab 1",

        cover: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=600&q=80",

        description:
            "Sebuah desa tersembunyi, kabut misterius, dan rahasia yang diwariskan selama beberapa generasi.",

        content: `
            <h2>Bab 1 — Desa yang Hilang</h2>

            <p class="chapter-intro">
                Di tempat kabut tidak pernah menghilang,
                ada sebuah rahasia yang tidak boleh dibangunkan.
            </p>

            <p>
                Orang-orang di Desa Arunika percaya bahwa hutan
                di sebelah utara memiliki ingatan sendiri.
                Mereka tidak pernah memasuki hutan itu setelah
                matahari terbenam. Bahkan, anak-anak dilarang
                menyebut namanya ketika kabut mulai turun.
            </p>

            <p>
                Liora tidak pernah mempercayai larangan tersebut.
                Baginya, semua itu hanyalah cerita lama yang
                digunakan orang dewasa untuk menakut-nakuti anak-anak.
            </p>

            <p>
                Sampai suatu malam, ia melihat cahaya biru
                bergerak di antara pepohonan.
            </p>

            <p>
                Cahaya itu tidak seperti lentera. Ia melayang
                tanpa suara, berhenti sejenak, lalu bergerak
                semakin dalam ke hutan.
            </p>

            <p>
                Liora seharusnya kembali ke rumah.
                Namun, ada sesuatu di dalam dirinya yang
                menyuruhnya mengikuti cahaya itu.
            </p>

            <p>
                Ia mengambil mantel, menyelipkan pisau kecil
                ke ikat pinggang, kemudian keluar melalui
                pintu belakang.
            </p>

            <p>
                Udara terasa dingin. Kabut menutupi jalan setapak,
                membuat rumah-rumah di belakangnya perlahan
                menghilang dari pandangan.
            </p>

            <p>
                Semakin jauh ia berjalan, semakin jelas suara
                yang terdengar dari dalam hutan. Bukan suara
                binatang, bukan pula suara angin.
            </p>

            <p>
                Suara itu menyerupai seseorang yang sedang
                memanggil namanya.
            </p>

            <p>
                "Liora..."
            </p>

            <p>
                Ia berhenti.
            </p>

            <p>
                "Siapa di sana?" serunya.
            </p>

            <p>
                Tidak ada jawaban. Hanya cahaya biru yang
                kini berhenti di depan sebuah gerbang batu.
            </p>

            <p>
                Liora belum pernah melihat gerbang itu sebelumnya.
                Ukiran pada permukaannya menyerupai simbol
                yang sering ia lihat pada liontin peninggalan
                ibunya.
            </p>

            <p>
                Ia mengeluarkan liontin dari balik bajunya.
                Batu kecil di tengahnya mulai memancarkan
                cahaya yang sama dengan cahaya di hutan.
            </p>

            <p>
                Saat Liora mendekat, gerbang batu itu bergetar.
                Debu jatuh dari sela-selanya, sementara kabut
                di sekelilingnya berputar membentuk lingkaran.
            </p>

            <p>
                Kemudian, sebuah suara terdengar dari balik
                gerbang.
            </p>

            <p>
                "Akhirnya, pewaris terakhir telah kembali."
            </p>

            <p>
                Liora mundur satu langkah. Ia ingin berlari,
                tetapi kakinya terasa berat.
            </p>

            <p>
                Selama delapan belas tahun hidupnya, ia selalu
                mengira ibunya meninggal karena sakit.
                Ia tidak pernah mengetahui bahwa sebelum
                meninggal, ibunya pernah menjadi penjaga
                gerbang yang kini berdiri di hadapannya.
            </p>

            <p>
                Gerbang itu terbuka perlahan.
            </p>

            <p>
                Di baliknya, Liora melihat langit yang berbeda,
                bintang-bintang yang bergerak seperti makhluk
                hidup, dan sebuah kota yang mengambang di atas
                lautan kabut.
            </p>

            <p>
                Ia akhirnya mengerti mengapa penduduk desa
                begitu takut pada hutan utara.
            </p>

            <p>
                Mereka bukan takut pada sesuatu yang tinggal
                di dalamnya.
            </p>

            <p>
                Mereka takut pada sesuatu yang mungkin
                akan kembali melalui gerbang itu.
            </p>
        `
    },


    // =====================================
    // CERPEN 3
    // =====================================

    {
        id: 5,
        title: "Tetangga Sebelah",
        author: "Ruang Cerita",
        type: "Cerpen",
        genre: "Komedi",
        duration: "4 menit",

        cover: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80",

        description:
            "Niat mencari ketenangan berubah menjadi kekacauan setelah seorang tetangga baru pindah.",

        content: `
            <h2>Tetangga Sebelah</h2>

            <p class="chapter-intro">
                Kadang-kadang, masalah terbesar datang dari
                orang yang rumahnya hanya berjarak satu tembok.
            </p>

            <p>
                Bima pindah ke sebuah kontrakan karena ingin
                hidup tenang. Ia bekerja dari rumah, menyukai
                kopi tanpa gula, dan menganggap percakapan
                dengan manusia lain sebagai kegiatan yang
                sebaiknya dilakukan seperlunya.
            </p>

            <p>
                Kedamaiannya berakhir pada hari Selasa.
            </p>

            <p>
                Tepat pukul enam pagi, ia mendengar suara
                seseorang bernyanyi dengan sangat percaya diri.
                Masalahnya, suara itu lebih mirip pintu berkarat
                daripada suara penyanyi.
            </p>

            <p>
                Bima mencoba memakai penutup telinga.
                Tidak berhasil.
            </p>

            <p>
                Ia menyalakan kipas angin.
                Masih terdengar.
            </p>

            <p>
                Akhirnya, ia mengetuk pintu sebelah.
            </p>

            <p>
                Seorang perempuan membuka pintu sambil membawa
                spatula. "Ada apa?"
            </p>

            <p>
                "Maaf, bisa menyanyi sedikit lebih pelan?"
            </p>

            <p>
                Perempuan itu terdiam, lalu tersenyum lebar.
                "Wah, kamu suka suaraku?"
            </p>

            <p>
                Bima baru menyadari bahwa ia telah melakukan
                kesalahan besar.
            </p>

            <p>
                "Bukan begitu maksud saya."
            </p>

            <p>
                "Tenang saja. Aku memang sedang latihan.
                Minggu depan ada lomba menyanyi."
            </p>

            <p>
                Bima mengangguk pelan, berharap percakapan itu
                segera berakhir.
            </p>

            <p>
                "Namaku Rani. Kamu siapa?"
            </p>

            <p>
                "Bima."
            </p>

            <p>
                "Bagus! Kalau begitu, Bima, kamu harus datang
                ke lombaku nanti."
            </p>

            <p>
                Bima pulang dengan kesimpulan bahwa meminta
                tetangga mengurangi kebisingan adalah cara
                tercepat untuk mendapatkan undangan ke acara
                yang tidak diinginkan.
            </p>

            <p>
                Seminggu kemudian, Rani benar-benar menang.
                Bukan karena suaranya paling bagus, melainkan
                karena ia satu-satunya peserta yang berhasil
                membuat juri tertawa sepanjang penampilan.
            </p>

            <p>
                Bima, yang diam-diam datang untuk memastikan
                acara itu benar-benar ada, ikut tertawa paling
                keras.
            </p>

            <p>
                Sejak saat itu, ia tidak lagi mengeluh ketika
                mendengar Rani bernyanyi pada pagi hari.
            </p>

            <p>
                Setidaknya, sekarang ia sudah tahu kapan harus
                memakai penutup telinga.
            </p>
        `
    },


    // =====================================
    // NOVEL 3
    // =====================================

    {
        id: 6,
        title: "Di Antara Bintang",
        author: "Ruang Cerita",
        type: "Novel",
        genre: "Drama",
        duration: "Bab 1",

        cover: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=600&q=80",

        description:
            "Tentang dua sahabat, impian yang berbeda, dan pilihan yang mengubah masa depan mereka.",

        content: `
            <h2>Bab 1 — Mimpi yang Sama</h2>

            <p class="chapter-intro">
                Ketika masih kecil, kita mengira persahabatan
                berarti berjalan bersama selamanya.
            </p>

            <p>
                Setiap malam Jumat, Dani dan Kirana duduk
                di atap rumah tua milik nenek Kirana.
                Dari sana, mereka bisa melihat langit tanpa
                banyak cahaya kota yang mengganggu.
            </p>

            <p>
                Dani ingin menjadi astronom. Ia ingin mengetahui
                apa yang ada di balik bintang-bintang yang
                tampak begitu dekat, tetapi sesungguhnya
                berada sangat jauh.
            </p>

            <p>
                Kirana ingin menjadi penulis. Ia percaya bahwa
                manusia tidak selalu membutuhkan perjalanan
                ke luar angkasa untuk menemukan dunia baru.
                Terkadang, sebuah buku sudah cukup.
            </p>

            <p>
                "Kalau nanti aku sudah terkenal," kata Dani,
                "aku akan mengajakmu melihat bintang dari
                tempat yang belum pernah dikunjungi siapa pun."
            </p>

            <p>
                Kirana tertawa. "Kalau aku sudah menjadi penulis,
                aku akan menulis buku tentangmu."
            </p>

            <p>
                Mereka membuat janji di bawah langit malam.
                Janji yang terdengar sederhana ketika diucapkan
                oleh dua anak berusia tujuh belas tahun.
            </p>

            <p>
                Lima tahun kemudian, Dani menerima kesempatan
                untuk melanjutkan pendidikan di luar negeri.
                Ia akan pergi selama beberapa tahun, mungkin
                lebih lama.
            </p>

            <p>
                Kirana datang ke bandara untuk mengantarnya.
                Ia membawa sebuah buku catatan berwarna biru.
            </p>

            <p>
                "Apa ini?" tanya Dani.
            </p>

            <p>
                "Bab pertama bukuku. Aku belum tahu kapan akan
                selesai, tetapi aku ingin kamu membacanya."
            </p>

            <p>
                Dani membuka halaman pertama. Di sana tertulis
                sebuah kalimat pendek.
            </p>

            <p>
                Untuk seseorang yang mengajarkanku bahwa
                jarak tidak selalu berarti kehilangan.
            </p>

            <p>
                Ia menutup buku itu dengan hati-hati.
                "Aku akan membacanya sampai selesai."
            </p>

            <p>
                "Janji?"
            </p>

            <p>
                "Janji."
            </p>

            <p>
                Mereka berpelukan sebelum Dani memasuki ruang
                keberangkatan. Tidak ada tangisan berlebihan,
                tidak ada kata-kata panjang. Hanya kesadaran
                bahwa setelah hari itu, banyak hal akan berubah.
            </p>

            <p>
                Kirana pulang dengan langkah pelan.
                Di dalam tasnya, ia menyimpan tiket kereta
                yang pernah mereka gunakan untuk perjalanan
                pertama ke kota besar.
            </p>

            <p>
                Ia tidak tahu apakah mereka akan tetap menjadi
                sahabat setelah bertahun-tahun berpisah.
                Ia hanya tahu bahwa ada beberapa orang yang
                pantas mendapat tempat di dalam cerita kita,
                bahkan ketika mereka tidak lagi berada
                di dekat kita.
            </p>

            <h2>Bab 2 — Jarak</h2>

            <p>
                Bulan-bulan pertama berlalu dengan pesan singkat
                dan panggilan video pada akhir pekan.
                Dani bercerita tentang laboratorium, dosen,
                dan malam-malam panjang yang dihabiskannya
                untuk mengamati langit.
            </p>

            <p>
                Kirana bercerita tentang pekerjaannya,
                halaman-halaman yang berhasil ia tulis,
                dan secangkir kopi yang selalu mendingin
                sebelum sempat dihabiskan.
            </p>

            <p>
                Kemudian, pesan-pesan itu mulai berkurang.
                Bukan karena mereka tidak lagi peduli,
                melainkan karena kehidupan perlahan
                memenuhi waktu yang dulu mereka miliki.
            </p>

            <p>
                Dani semakin sibuk. Kirana semakin berani
                mengejar mimpinya. Kadang-kadang, mereka
                melewatkan satu minggu tanpa berbicara.
            </p>

            <p>
                Kirana mulai memahami bahwa persahabatan
                bukan tentang seberapa sering seseorang
                hadir, melainkan tentang apakah kita masih
                bisa menemukan jalan untuk kembali.
            </p>

            <p>
                Suatu malam, ketika ia hampir menyerah
                menyelesaikan novelnya, sebuah pesan masuk.
            </p>

            <p>
                Dari Dani.
            </p>

            <p>
                "Aku melihat bintang yang ingin kutunjukkan
                kepadamu. Kalau kamu masih ingat janji kita,
                aku akan pulang tahun depan."
            </p>

            <p>
                Kirana membaca pesan itu berkali-kali.
                Kemudian ia membuka buku catatannya dan
                menulis satu kalimat baru.
            </p>

            <p>
                Beberapa mimpi membutuhkan waktu lebih lama
                untuk sampai, tetapi bukan berarti kita
                harus berhenti menunggunya.
            </p>
        `
    }

];


/* =========================================
   ELEMEN WEBSITE
========================================= */

const homePage = document.getElementById("homePage");
const readerPage = document.getElementById("readerPage");

const storyGrid = document.getElementById("storyGrid");
const searchInput = document.getElementById("searchInput");
const typeFilter = document.getElementById("typeFilter");

const resultsCount = document.getElementById("resultsCount");
const emptyState = document.getElementById("emptyState");

const categoryButtons = document.querySelectorAll(".category-btn");

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

let activeCategory = "Semua";
let currentFontSize = 18;


/* =========================================
   TAHUN FOOTER
========================================= */

document.getElementById("currentYear").textContent =
    new Date().getFullYear();


/* =========================================
   MEMBUAT KARTU CERITA
========================================= */

function renderStories() {

    const keyword = searchInput.value.trim().toLowerCase();
    const selectedType = typeFilter.value;

    const filteredStories = stories.filter(story => {

        const matchesKeyword =
            story.title.toLowerCase().includes(keyword) ||
            story.author.toLowerCase().includes(keyword) ||
            story.description.toLowerCase().includes(keyword) ||
            story.genre.toLowerCase().includes(keyword);

        const matchesCategory =
            activeCategory === "Semua" ||
            story.genre === activeCategory;

        const matchesType =
            selectedType === "semua" ||
            story.type === selectedType;

        return matchesKeyword && matchesCategory && matchesType;
    });


    storyGrid.innerHTML = "";

    resultsCount.textContent =
        `${filteredStories.length} cerita ditemukan`;

    emptyState.hidden = filteredStories.length !== 0;


    filteredStories.forEach(story => {

        const card = document.createElement("article");

        card.className = "story-card";

        const coverWrap = document.createElement("div");
        coverWrap.className = "cover-wrap";

        const cover = document.createElement("img");

        cover.className = "story-cover";
        cover.src = story.cover;
        cover.alt = `Sampul ${story.title}`;
        cover.loading = "lazy";

        cover.onerror = function () {
            this.onerror = null;
            this.src =
                "https://placehold.co/600x800/ede9fe/6d28d9?text=Ruang+Cerita";
        };


        const typeBadge = document.createElement("span");

        typeBadge.className = "cover-type";
        typeBadge.textContent = story.type;


        const body = document.createElement("div");
        body.className = "story-body";


        const genre = document.createElement("div");

        genre.className = "story-genre";
        genre.textContent = story.genre;


        const title = document.createElement("h3");

        title.className = "story-title";
        title.textContent = story.title;


        const author = document.createElement("p");

        author.className = "story-author";
        author.textContent = `Oleh ${story.author}`;


        const description = document.createElement("p");

        description.className = "story-description";
        description.textContent = story.description;


        const readButton = document.createElement("button");

        readButton.className = "read-button";
        readButton.textContent = "Baca Cerita →";

        readButton.addEventListener("click", () => {
            openStory(story.id);
        });


        coverWrap.append(cover, typeBadge);

        body.append(
            genre,
            title,
            author,
            description,
            readButton
        );

        card.append(coverWrap, body);

        storyGrid.appendChild(card);
    });

}


/* =========================================
   FILTER DAN PENCARIAN
========================================= */

searchInput.addEventListener("input", renderStories);

typeFilter.addEventListener("change", renderStories);


categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(item => {
            item.classList.remove("active");
        });

        button.classList.add("active");

        activeCategory = button.dataset.category;

        renderStories();
    });

});


/* =========================================
   MEMBUKA CERITA
========================================= */

function openStory(id) {

    const story = stories.find(item => item.id === id);

    if (!story) {
        return;
    }

    document.getElementById("readerCover").src = story.cover;

    document.getElementById("readerCover").alt =
        `Sampul ${story.title}`;

    document.getElementById("readerTitle").textContent =
        story.title;

    document.getElementById("readerAuthor").textContent =
        `Ditulis oleh ${story.author}`;

    document.getElementById("readerType").textContent =
        story.type;

    document.getElementById("readerGenre").textContent =
        `Genre: ${story.genre}`;

    document.getElementById("readerDuration").textContent =
        story.duration;

    /*
      Isi cerita berupa HTML yang ditulis oleh pemilik
      website dalam data stories.
    */

    document.getElementById("storyContent").innerHTML =
        story.content;

    homePage.hidden = true;
    readerPage.hidden = false;

    currentFontSize = 18;

    document.getElementById("storyContent").style.fontSize =
        `${currentFontSize}px`;

    navMenu.classList.remove("open");

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

    /*
      URL hash memungkinkan pembaca menandai cerita
      yang sedang dibaca. Cerita dibuka melalui
      JavaScript, tanpa memuat ulang halaman.
    */

    window.location.hash = `cerita-${story.id}`;
}


/* =========================================
   KEMBALI KE BERANDA
========================================= */

function showHome() {

    readerPage.hidden = true;
    homePage.hidden = false;

    navMenu.classList.remove("open");

    history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
    );

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================
   MEMPERBESAR DAN MEMPERKECIL TEKS
========================================= */

document.getElementById("increaseFont")
    .addEventListener("click", () => {

        currentFontSize = Math.min(currentFontSize + 2, 28);

        document.getElementById("storyContent").style.fontSize =
            `${currentFontSize}px`;

    });


document.getElementById("decreaseFont")
    .addEventListener("click", () => {

        currentFontSize = Math.max(currentFontSize - 2, 14);

        document.getElementById("storyContent").style.fontSize =
            `${currentFontSize}px`;

    });


/* =========================================
   MENU HP
========================================= */

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("open");

});


/* =========================================
   MENAMPILKAN CERITA PERTAMA KALI
========================================= */

renderStories();


/*
  Catatan:
  Semua cerita dalam versi ini disimpan di JavaScript.
  Untuk menyimpan cerita baru melalui halaman admin,
  mengelola akun, atau mengunggah foto dari galeri
  secara permanen, dibutuhkan penyimpanan data
  atau backend tambahan.
*/