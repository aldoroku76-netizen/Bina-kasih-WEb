class VapeKasir {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem('vapeCart')) || [];
        this.init();
    }

    init() {
        this.bindEvents();
        this.updateClock();
        this.loadSalesToday();
        this.loadProducts();
        this.renderCart();
        setInterval(() => this.updateClock(), 1000);
    }

    bindEvents() {
        // Search & Filter
        document.getElementById('searchInput').addEventListener('input', debounce(this.loadProducts.bind(this), 300));
        document.getElementById('kategoriFilter').addEventListener('change', this.loadProducts.bind(this));
        document.getElementById('refreshBtn').addEventListener('click', this.loadProducts.bind(this));

        // Cart
        document.getElementById('cartSidebar').addEventListener('click', (e) => {
            if (e.target.id === 'closeCart') this.toggleCart();
        });

        // Checkout
        document.getElementById('checkoutBtn').addEventListener('click', () => this.openPaymentModal());
        document.getElementById('clearCart').addEventListener('click', () => this.clearCart());

        // Modal
        document.getElementById('overlay').addEventListener('click', () => this.closePaymentModal());
        document.getElementById('closeModal').addEventListener('click', () => this.closePaymentModal());
        document.getElementById('cancelPayment').addEventListener('click', () => this.closePaymentModal());
        document.getElementById('confirmPayment').addEventListener('click', () => this.processPayment());

        // Payment method change
        document.querySelectorAll('input[name="payment"]').forEach(radio => {
            radio.addEventListener('change', (e) => {
                const bayarSection = document.getElementById('bayarSection');
                if (e.target.value === 'tunai') {
                    bayarSection.style.display = 'block';
                } else {
                    bayarSection.style.display = 'none';
                }
            });
        });

        // Bayar amount
        document.getElementById('jumlahBayar').addEventListener('input', (e) => {
            this.calculateKembali();
        });
    }

    updateClock() {
        const now = new Date();
        document.getElementById('jam').textContent = now.toLocaleTimeString('id-ID');
        document.getElementById('tanggal').textContent = now.toLocaleDateString('id-ID', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    async loadSalesToday() {
        try {
            const response = await fetch('api/sales-today.php');
            const data = await response.json();
            document.getElementById('salesToday').textContent = `Rp ${this.formatRupiah(data.total || 0)}`;
        } catch (error) {
            console.error('Error loading sales:', error);
        }
    }

    async loadProducts() {
        const search = document.getElementById('searchInput').value;
        const kategori = document.getElementById('kategoriFilter').value;
        
        const params = new URLSearchParams();
        if (search) params.append('search', search);
        if (kategori) params.append('kategori', kategori);

        try {
            document.getElementById('productsGrid').innerHTML = '<div class="loading">Loading produk...</div>';
            
            const response = await fetch(`api/products.php?${params}`);
            const products = await response.json();
            
            this.renderProducts(products);
        } catch (error) {
            document.getElementById('productsGrid').innerHTML = 
                '<div class="loading" style="color: #ff6b6b;">Error loading products!</div>';
        }
    }

    renderProducts(products) {
        const grid = document.getElementById('productsGrid');
        if (products.length === 0) {
            grid.innerHTML = '<div class="loading">Tidak ada produk ditemukan</div>';
            return;
        }

        grid.innerHTML = products.map(product => `
            <div class="product-card ${product.stock < 5 ? 'low-stock' : ''}" data-id="${product.id}">
                <div class="product-header">
                    <div class="kategori-badge kategori-${product.kategori.replace(/ /g, '\\ ')}">
                        ${product.kategori}
                    </div>
                </div>
                <div class="product-nama">${product.nama_produk}</div>
                <div class="product-harga">Rp ${this.formatRupiah(product.harga)}</div>
                <div class="product-stock">
                    <i class="fas ${product.stock < 5 ? 'fa-exclamation-triangle' : 'fa-box'}"></i>
                    <span class="${product.stock < 5 ? 'stock-low' : 'stock-ok'}">
                        Stock: ${product.stock}
                    </span>
                </div>
                <button class="btn-add" ${product.stock === 0 ? 'disabled' : ''} 
                        onclick="kasir.addToCart(${product.id}, '${product.nama_produk}', ${product.harga}, '${product.kategori}')">
                    ${product.stock === 0 ? '<i class="fas fa-ban"></i> Habis' : '<i class="fas fa-plus"></i> Tambah'}
                </button>
            </div>
        `).join('');
    }

    addToCart(id, nama, harga, kategori) {
        const existing = this.cart.find(item => item.id === id);
        if (existing) {
            existing.qty += 1;
        } else {
            this.cart.push({ id, nama, harga, kategori, qty: 1 });
        }
        this.saveCart();
        this.renderCart();
        this.showNotification(`${nama} ditambahkan ke keranjang!`);
    }

    removeFromCart(id) {
        this.cart = this.cart.filter(item => item.id !== id);
        this.saveCart();
        this.renderCart();
    }

    updateQty(id, delta) {
        const item = this.cart.find(item => item.id === id);
        if (item) {
            item.qty = Math.max(1, item.qty + delta);
            this.saveCart();
            this.renderCart();
        }
    }

    toggleCart() {
        document.getElementById('cartSidebar').classList.toggle('open');
        document.getElementById('overlay').classList.toggle('active');
    }

    renderCart() {
        const cartItems = document.getElementById('cartItems');
        const subtotal = this.cart.reduce((sum, item) => sum + (item.harga * item.qty), 0);
        const diskon = 0; // Bisa diubah untuk promo
        const total = subtotal - diskon;

        document.getElementById('subtotal').textContent = `Rp ${this.formatRupiah(subtotal)}`;
        document.getElementById('diskon').textContent = `Rp ${this.formatRupiah(diskon)}`;
        document.getElementById('total').textContent = `Rp ${this.formatRupiah(total)}`;
        document.getElementById('checkoutBtn').disabled = this.cart.length === 0;

        if (this.cart.length === 0) {
            cartItems.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-cart"></i>
                    <h3>Keranjang Kosong</h3>
                    <p>Pilih produk untuk ditambahkan ke keranjang</p>
                </div>
            `;
            return;
        }

        cartItems.innerHTML = this.cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-icon">
                    <i class="fas fa-${this.getIcon(item.kategori)}"></i>
                </div>
                <div class="cart-item-info">
                    <h4>${item.nama}</h4>
                    <div class="cart-item-price">Rp ${this.formatRupiah(item.harga)}</div>
                    <div class="qty-controls">
                        <button class="qty-btn" onclick="kasir.updateQty(${item.id}, -1)">-</button>
                        <span>${item.qty}</span>
                        <button class="qty-btn" onclick="kasir.updateQty(${item.id}, 1)">+</button>
                    </div>
                    <button class="remove-item" onclick="kasir.removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i> Hapus
                    </button>
                </div>
            </div>
        `).join('');
    }

    getIcon(kategori) {
        const icons = {
            'Vape Device': 'smoking',
            'Liquid': 'tint',
            'Coil': 'cogs',
            'Printilan': 'tools'
        };
        return icons[kategori] || 'box';
    }

    clearCart() {
        if (confirm('Yakin ingin mengosongkan keranjang?')) {
            this.cart = [];
            this.saveCart();
            this.renderCart();
        }
    }

    saveCart() {
        localStorage.setItem('vapeCart', JSON.stringify(this.cart));
    }

    openPaymentModal() {
        const total = this.getTotal();
        document.getElementById('modalTotal').textContent = `Rp ${this.formatRupiah(total)}`;
        document.getElementById('jumlahBayar').value = total;
        document.getElementById('paymentModal').classList.add('active');
        document.getElementById('overlay').classList.add('active');
        this.calculateKembali();
    }

    closePaymentModal() {
        document.getElementById('paymentModal').classList.remove('active');
        document.getElementById('overlay').classList.remove('active');
        document.getElementById('bayarSection').style.display = 'none';
    }

    calculateKembali() {
        const total = this.getTotal();
        const bayar = parseFloat(document.getElementById('jumlahBayar').value) || 0;
        const kembali = bayar - total;
        document.getElementById('kembali').textContent = `Kembali: ${kembali < 0 ? 'Rp 0' : `Rp ${this.formatRupiah(kembali)}`}`;
    }

    async processPayment() {
        const total = this.getTotal();
        const bayar = parseFloat(document.getElementById('jumlahBayar').value) || 0;
        const paymentMethod = document.querySelector('input[name="payment"]:checked').value;

        if (bayar < total) {
            alert('Jumlah bayar kurang!');
            return;
        }

        try {
            const formData = new FormData();
            formData.append('cart', JSON.stringify(this.cart));
            formData.append('total', total);
            formData.append('payment_method', paymentMethod);

            const response = await fetch('api/checkout.php', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();

            if (result.success) {
                this.printStruk(result.nomor_transaksi);
                this.cart = [];
                this.saveCart();
                this.renderCart();
                this.closePaymentModal();
                this.loadSalesToday();
                this.loadProducts();
                this.showNotification('Transaksi berhasil! Struk sedang dicetak...', 'success');
            } else {
                alert('Error: ' + result.message);
            }
        } catch (error) {
            alert('Error processing payment: ' + error.message);
        }
    }

    printStruk(nomorTransaksi) {
        const printWindow = window.open('print-struk.php?no=' + nomorTransaksi, '_blank');
        printWindow.onload = () => {
            setTimeout(() => {
                printWindow.print();
            }, 500);
        };
    }

    getTotal() {
        return this.cart.reduce((sum, item) => sum + (item.harga * item.qty), 0);
    }

    formatRupiah(angka) {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(angka).replace('Rp', 'Rp ');
    }

    showNotification(message, type = 'info') {
        // Simple notification - bisa diupgrade dengan toast
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#00ff88' : '#ff6b6b'};
            color: #000;
            padding: 1rem 2rem;
            border-radius: 10px;
            font-weight: 600;
            z-index: 5000;
            animation: slideInRight 0.3s ease;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
}

// Utility function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Global instance
const kasir = new VapeKasir();