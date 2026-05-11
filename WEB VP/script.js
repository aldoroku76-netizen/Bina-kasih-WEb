// =============================================
// DATA PRODUK LENGKAP
// =============================================
const DEMO_PRODUCTS = [
    // Pod
    { id:1,  brand:'Oxva',        nama_produk:'Xlim Pro 3 (Edition 2026)',     kategori:'Pod', harga:315000, stock:10 },
    { id:2,  brand:'Lost Vape',   nama_produk:'Centaurus E40 40W',             kategori:'Pod', harga:380000, stock:7  },
    { id:3,  brand:'Foom',        nama_produk:'Pod X Switch Midnight Green',   kategori:'Pod', harga:399000, stock:5  },
    { id:4,  brand:'Lost Vape',   nama_produk:'Ursa Nano 3 Edition',           kategori:'Pod', harga:265000, stock:8  },
    { id:5,  brand:'Vaporesso',   nama_produk:'Xros 3 Nano',                   kategori:'Pod', harga:270000, stock:12 },
    { id:6,  brand:'Vaporesso',   nama_produk:'Veco Go Pod Kit 1500mAh',       kategori:'Pod', harga:230000, stock:6  },
    { id:7,  brand:'Black Tech',  nama_produk:'Alpha Pod Mod 40W',             kategori:'Pod', harga:295000, stock:4  },
    { id:8,  brand:'Relx',        nama_produk:'Infinity Device Black',         kategori:'Pod', harga:390000, stock:9  },
    { id:9,  brand:'San Indonesia',nama_produk:'San Dynasty Pod',              kategori:'Pod', harga:285000, stock:3  },
    { id:10, brand:'Zeevoo',      nama_produk:'Ifill Pod Kit 25W',             kategori:'Pod', harga:65000,  stock:15 },
    // Mod
    { id:11, brand:'Hotcig',      nama_produk:'R99 Single Battery 99W',        kategori:'Mod', harga:390000, stock:5  },
    { id:12, brand:'Hotcig',      nama_produk:'R234 Pro Dual Battery',         kategori:'Mod', harga:570000, stock:3  },
    { id:13, brand:'San x Gerobak',nama_produk:'S101 Mod (YiHi Chip)',         kategori:'Mod', harga:580000, stock:2  },
    // Liquid (Salt/PF)
    { id:14, brand:'Foom',        nama_produk:'Icy Watermelon 30ml',           kategori:'Liquid (Salt/PF)',harga:110000, stock:20 },
    { id:15, brand:'Foom',        nama_produk:'New York Red Velvet 30ml',      kategori:'Liquid (Salt/PF)',harga:85000,  stock:18 },
    { id:16, brand:'Lab51',       nama_produk:'Banana Moon Saltnic 15ml',      kategori:'Liquid (Salt/PF)',harga:32000,  stock:40 },
    { id:17, brand:'Lab51',       nama_produk:'White Blend Saltnic 15ml',      kategori:'Liquid (Salt/PF)',harga:32000,  stock:35 },
    { id:18, brand:'Juicenation', nama_produk:'Buaqita Sours Series 30ml',     kategori:'Liquid (Salt/PF)',harga:120000, stock:10 },
    { id:19, brand:'Movi',        nama_produk:'Gummypy Strawberry 15ml',       kategori:'Liquid (Salt/PF)',harga:73000,  stock:25 },
    { id:20, brand:'Planet Vape', nama_produk:'Petjah Banana Kiwi 30ml',       kategori:'Liquid (Salt/PF)',harga:75000,  stock:22 },
    { id:21, brand:'Hero57',      nama_produk:'American Fruity Mango 60ml',    kategori:'Liquid (Salt/PF)',harga:140000, stock:12 },
    { id:22, brand:'Emkay Brewer',nama_produk:'Dark Luna 60ml',                kategori:'Liquid (Salt/PF)',harga:155000, stock:8  },
    { id:23, brand:'Vape Zoo',    nama_produk:'J-Min Grape 60ml',              kategori:'Liquid (Salt/PF)',harga:120000, stock:14 },
    { id:24, brand:'Oat Drips',   nama_produk:'Milk Cereal 60ml',              kategori:'Liquid (Salt/PF)',harga:152000, stock:6  },
    { id:25, brand:'Kyoto',       nama_produk:'Tokyo Strawberry 30ml',         kategori:'Liquid (Salt/PF)',harga:29000,  stock:50 },
    { id:26, brand:'Kong Series', nama_produk:'Banana Pod Friendly 30ml',      kategori:'Liquid (Salt/PF)',harga:29000,  stock:45 },
    { id:27, brand:'Lakley',      nama_produk:'Bananola 30ml',                 kategori:'Liquid (Salt/PF)',harga:85000,  stock:16 },
    { id:28, brand:'Dunia Juice', nama_produk:'Furla Melon Cream 60ml',        kategori:'Liquid (Salt/PF)',harga:150000, stock:9  },
    { id:29, brand:'Aqua Saltnic',nama_produk:'Exotic Mango 15ml',             kategori:'Liquid (Salt/PF)',harga:30000,  stock:60 },
    { id:30, brand:'Tokyo',       nama_produk:'Tokyo Lychee 60ml',             kategori:'Liquid (Salt/PF)',harga:159000, stock:7  },
    // Cartridge
    { id:31, brand:'Oxva',        nama_produk:'Xlim V3 Top Fill (Satuan)',     kategori:'Cartridge',       harga:35000,  stock:30 },
    { id:32, brand:'Movi',        nama_produk:'Kuy V2 Replacement',            kategori:'Cartridge',       harga:27000,  stock:25 },
    { id:33, brand:'Lost Vape',   nama_produk:'E-Plus Cartridge Thelema',      kategori:'Cartridge',       harga:42000,  stock:20 },
    { id:34, brand:'Lost Vape',   nama_produk:'Ursa V2 Cartridge',             kategori:'Cartridge',       harga:34000,  stock:18 },
    { id:35, brand:'Vaporesso',   nama_produk:'Vibe SE 2 Replacement',         kategori:'Cartridge',       harga:45000,  stock:15 },
    { id:36, brand:'Relx',        nama_produk:'Infinity Pod Single',           kategori:'Cartridge',       harga:82000,  stock:22 },
    { id:37, brand:'Aspire',      nama_produk:'Minican Pod 0.8 Ohm',           kategori:'Cartridge',       harga:40000,  stock:12 },
    { id:38, brand:'Nemovape',    nama_produk:'N7 Replacement Pod',            kategori:'Cartridge',       harga:25000,  stock:28 },
    // Coil
    { id:39, brand:'Geekvape',    nama_produk:'Aegis Boost Coil 0.4 Ohm',                  kategori:'Coil', harga:20000,  stock:40 },
    { id:40, brand:'Smok',        nama_produk:'RPM40 Coil 0.4 Ohm',                        kategori:'Coil', harga:24000,  stock:35 },
    { id:41, brand:'Next Mind',   nama_produk:'CT1 Ceramic Coil 1.2 Ohm',                  kategori:'Coil', harga:35000,  stock:20 },
    { id:42, brand:'Voopoo',      nama_produk:'PnP-VM1 0.3 Ohm',                           kategori:'Coil', harga:35000,  stock:18 },
    { id:97, brand:'Meotech',     nama_produk:'Pre-build Meo Coil Alien Fused Clapton NI80',kategori:'Coil', harga:45000,  stock:20 },
    { id:98, brand:'Coil Gear',   nama_produk:'Pre-build Fused Clapton NI80 (1 Pasang)',    kategori:'Coil', harga:25000,  stock:35 },
    { id:99, brand:'Sandvik',     nama_produk:'Pre-build Baby Alien Ni80 (RDA/RTA)',        kategori:'Coil', harga:35000,  stock:25 },
    { id:100,brand:'Demon Killer',nama_produk:'Pre-build Violence Coil 7-in-1 Box Set',     kategori:'Coil', harga:65000,  stock:15 },
    { id:101,brand:'Voopoo',      nama_produk:'Coil AIO PnP-VM1 0.3 Ohm Mesh',             kategori:'Coil', harga:35000,  stock:30 },
    { id:102,brand:'Voopoo',      nama_produk:'Coil AIO PnP-TW30 0.3 Ohm (Drag Series)',   kategori:'Coil', harga:40000,  stock:28 },
    { id:103,brand:'Geekvape',    nama_produk:'Coil AIO B Series 0.4 Ohm (Aegis Boost)',   kategori:'Coil', harga:35000,  stock:32 },
    { id:104,brand:'Geekvape',    nama_produk:'Coil AIO P Series 0.2 Ohm (Boost Pro)',      kategori:'Coil', harga:45000,  stock:20 },
    { id:105,brand:'Vaporesso',   nama_produk:'Coil AIO GTX Mesh Coil 0.3 Ohm',            kategori:'Coil', harga:38000,  stock:25 },
    { id:106,brand:'Coil Gear',   nama_produk:'Kawat Roll Ni80 24G (Panjang 30ft)',         kategori:'Coil', harga:45000,  stock:20 },
    { id:107,brand:'Coil Gear',   nama_produk:'Kawat Roll Ni80 26G (Panjang 30ft)',         kategori:'Coil', harga:45000,  stock:20 },
    { id:108,brand:'UD',          nama_produk:'Kawat Roll Kanthal A1 24G (Panjang 30ft)',   kategori:'Coil', harga:35000,  stock:25 },
    { id:109,brand:'Mad Rabbit',  nama_produk:'Kawat Roll Ni80 Low Resistance (15ft)',      kategori:'Coil', harga:120000, stock:10 },
    { id:110,brand:'Anarchist',   nama_produk:'Kawat Roll Anarchist Wire Ni80 (15ft)',      kategori:'Coil', harga:165000, stock:8  },
    { id:111,brand:'Temco',       nama_produk:'Kawat Roll Kanthal A1 USA (30ft)',           kategori:'Coil', harga:60000,  stock:18 },
    { id:112,brand:'Hotcig',      nama_produk:'Coil AIO R-Series Coil (Hotcig R233)',       kategori:'Coil', harga:35000,  stock:22 },
    { id:113,brand:'Aspire',      nama_produk:'Coil AIO BP Mesh Coil 0.17 Ohm',            kategori:'Coil', harga:45000,  stock:18 },
    { id:114,brand:'Hellvape',    nama_produk:'Pre-build Quad Core Fused Clapton Ni80 (10pcs)',kategori:'Coil',harga:85000, stock:12 },
    { id:115,brand:'Coil Master', nama_produk:'Pre-build Skynet Case (48pcs Mixed Coil)',   kategori:'Coil', harga:195000, stock:5  },
    { id:116,brand:'Geekvape',    nama_produk:'Kawat Roll Ni80 28G (30ft)',                 kategori:'Coil', harga:40000,  stock:20 },
    // Kapas
    { id:43, brand:"Wick 'N' Vape",nama_produk:'Cotton Bacon Prime (Original)',        kategori:'Kapas', harga:50000,  stock:30 },
    { id:44, brand:'Kendo',       nama_produk:'Kendo Cotton Gold Edition',             kategori:'Kapas', harga:65000,  stock:22 },
    { id:45, brand:'Coil Gear',   nama_produk:'Cotton Wicks Premium (Shoe Lace)',      kategori:'Kapas', harga:30000,  stock:40 },
    { id:46, brand:'Holy Fiber',  nama_produk:'Holy Fiber Extreme Series',             kategori:'Kapas', harga:45000,  stock:15 },
    { id:91, brand:'Cloud 9',     nama_produk:'Cloud 9 Cotton (Premium Can)',           kategori:'Kapas', harga:75000,  stock:18 },
    { id:92, brand:'Muji',        nama_produk:'Muji Cotton Ecru (Pads)',                kategori:'Kapas', harga:25000,  stock:60 },
    { id:93, brand:'Native Wicks',nama_produk:'Platinum Blend',                        kategori:'Kapas', harga:60000,  stock:20 },
    { id:94, brand:'Bacon',       nama_produk:'Cotton Bacon Version 2.0',              kategori:'Kapas', harga:45000,  stock:25 },
    { id:95, brand:'Flash Wicks', nama_produk:'Flash Wicks Pink Edition',              kategori:'Kapas', harga:35000,  stock:30 },
    { id:96, brand:'Geekvape',    nama_produk:'Feather Cotton (Pre-loaded)',            kategori:'Kapas', harga:40000,  stock:22 },
    // Aksesoris
    { id:47, brand:'Basen',       nama_produk:'Baterai 18650 3100mAh',         kategori:'Aksesoris',       harga:65000,  stock:25 },
    { id:48, brand:'Sony',        nama_produk:'VTC6 18650 Battery',            kategori:'Aksesoris',       harga:90000,  stock:18 },
    { id:49, brand:'Demon Killer',nama_produk:'8-in-1 Coil Box (48pcs)',       kategori:'Aksesoris',       harga:18000,  stock:50 },
    { id:50, brand:'Mike Vapes',  nama_produk:'Eclipse Dual RTA 25mm',         kategori:'Aksesoris',       harga:350000, stock:4  },
    { id:51, brand:'Gerobak Vapor',nama_produk:'San Dynasty 510 Drip Tip',    kategori:'Aksesoris',       harga:35000,  stock:30 },
    { id:52, brand:'Foom',        nama_produk:'Lanyard Exclusive Pod X',       kategori:'Aksesoris',       harga:25000,  stock:20 },
    { id:53, brand:'Nitecore',     nama_produk:'New i2 Charger Dual Slot',      kategori:'Aksesoris',       harga:185000, stock:10 },
    // Liquid (FB)
    { id:54, brand:'JVS x Vapezoo',nama_produk:'J-Min Grape 60ml',             kategori:'Liquid (FB)',     harga:120000, stock:12 },
    { id:55, brand:'Oat Drips',    nama_produk:'V1 Original Milk Cereal 60ml', kategori:'Liquid (FB)',     harga:155000, stock:8  },
    { id:56, brand:'Emkay Brewer', nama_produk:'Grappy 60ml',                  kategori:'Liquid (FB)',     harga:150000, stock:10 },
    { id:57, brand:'Oat Drips',    nama_produk:'V3 Banana Oat 60ml',           kategori:'Liquid (FB)',     harga:155000, stock:10 },
    { id:58, brand:'Hero57',       nama_produk:'American Fruity Mango 60ml',   kategori:'Liquid (FB)',     harga:145000, stock:12 },
    { id:59, brand:'Hero57',       nama_produk:'Luna Cheese Graham 60ml',      kategori:'Liquid (FB)',     harga:150000, stock:9  },
    { id:60, brand:'Movi',         nama_produk:'District One 21 (D121) 60ml',  kategori:'Liquid (FB)',     harga:185000, stock:7  },
    { id:61, brand:'Lab51',        nama_produk:'Dose Berry Cheesecake 60ml',   kategori:'Liquid (FB)',     harga:145000, stock:11 },
    { id:62, brand:'Paradewa',     nama_produk:'Apple Zeus 60ml',              kategori:'Liquid (FB)',     harga:145000, stock:8  },
    { id:63, brand:'C9',           nama_produk:'Sweet Corn 60ml',              kategori:'Liquid (FB)',     harga:135000, stock:14 },
    { id:64, brand:'R57',          nama_produk:'Mango Dance 60ml',             kategori:'Liquid (FB)',     harga:130000, stock:15 },
    { id:65, brand:'Vape On',      nama_produk:'Sub-Ohm Blue Cheese 60ml',     kategori:'Liquid (FB)',     harga:140000, stock:10 },
    { id:66, brand:'Juice Nation', nama_produk:'Choco Blast 60ml',             kategori:'Liquid (FB)',     harga:135000, stock:12 },
    { id:67, brand:'Union Labs',   nama_produk:'Screen Savers Fruity 60ml',    kategori:'Liquid (FB)',     harga:140000, stock:9  },
    { id:68, brand:'Indonesia Juice Cartel', nama_produk:'Blackwood Tobacco 60ml', kategori:'Liquid (FB)', harga:155000, stock:6  },
    { id:69, brand:'Abi Brew',     nama_produk:'Juta Freeze Grape 60ml',       kategori:'Liquid (FB)',     harga:110000, stock:18 },
    { id:70, brand:'Foom',         nama_produk:'Black Series Chocolate 60ml',  kategori:'Liquid (FB)',     harga:135000, stock:13 },
    { id:71, brand:'Hexom',        nama_produk:'Hexom Blue 100ml',             kategori:'Liquid (FB)',     harga:185000, stock:5  },
    { id:72, brand:'King Cloud',   nama_produk:'Tiramisu Cake 60ml',           kategori:'Liquid (FB)',     harga:135000, stock:11 },
    { id:73, brand:'Steam Queen',  nama_produk:'Oatberry 60ml',                kategori:'Liquid (FB)',     harga:150000, stock:9  },
    // Mod (tambahan)
    { id:74, brand:'Geekvape',     nama_produk:'Aegis Legend 3 (L200)',         kategori:'Mod', harga:625000, stock:4  },
    { id:75, brand:'Geekvape',     nama_produk:'Aegis Solo 3 (Single Battery)', kategori:'Mod', harga:480000, stock:6  },
    { id:76, brand:'Lost Vape',    nama_produk:'Centaurus M200 Dual Mod',       kategori:'Mod', harga:550000, stock:5  },
    { id:77, brand:'Lost Vape',    nama_produk:'Thelema Quest 200W Clear',      kategori:'Mod', harga:515000, stock:4  },
    { id:78, brand:'Vaporesso',    nama_produk:'Gen Max 220W',                  kategori:'Mod', harga:585000, stock:3  },
    { id:79, brand:'Vaporesso',    nama_produk:'Armour Max Dual 21700',         kategori:'Mod', harga:650000, stock:3  },
    { id:80, brand:'Dovpo',        nama_produk:'MVP 220W',                      kategori:'Mod', harga:450000, stock:5  },
    { id:81, brand:'Rincoe',       nama_produk:'Jellybox 228W Clear',           kategori:'Mod', harga:420000, stock:6  },
    { id:82, brand:'Voopoo',       nama_produk:'Drag 5 Mod 177W',               kategori:'Mod', harga:540000, stock:4  },
    { id:83, brand:'Hellvape',     nama_produk:'Arez 120W Mod',                 kategori:'Mod', harga:495000, stock:5  },
    { id:84, brand:'HexOhm',       nama_produk:'HexOhm V3.0 Anodized',          kategori:'Mod', harga:2850000,stock:1  },
    { id:85, brand:'SX Mini',      nama_produk:'G Class V2',                    kategori:'Mod', harga:2450000,stock:1  },
    { id:86, brand:'BP Mods',      nama_produk:'Warhammer Single 18650',        kategori:'Mod', harga:525000, stock:3  },
    { id:87, brand:'Ambition Mods',nama_produk:'Hera 60W Box Mod',              kategori:'Mod', harga:675000, stock:2  },
    { id:88, brand:'Mechlyfe',     nama_produk:'Paramour SBS Mod',              kategori:'Mod', harga:750000, stock:2  },
    { id:89, brand:'Aspire',       nama_produk:'Mixx SBS 60W',                  kategori:'Mod', harga:850000, stock:3  },
    { id:90, brand:'Augvape',      nama_produk:'VX217 Dual 21700',              kategori:'Mod', harga:510000, stock:4  },
];

