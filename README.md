# she-dashboard

demo: https://shedashboard.netlify.app/

---

## 📌 Overview
This project is a simple **Products Dashboard** built with **Angular** that allows managing products using full CRUD operations (Create, Read, Update, Delete). The application uses **MockAPI** as a backend and communicates with it using Angular `HttpClient`.

---

## ✨ Features
- Fetch and display products list
- Add new products
- Edit existing products
- Delete products
- Reusable service for API communication
- Smooth scroll to form when editing a product

---

## 🧩 Components

### DashboardComponent
Responsible for handling:
- Products display
- Product form (Add / Edit)
- Admin interactions
- Calling API methods through the service

#### Properties
- `results: any[]` → Stores all products
- `productName: string`
- `productPrice: number`
- `productStock: number`
- `coverImg: string`
- `editingProductId: any` → Used to detect edit mode

#### Lifecycle Hook
- `ngOnInit()` → Loads products on component initialization

---

## ⚙️ Methods (DashboardComponent)

### `loadProducts()`
Fetches all products from the API and assigns them to `results`.

### `loadProductToForm(product)`
- Loads selected product data into the form  
- Enables edit mode  
- Scrolls smoothly to the form section

### `addProduct()`
- Adds a new product if `editingProductId` is `null`  
- Updates an existing product if `editingProductId` exists  
- Clears the form and refreshes the product list

### `deleteProduct(id)`
Deletes a product by its ID and updates the UI instantly.

### `clearForm()`
Resets all form fields and exits edit mode.

---

## 🧠 Services

### ProductsDataService
Handles all HTTP requests related to products.

#### Methods
- `getProducts()` → GET all products
- `addProduct(product)` → POST new product
- `updateProduct(id, product)` → PUT update product
- `deleteProduct(id)` → DELETE product

---

## 🌐 API Used
**MockAPI Endpoint:** `https://6953df0aa319a928023cf23c.mockapi.io/she/products`
