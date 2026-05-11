CREATE DATABASE vape_shop;
USE vape_shop;

CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nama_produk VARCHAR(100) NOT NULL,
    kategori ENUM('Vape Device', 'Liquid', 'Coil', 'Printilan') NOT NULL,
    harga DECIMAL(10,2) NOT NULL,
    stock INT DEFAULT 0,
    tanggal_beli DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE penjualan (
    id INT PRIMARY KEY AUTO_INCREMENT,
    produk_id INT,
    qty INT NOT NULL,
    harga_jual DECIMAL(10,2) NOT NULL,
    total_harga DECIMAL(10,2) NOT NULL,
    nomor_transaksi VARCHAR(20) NOT NULL,
    tanggal_transaksi TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (produk_id) REFERENCES products(id)
);

-- Sample Data
INSERT INTO products (nama_produk, kategori, harga, stock, tanggal_beli) VALUES
('Vaporesso XROS 3', 'Vape Device', 450000.00, 15, '2024-01-15'),
('GeekVape Aegis Solo 2', 'Vape Device', 850000.00, 8, '2024-01-20'),
('Juul Pod Mango 3%', 'Liquid', 75000.00, 50, '2024-01-22'),
('Nasty Juice Trap Queen', 'Liquid', 120000.00, 25, '2024-01-18'),
('GeekVape Z Series Coil 0.2ohm', 'Coil', 45000.00, 30, '2024-01-19'),
('Vaporesso GTX Coil 0.3ohm', 'Coil', 55000.00, 20, '2024-01-21'),
('Cotton Kandu Premium 100g', 'Printilan', 25000.00, 100, '2024-01-22'),
('Drip Tip Resin Colorful', 'Printilan', 35000.00, 45, '2024-01-16');