let isDemoMode = false;

class VapeKasir {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem('vapeCart')) || [];
        this.activeKategori = '';
        this.applySavedPrices();
        this.init();
    }

    applySavedPrices() {
        const edits = JSON.parse(localStorage.getItem('daggerPriceEdits') || '{}');
        DEMO_PRODUCTS.forEach(p => {
            if (edits[p.id] !== undefined) p.harga = edits[p.id];
        });
    }

    init() {
        this.bindEvents();
        this.bindPills();
        this.updateClock();
        this.loadSalesToday();
        this.loadProducts();
        this.renderCart();
        setInterval(() => this.updateClock(), 1000);
    }

    bindEvents() {
        document.getElementById('searchInput').addEventListener('input', debounce(this.loadProducts.bind(this), 300));
        document.getElementById('refreshBtn').addEventListener('click', () => {
            isDemoMode = false;
            this.loadProducts();
        });
        document.getElementById('closeCart').addEventListener('click', () => this.toggleCart());
        document.getElementById('overlay').addEventListener('click', () => {
            this.closePaymentModal();
            if (document.getElementById('cartSidebar').classList.contains('open')) this.toggleCart();
        });
        document.getElementById('checkoutBtn').addEventListener('click', () => this.openPaymentModal());
        document.getElementById('clearCart').addEventListener('click', () => this.clearCart());
        document.getElementById('closeModal').addEventListener('click', () => this.closePaymentModal());
        document.getElementById('cancelPayment').addEventListener('click', () => this.closePaymentModal());
        document.getElementById('confirmPayment').addEventListener('click', () => this.processPayment());
        document.querySelectorAll('input[name="payment"]').forEach(r => {
            r.addEventListener('change', e => {
                const val = e.target.value;
                const total = this.getTotal();
                document.getElementById('bayarSection').style.display    = val === 'tunai'    ? 'block' : 'none';
                document.getElementById('qrisSection').style.display     = val === 'qris'     ? 'block' : 'none';
                document.getElementById('transferSection').style.display = val === 'transfer' ? 'block' : 'none';
                if (val === 'qris')     document.getElementById('qrisAmount').textContent     = `Rp ${this.fmt(total)}`;
                if (val === 'transfer') document.getElementById('transferAmount').textContent = `Rp ${this.fmt(total)}`;
            });
        });
        document.getElementById('jumlahBayar').addEventListener('input', () => this.calculateKembali());
    }

    bindPills() {
        // Main category pills (product grid)
        document.querySelectorAll('.cat-pill').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.cat-pill').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.activeKategori = btn.dataset.cat;
                this.loadProducts();
            });
        });

        // Price category pills (management sidebar)
        this.activePriceKat = '';
        document.querySelectorAll('.price-cat-pill').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.price-cat-pill').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.activePriceKat = btn.dataset.pcat;
                const toolbar = document.getElementById('priceToolbar');
                if (toolbar) toolbar.style.display = 'flex';
                const searchVal = document.getElementById('priceSearch') ? document.getElementById('priceSearch').value.toLowerCase() : '';
                this.renderEditPrices(searchVal, this.activePriceKat);
            });
        });
    }

    updateClock() {
        const now = new Date();
        document.getElementById('jam').textContent = now.toLocaleTimeString('id-ID');
        document.getElementById('tanggal').textContent = now.toLocaleDateString('id-ID', {
            weekday:'long', year:'numeric', month:'long', day:'numeric'
        });
    }

    async loadSalesToday() {
        try {
            const r = await fetch('api/sales-today.php');
            if (!r.ok) throw new Error();
            const d = await r.json();
            document.getElementById('salesToday').textContent = `Rp ${this.fmt(d.total || 0)}`;
        } catch {
            const s = JSON.parse(localStorage.getItem('demoSalesToday') || '0');
            document.getElementById('salesToday').textContent = `Rp ${this.fmt(s)}`;
        }
    }

    async loadProducts() {
        const search = document.getElementById('searchInput').value.toLowerCase();
        const kategori = this.activeKategori;
        try {
            if (isDemoMode) throw new Error('demo');
            const p = new URLSearchParams();
            if (search) p.append('search', search);
            if (kategori) p.append('kategori', kategori);
            document.getElementById('productsGrid').innerHTML = '<div class="loading pulse">Memuat produk...</div>';
            const r = await fetch(`api/products.php?${p}`);
            if (!r.ok) throw new Error();
            const products = await r.json();
            if (!Array.isArray(products)) throw new Error();
            this.renderProducts(products);
        } catch {
            isDemoMode = true;
            let products = [...DEMO_PRODUCTS];
            if (search) products = products.filter(p => p.nama_produk.toLowerCase().includes(search) || p.brand.toLowerCase().includes(search));
            if (kategori) products = products.filter(p => p.kategori === kategori);
            this.renderProducts(products);
        }
    }

    renderProducts(products) {
        const grid = document.getElementById('productsGrid');
        if (!products.length) {
            grid.innerHTML = '<div class="loading">Tidak ada produk ditemukan.</div>';
            return;
        }
        grid.innerHTML = products.map(p => `
            <div class="product-card ${p.stock < 5 ? 'low-stock' : ''}" data-id="${p.id}">
                <div class="product-header">
                    <span class="kategori-badge kategori-${p.kategori.replace(/[\s/()]/g,'-')}">${p.kategori}</span>
                </div>
                <div class="product-brand">${p.brand || ''}</div>
                <div class="product-nama">${p.nama_produk}</div>
                <div class="product-harga">Rp ${this.fmt(p.harga)}</div>
                <div class="product-stock">
                    <i class="fas ${p.stock < 5 ? 'fa-exclamation-triangle' : 'fa-box-open'}"></i>
                    <span class="${p.stock < 5 ? 'stock-low' : 'stock-ok'}">Stok: ${p.stock}</span>
                </div>
                <button class="btn-add" ${p.stock === 0 ? 'disabled' : ''}
                    onclick="kasir.addToCart(${p.id},'${p.nama_produk.replace(/'/g,"\\'")}',${p.harga},'${p.kategori}','${(p.brand||'').replace(/'/g,"\\'")}')">
                    ${p.stock === 0 ? '<i class="fas fa-ban"></i> Stok Habis' : '<i class="fas fa-plus"></i> Tambah'}
                </button>
            </div>
        `).join('');
    }

    addToCart(id, nama, harga, kategori, brand) {
        const ex = this.cart.find(i => i.id === id);
        if (ex) ex.qty += 1;
        else this.cart.push({ id, nama, harga, kategori, brand, qty: 1 });
        this.saveCart();
        this.renderCart();
        this.showNotif(`${nama} ditambahkan`, 'success');
        if (!document.getElementById('cartSidebar').classList.contains('open')) this.toggleCart();
    }

    removeFromCart(id) {
        this.cart = this.cart.filter(i => i.id !== id);
        this.saveCart(); this.renderCart();
    }

    updateQty(id, delta) {
        const item = this.cart.find(i => i.id === id);
        if (item) { item.qty = Math.max(1, item.qty + delta); this.saveCart(); this.renderCart(); }
    }

    toggleCart() {
        const isCartOpen = document.getElementById('cartSidebar').classList.toggle('open');
        if (!document.getElementById('paymentModal').classList.contains('active')) {
            document.getElementById('overlay').classList.toggle('active', isCartOpen);
        }
    }

    renderCart() {
        const sub = this.cart.reduce((s, i) => s + i.harga * i.qty, 0);
        const total = sub;
        document.getElementById('subtotal').textContent = `Rp ${this.fmt(sub)}`;
        document.getElementById('diskon').textContent = `Rp 0`;
        document.getElementById('total').textContent = `Rp ${this.fmt(total)}`;
        document.getElementById('checkoutBtn').disabled = !this.cart.length;

        const totalQty = this.cart.reduce((s, i) => s + i.qty, 0);
        const badge = document.getElementById('cartBadge');
        if (badge) { badge.textContent = totalQty; badge.style.display = totalQty > 0 ? 'flex' : 'none'; }

        const el = document.getElementById('cartItems');
        if (!this.cart.length) {
            el.innerHTML = `<div class="empty-cart"><i class="fas fa-shopping-basket"></i><h3>Keranjang Kosong</h3><p>Pilih produk untuk memulai transaksi</p></div>`;
            return;
        }
        el.innerHTML = this.cart.map(i => `
            <div class="cart-item">
                <div class="cart-item-icon"><i class="fas fa-${this.getIcon(i.kategori)}"></i></div>
                <div class="cart-item-info">
                    <h4>${i.nama}</h4>
                    <div class="cart-item-price">Rp ${this.fmt(i.harga)}</div>
                    <div class="qty-controls">
                        <button class="qty-btn" onclick="kasir.updateQty(${i.id},-1)">−</button>
                        <span>${i.qty}</span>
                        <button class="qty-btn" onclick="kasir.updateQty(${i.id},1)">+</button>
                    </div>
                    <div class="cart-item-subtotal">Subtotal: Rp ${this.fmt(i.harga * i.qty)}</div>
                    <button class="remove-item" onclick="kasir.removeFromCart(${i.id})"><i class="fas fa-trash-alt"></i> Hapus</button>
                </div>
            </div>
        `).join('');
    }

    getIcon(k) {
        const m = { 'Pod':'plug','Mod':'microchip','Liquid (Salt/PF)':'flask','Liquid (FB)':'wine-bottle','Cartridge':'capsules','Coil':'ring','Kapas':'cloud','Aksesoris':'wrench' };
        return m[k] || 'box';
    }

    clearCart() {
        if (confirm('Kosongkan semua keranjang?')) { this.cart = []; this.saveCart(); this.renderCart(); }
    }

    saveCart() { localStorage.setItem('vapeCart', JSON.stringify(this.cart)); }

    openPaymentModal() {
        if (!this.cart.length) { this.showNotif('Keranjang masih kosong', 'error'); return; }
        const total = this.getTotal();
        document.getElementById('modalTotal').textContent = `Rp ${this.fmt(total)}`;
        document.getElementById('jumlahBayar').value = total;
        // Reset ke metode tunai
        document.querySelector('input[name="payment"][value="tunai"]').checked = true;
        document.getElementById('bayarSection').style.display    = 'block';
        document.getElementById('qrisSection').style.display     = 'none';
        document.getElementById('transferSection').style.display = 'none';
        // Isi nominal untuk semua section
        document.getElementById('qrisAmount').textContent     = `Rp ${this.fmt(total)}`;
        document.getElementById('transferAmount').textContent = `Rp ${this.fmt(total)}`;
        document.getElementById('paymentModal').classList.add('active');
        document.getElementById('overlay').classList.add('active');
        this.calculateKembali();
    }

    closePaymentModal() {
        document.getElementById('paymentModal').classList.remove('active');
        if (!document.getElementById('cartSidebar').classList.contains('open')) {
            document.getElementById('overlay').classList.remove('active');
        }
    }

    calculateKembali() {
        const total = this.getTotal();
        const bayar = parseFloat(document.getElementById('jumlahBayar').value) || 0;
        const kmbl = bayar - total;
        const el = document.getElementById('kembali');
        if (kmbl < 0) {
            el.textContent = `Kurang: Rp ${this.fmt(Math.abs(kmbl))}`;
            el.style.cssText = 'margin-top:0.8rem;padding:0.85rem;background:rgba(224,92,92,0.1);border:1px solid rgba(224,92,92,0.3);border-radius:8px;font-size:1rem;font-weight:600;text-align:center;color:#e05c5c;';
        } else {
            el.textContent = `Kembalian: Rp ${this.fmt(kmbl)}`;
            el.style.cssText = 'margin-top:0.8rem;padding:0.85rem;background:rgba(61,214,140,0.08);border:1px solid rgba(61,214,140,0.2);border-radius:8px;font-size:1rem;font-weight:600;text-align:center;color:#3dd68c;';
        }
    }

    async processPayment() {
        const total = this.getTotal();
        const method = document.querySelector('input[name="payment"]:checked').value;
        if (method === 'tunai') {
            const bayar = parseFloat(document.getElementById('jumlahBayar').value) || 0;
            if (bayar < total) { this.showNotif('Jumlah bayar kurang!', 'error'); return; }
        }
        if (isDemoMode) {
            const no = 'TRX-' + Date.now();
            const cur = parseFloat(localStorage.getItem('demoSalesToday') || '0');
            localStorage.setItem('demoSalesToday', cur + total);
            this.logTransaction(no, [...this.cart], total, method);
            this.cart = []; this.saveCart(); this.renderCart();
            this.closePaymentModal();
            this.loadSalesToday(); this.loadProducts();
            this.showNotif(`Transaksi berhasil! No: ${no}`, 'success');
            if (document.getElementById('cartSidebar').classList.contains('open')) this.toggleCart();
            return;
        }
        try {
            const fd = new FormData();
            fd.append('cart', JSON.stringify(this.cart));
            fd.append('total', total);
            fd.append('payment_method', method);
            const r = await fetch('api/checkout.php', { method:'POST', body:fd });
            const res = await r.json();
            if (res.success) {
                this.logTransaction(res.nomor_transaksi, [...this.cart], total, method);
                this.printStruk(res.nomor_transaksi);
                this.cart = []; this.saveCart(); this.renderCart();
                this.closePaymentModal();
                this.loadSalesToday(); this.loadProducts();
                this.showNotif('Transaksi berhasil!', 'success');
                if (document.getElementById('cartSidebar').classList.contains('open')) this.toggleCart();
            } else { this.showNotif('Error: ' + res.message, 'error'); }
        } catch(e) { this.showNotif('Gagal memproses: ' + e.message, 'error'); }
    }

    printStruk(no) {
        const w = window.open('print-struk.php?no=' + no, '_blank');
        if (w) w.onload = () => setTimeout(() => w.print(), 500);
    }

    getTotal() { return this.cart.reduce((s, i) => s + i.harga * i.qty, 0); }

    fmt(n) { return new Intl.NumberFormat('id-ID').format(n); }

    showNotif(msg, type = 'info') {
        const el = document.createElement('div');
        const colors = { success:'rgba(61,214,140,0.12)', error:'rgba(224,92,92,0.12)', info:'rgba(201,169,110,0.12)' };
        const borders = { success:'rgba(61,214,140,0.4)', error:'rgba(224,92,92,0.4)', info:'rgba(201,169,110,0.4)' };
        const texts = { success:'#3dd68c', error:'#e05c5c', info:'#c9a96e' };
        el.style.cssText = `position:fixed;top:80px;right:20px;background:${colors[type]};border:1px solid ${borders[type]};color:${texts[type]};padding:0.85rem 1.2rem;border-radius:10px;font-weight:600;font-size:0.88rem;z-index:9999;box-shadow:0 8px 24px rgba(0,0,0,0.4);animation:slideInRight 0.25s ease;max-width:320px;backdrop-filter:blur(12px);`;
        el.textContent = msg;
        document.body.appendChild(el);
        setTimeout(() => { el.style.animation = 'slideOutRight 0.25s ease forwards'; setTimeout(() => el.remove(), 250); }, 3000);
    }

    // ===== MANAGEMENT SIDEBAR =====
    toggleMgmt() {
        const sidebar = document.getElementById('mgmtSidebar');
        const overlay = document.getElementById('mgmtOverlay');
        const isOpen = sidebar.classList.toggle('open');
        overlay.classList.toggle('active', isOpen);
        if (isOpen) {
            this.renderActivityLog();
            this.renderTopProducts();
            this.renderEditPrices();
        }
    }

    switchTab(tab) {
        document.querySelectorAll('.mgmt-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
        document.querySelectorAll('.tab-panel').forEach(p => p.classList.toggle('active', p.id === 'tab-' + tab));
    }

    // --- LOG AKTIVITAS ---
    logTransaction(no, items, total, method) {
        const logs = JSON.parse(localStorage.getItem('daggerSalesLog') || '[]');
        logs.unshift({
            no,
            time: new Date().toLocaleString('id-ID'),
            timestamp: Date.now(),
            items: items.map(i => ({ nama: i.nama, qty: i.qty, harga: i.harga, kategori: i.kategori })),
            total,
            method
        });
        // simpan max 100 transaksi
        if (logs.length > 100) logs.splice(100);
        localStorage.setItem('daggerSalesLog', JSON.stringify(logs));
    }

    renderActivityLog() {
        const logs = JSON.parse(localStorage.getItem('daggerSalesLog') || '[]');
        const el = document.getElementById('activityList');
        const count = document.getElementById('activityCount');
        count.textContent = `${logs.length} transaksi`;
        if (!logs.length) {
            el.innerHTML = '<div class="mgmt-empty"><i class="fas fa-history"></i><p>Belum ada transaksi</p></div>';
            return;
        }
        el.innerHTML = logs.map(log => `
            <div class="activity-card">
                <div class="activity-meta">
                    <span class="activity-no">${log.no}</span>
                    <span class="activity-time">${log.time}</span>
                </div>
                <div class="activity-total">Rp ${this.fmt(log.total)}</div>
                <span class="activity-method method-${log.method}">${log.method}</span>
                <div class="activity-items">
                    ${log.items.map(i => `<span>• ${i.qty}× ${i.nama} — Rp ${this.fmt(i.harga * i.qty)}</span>`).join('')}
                </div>
            </div>
        `).join('');
    }

    clearActivityLog() {
        if (!confirm('Hapus semua log transaksi?')) return;
        localStorage.removeItem('daggerLog');
        localStorage.removeItem('daggerSalesLog');
        localStorage.removeItem('demoSalesToday');
        this.renderActivityLog();
        this.loadSalesToday();
        this.showNotif('Log dibersihkan', 'success');
    }

    exportToExcel() {
        const logs = JSON.parse(localStorage.getItem('daggerSalesLog') || '[]');
        if (!logs.length) {
            this.showNotif('Tidak ada data transaksi untuk diexport', 'error');
            return;
        }

        // Generate HTML Table format untuk Excel agar sangat rapi (berwarna dan ada garis)
        let html = `
        <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
        <head>
        <meta charset="utf-8">
        <style>
            table { border-collapse: collapse; font-family: Arial, sans-serif; }
            th { background-color: #2a2010; color: #c9a96e; font-weight: bold; border: 1px solid #7a4f28; padding: 10px; }
            td { border: 1px solid #c09060; padding: 8px; vertical-align: top; }
            .num { text-align: right; }
            .center { text-align: center; }
        </style>
        </head>
        <body>
        <table>
            <tr>
                <th>No Transaksi</th>
                <th>Tanggal</th>
                <th>Hari</th>
                <th>Kategori</th>
                <th>Nama Produk</th>
                <th>Qty</th>
                <th>Harga Satuan</th>
                <th>Total Harga</th>
                <th>Metode</th>
            </tr>`;
        
        logs.forEach(l => {
            let dateObj;
            if (l.timestamp) dateObj = new Date(l.timestamp);
            else {
                // Fallback untuk data lama
                const parts = l.time.split(', ')[0].split('/');
                if (parts.length === 3) dateObj = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
                else dateObj = new Date();
            }

            const tanggal = dateObj.toLocaleDateString('id-ID');
            const hari = dateObj.toLocaleDateString('id-ID', { weekday: 'long' });
            const trxNo = l.no || '-';
            const method = l.method ? l.method.toUpperCase() : 'TUNAI';

            l.items.forEach((i, index) => {
                const isFirst = index === 0;
                const rowSpan = isFirst ? `rowspan="${l.items.length}"` : '';
                
                let kategori = i.kategori;
                if (!kategori || kategori === '-') {
                    const match = DEMO_PRODUCTS.find(p => p.nama_produk === i.nama);
                    kategori = match ? match.kategori : '-';
                }
                
                const produk = i.nama || '-';
                
                html += `<tr>`;
                if (isFirst) {
                    html += `<td ${rowSpan} class="center"><b>${trxNo}</b></td>`;
                    html += `<td ${rowSpan} class="center">${tanggal}</td>`;
                    html += `<td ${rowSpan} class="center">${hari}</td>`;
                }
                html += `<td>${kategori}</td>`;
                html += `<td>${produk}</td>`;
                html += `<td class="center">${i.qty}</td>`;
                html += `<td class="num">${i.harga}</td>`;
                html += `<td class="num">${i.qty * i.harga}</td>`;
                if (isFirst) {
                    html += `<td ${rowSpan} class="center"><b>${method}</b><br><i>(Total: ${l.total})</i></td>`;
                }
                html += `</tr>`;
            });
        });

        html += `</table></body></html>`;

        const blob = new Blob([html], { type: 'application/vnd.ms-excel' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", `Laporan_Penjualan_DaggerVape_${new Date().toISOString().split('T')[0]}.xls`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        this.showNotif('File Excel berhasil diunduh', 'success');
    }

    // --- TOP PRODUK ---
    renderTopProducts() {
        const logs = JSON.parse(localStorage.getItem('daggerSalesLog') || '[]');
        const el = document.getElementById('topList');
        if (!logs.length) {
            el.innerHTML = '<div class="mgmt-empty"><i class="fas fa-trophy"></i><p>Belum ada data penjualan</p></div>';
            return;
        }
        // Aggregate
        const agg = {};
        logs.forEach(log => {
            log.items.forEach(item => {
                if (!agg[item.nama]) agg[item.nama] = { nama: item.nama, brand: '', qty: 0, revenue: 0 };
                agg[item.nama].qty += item.qty;
                agg[item.nama].revenue += item.harga * item.qty;
            });
        });
        // Attach brand from DEMO_PRODUCTS
        DEMO_PRODUCTS.forEach(p => {
            if (agg[p.nama_produk]) agg[p.nama_produk].brand = p.brand;
        });
        const sorted = Object.values(agg).sort((a, b) => b.qty - a.qty).slice(0, 20);
        el.innerHTML = sorted.map((item, i) => {
            const rank = i + 1;
            const cls = rank === 1 ? 'rank-1' : rank === 2 ? 'rank-2' : rank === 3 ? 'rank-3' : 'rank-n';
            return `
                <div class="top-item">
                    <div class="top-rank ${cls}">${rank}</div>
                    <div class="top-info">
                        <div class="top-nama">${item.nama}</div>
                        <div class="top-brand">${item.brand}</div>
                    </div>
                    <div class="top-stats">
                        <div class="top-qty">${item.qty} pcs</div>
                        <div class="top-revenue">Rp ${this.fmt(item.revenue)}</div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // --- EDIT HARGA ---
    renderEditPrices(filter = '', kategori = '') {
        const edits = JSON.parse(localStorage.getItem('daggerPriceEdits') || '{}');
        const el = document.getElementById('priceList');
        let list = [...DEMO_PRODUCTS];
        if (kategori) list = list.filter(p => p.kategori === kategori);
        if (filter)   list = list.filter(p => p.nama_produk.toLowerCase().includes(filter) || p.brand.toLowerCase().includes(filter));
        if (!list.length) {
            el.innerHTML = '<div class="price-pick-hint"><i class="fas fa-search"></i><p>Tidak ada produk ditemukan</p></div>';
            return;
        }
        el.innerHTML = list.map(p => `
            <div class="price-item">
                <div class="price-info">
                    <div class="price-nama" title="${p.nama_produk}">${p.nama_produk}</div>
                    <div class="price-brand">${p.brand} · ${p.kategori}</div>
                </div>
                <div class="price-input-wrap">
                    <input type="number" class="price-input ${edits[p.id] !== undefined ? 'changed' : ''}" 
                        data-id="${p.id}" value="${p.harga}" step="1000"
                        oninput="this.classList.add('changed')">
                    <button class="btn-save-price" onclick="kasir.saveOnePrice(${p.id})">
                        <i class="fas fa-check"></i> Simpan
                    </button>
                </div>
            </div>
        `).join('');
    }

    filterPriceList() {
        const q = document.getElementById('priceSearch').value.toLowerCase();
        this.renderEditPrices(q, this.activePriceKat || '');
    }

    saveOnePrice(id) {
        const input = document.querySelector(`.price-input[data-id="${id}"]`);
        const newPrice = parseInt(input.value);
        if (!newPrice || newPrice < 0) { this.showNotif('Harga tidak valid', 'error'); return; }
        // Update in memory
        const p = DEMO_PRODUCTS.find(p => p.id === id);
        if (p) p.harga = newPrice;
        // Save to localStorage
        const edits = JSON.parse(localStorage.getItem('daggerPriceEdits') || '{}');
        edits[id] = newPrice;
        localStorage.setItem('daggerPriceEdits', JSON.stringify(edits));
        input.classList.add('changed');
        this.showNotif(`Harga diperbarui: Rp ${this.fmt(newPrice)}`, 'success');
        // Refresh product grid
        this.loadProducts();
    }

    resetAllPrices() {
        if (!confirm('Reset semua harga ke harga awal?')) return;
        localStorage.removeItem('daggerPriceEdits');
        // Reload page to restore original prices from source
        location.reload();
    }
}

function debounce(fn, wait) {
    let t;
    return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), wait); };
}

const kasir = new VapeKasir();