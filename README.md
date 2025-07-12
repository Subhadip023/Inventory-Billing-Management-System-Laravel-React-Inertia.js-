# 📦 Inventory & Billing Management System (v1)

**Tech Stack:** Laravel 11 · React (Inertia.js) · Tailwind CSS · MySQL

---

## 📝 Project Overview

This is a full-featured web application built with Laravel, React, and Inertia.js for managing **product inventory**, **customer billing**, and **sales reports**. It is designed to help small to medium-sized businesses efficiently manage their inventory, generate invoices, and analyze performance.

Version 1 focuses on delivering a complete and functional MVP with 5 core modules:
- Authentication
- Inventory CRUD
- Invoice/Billing
- Reports & Dashboard
- User Roles & Permissions


---


# 🚧 Project Status

🛠️ This project is **currently in development**.  
✅ Version 1 (core modules) is being built.  
📦 Expect new features and bug fixes in the coming weeks.
---


## 🚀 Features (v1)

### ✅ Authentication
- Secure login, register, and logout
- Role-based route protection
- Built with Laravel Breeze (Inertia + React)

### ✅ Inventory Management
- CRUD operations for products (name, SKU, unit, stock, price)
- Product listing with search and filters
- Pagination and validation

### ✅ Invoice/Billing Module
- Dynamic invoice creation with multiple products
- Auto calculations for subtotal, tax, discount, total
- PDF invoice generation
- Invoice list view with detail pages

### ✅ Reports & Dashboard
- Sales summary charts (weekly/monthly)
- Recent invoices, low-stock alerts
- Export reports to CSV/PDF

### ✅ User Roles & Permissions
- Admin: Full access
- Manager: Inventory & billing access
- Staff: Billing-only access
- Managed using Laravel Policies or Spatie Permissions

---

## 🧩 Tech Stack Details

- **Backend:** Laravel 11
- **Frontend:** React (via Inertia.js)
- **UI:** Tailwind CSS
- **Auth:** Laravel Breeze (Inertia preset)
- **Database:** MySQL
- **PDF/Reports:** Laravel DOMPDF, Laravel Excel

---

## 📁 Folder Structure (Example)

```bash
├── app
├── resources
│   └── js
│       ├── Pages
│       ├── Components
├── routes
│   └── web.php
├── database
│   └── migrations
├── public
├── tailwind.config.js
├── package.json
└── vite.config.js
