# 📚 **Entelequia Comic-Book Store** 🦸‍♂️💥

![Entelequia Demo](image-1.png)

---

## 📖 **Introduction**

**Entelequia Comic-Book Store** is an **e-commerce platform** designed for comic, manga, and geek culture enthusiasts 🤓. Inspired by a family business with years of history, this web application allows users to explore, select, and purchase comics and manga while offering exclusive content about their favorite characters and series.

The platform is developed using the **MERN stack** (MongoDB, Express, React, Node.js) and provides a smooth, intuitive user experience.

---

## 💡 **Key Features**

### 🛒 **User Features**

- 🔍 **Browse** comics and manga by categories and subcategories.
- 🛒 **Add, update, and remove** products in the shopping cart.
- 💳 **Securely purchase** products via integrated payment gateways.
- 👤 **Manage account details** (name, address, etc.).
- 📝 **Leave reviews** on purchased products.(V.02)
- ⭐ **Mark favorites** to quickly access preferred comics.(V.02)
- 📜 **View purchase history** and track orders.

### 🛠️ **Admin Features**

- 🗂️ **Manage products**: Add, edit, and delete comic and manga listings.(V.02)
- 📈 **Manage orders**: Update the status of customer orders.(V.02)
- 📢 **Handle user feedback**: Review and respond to customer comments.(V.02)

---

## 🎨 **UX/UI Design**

The interface was designed with **Figma** to ensure a responsive and intuitive experience on both desktop and mobile devices.

🔗 [**Figma Wireframe**](https://www.figma.com/design/n9w5SAKtC9lT4FHbCasC9c/Project-E-commerce?node-id=0-1&t=m6Cd2jkL9vMvlILw-1)

![Entelequia Demo](pageDemo.gif)

---

## ⚙️ **Technical Overview**

### 📂 **Project Structure**

- **Frontend**: React and Tailwind CSS for a modern, responsive UI.
- **Backend**: Node.js with Express for a robust REST API.
- **Database**: MongoDB to manage users, products, and orders.

### 📦 **Key Packages**

- **Authentication**: JWT and bcrypt for secure user management.
- **State Management**: Context API (`ShopContext`) for managing global state (products, cart, etc.).
- **Testing**: Mocha and Chai for unit and API testing.
- **Notifications**: React Toastify for instant user feedback.

### 🗃️ Data Model

### User
- id(uuid)
- name(string)
- email(string)
- username (string)
- password (string)
- role (string, enum: user , moderator)
- street (string)
- city (string)
- country (string)
- postalCode (string)
- phone(string)

### Product
- id (uuid)
- title (string)
- author (string)
- publisher (string)
- isbn (string)
- price (number)
- description (string)
- category (string)
- status (string , enum: published | draft | deactivated)
- stock(number)
- image (string)
- images([string])
- bestSeller (boolean)
- reviews([Review])
- created at (Date) 
- modified at (Date,optional) 

### Review
- id (uuid)
- user (User.id)
- rating (number)
- comment (string)
- date(date)

### CartItem
- id (uuid)
- product(Product.id)
- quantity(number)

### Cart
- id(uuid)
- user (User.id)
- items ([CartItem])
- totalPrice (number)

### OrderItem
- id (uuid)
- product(Product)
- quantity(number)

### Order
- id (uuid)
- user (User.id)
- items ([OrderItem])
- totalPrice (number)
- created at (Date) 
- modified at (Date,optional) 
- status (string, enum:pending | confirmed | refund | cancel)


### 🚀 Technologies Used

- Frontend: React,JavaScript,Tailwind CSS,React Router,React Toastify

- Backend: Node.js, Express,Mongoose, JWT,Bcrypt,Bcrypt

- Database: MongoDB

- Testing: Mocha & Chai 


### 📊 Test Coverage
The project includes unit and API tests to ensure stability and functionality of key backend features, such as:
- Shopping Cart
- User Authentication
- Order Management
- Payment Processing

```sh
----------------------------|---------|----------|---------|---------|--------------------------------
File                        | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line 
----------------------------|---------|----------|---------|---------|--------------------------------
All files                   |    95.1 |    82.89 |   91.11 |   95.13 | 
 config                     |   83.33 |       50 |     100 |   83.33 | 
  stripe.js                 |   83.33 |       50 |     100 |   83.33 | 5
 helpers                    |     100 |       50 |     100 |     100 | 
  stripePayment.js          |     100 |       50 |     100 |     100 | 20
 logic/cart                 |   84.93 |    81.81 |   85.71 |   84.05 | 
  getCart.js                |   94.44 |     87.5 |      75 |   93.75 | 20
  updateCart.js             |   81.81 |    78.57 |     100 |   81.13 | 16,25,30-33,41,51,61,69,79,101
 logic/cart/test            |     100 |      100 |     100 |     100 | 
  getCart.spec.js           |     100 |      100 |     100 |     100 | 
  updateCart.spec.js        |     100 |      100 |     100 |     100 | 
 logic/orders               |   91.37 |       85 |   78.26 |   90.74 | 
  getOrders.js              |   96.42 |       75 |   85.71 |   96.29 | 11
  placeOrder.js             |   84.21 |      100 |   76.92 |   82.35 | 30,50,57
  updateOrder.js            |    90.9 |      100 |   66.66 |      90 | 16
 logic/orders/test          |     100 |      100 |     100 |     100 | 
  getOrders.spec.js         |     100 |      100 |     100 |     100 | 
  placeOrder.spec.js        |     100 |      100 |     100 |     100 | 
  updateOrder.spec.js       |     100 |      100 |     100 |     100 | 
 logic/payments             |      84 |       90 |    62.5 |    82.6 | 
  processPayment.js         |      84 |       90 |    62.5 |    82.6 | 14,19,36,44
 logic/payments             |      84 |       90 |    62.5 |    82.6 | 
  processPayment.js         |      84 |       90 |    62.5 |    82.6 | 14,19,36,44
 logic/payments/test        |     100 |      100 |     100 |     100 | 
  processPayment.spec.js    |     100 |      100 |     100 |     100 | 
  processPayment.js         |      84 |       90 |    62.5 |    82.6 | 14,19,36,44
 logic/payments/test        |     100 |      100 |     100 |     100 | 
  processPayment.spec.js    |     100 |      100 |     100 |     100 | 
 logic/products             |   88.88 |     87.5 |      80 |   88.88 | 
 logic/payments/test        |     100 |      100 |     100 |     100 | 
  processPayment.spec.js    |     100 |      100 |     100 |     100 | 
 logic/products             |   88.88 |     87.5 |      80 |   88.88 | 
  getProducts.js            |   88.88 |     87.5 |      80 |   88.88 | 10,13
  processPayment.spec.js    |     100 |      100 |     100 |     100 | 
 logic/products             |   88.88 |     87.5 |      80 |   88.88 | 
  getProducts.js            |   88.88 |     87.5 |      80 |   88.88 | 10,13
 logic/products/test        |     100 |      100 |     100 |     100 | 
 logic/products             |   88.88 |     87.5 |      80 |   88.88 | 
  getProducts.js            |   88.88 |     87.5 |      80 |   88.88 | 10,13
 logic/products/test        |     100 |      100 |     100 |     100 | 
  getProducts.spec.js       |     100 |      100 |     100 |     100 | 
  getProducts.js            |   88.88 |     87.5 |      80 |   88.88 | 10,13
 logic/products/test        |     100 |      100 |     100 |     100 | 
  getProducts.spec.js       |     100 |      100 |     100 |     100 | 
 logic/users                |   88.23 |    83.33 |   81.81 |    88.6 | 
 logic/products/test        |     100 |      100 |     100 |     100 | 
  getProducts.spec.js       |     100 |      100 |     100 |     100 | 
 logic/users                |   88.23 |    83.33 |   81.81 |    88.6 | 
  getProducts.spec.js       |     100 |      100 |     100 |     100 | 
 logic/users                |   88.23 |    83.33 |   81.81 |    88.6 | 
  authenticateUser.js       |   85.71 |       75 |     100 |   89.47 | 17,27
  getUserProfile.js         |   95.23 |      100 |     100 |   94.73 | 17
 logic/users                |   88.23 |    83.33 |   81.81 |    88.6 | 
  authenticateUser.js       |   85.71 |       75 |     100 |   89.47 | 17,27
  getUserProfile.js         |   95.23 |      100 |     100 |   94.73 | 17
  registerUser.js           |      90 |       50 |     100 |   89.47 | 20,29
  authenticateUser.js       |   85.71 |       75 |     100 |   89.47 | 17,27
  getUserProfile.js         |   95.23 |      100 |     100 |   94.73 | 17
  registerUser.js           |      90 |       50 |     100 |   89.47 | 20,29
  getUserProfile.js         |   95.23 |      100 |     100 |   94.73 | 17
  registerUser.js           |      90 |       50 |     100 |   89.47 | 20,29
  updateUserProfile.js      |    82.6 |      100 |      60 |   81.81 | 16-17,31-32
  registerUser.js           |      90 |       50 |     100 |   89.47 | 20,29
  updateUserProfile.js      |    82.6 |      100 |      60 |   81.81 | 16-17,31-32
 logic/users/test           |     100 |      100 |     100 |     100 | 
  updateUserProfile.js      |    82.6 |      100 |      60 |   81.81 | 16-17,31-32
 logic/users/test           |     100 |      100 |     100 |     100 | 
  authenticateUser.spec.js  |     100 |      100 |     100 |     100 | 
 logic/users/test           |     100 |      100 |     100 |     100 | 
  authenticateUser.spec.js  |     100 |      100 |     100 |     100 | 
  getUserProfile.spec.js    |     100 |      100 |     100 |     100 | 
  authenticateUser.spec.js  |     100 |      100 |     100 |     100 | 
  getUserProfile.spec.js    |     100 |      100 |     100 |     100 | 
  registerUser.spec.js      |     100 |      100 |     100 |     100 | 
  getUserProfile.spec.js    |     100 |      100 |     100 |     100 | 
  registerUser.spec.js      |     100 |      100 |     100 |     100 | 
  updateUserProfile.spec.js |     100 |      100 |     100 |     100 | 
----------------------------|---------|----------|---------|---------|--------------------------------
  registerUser.spec.js      |     100 |      100 |     100 |     100 | 
  updateUserProfile.spec.js |     100 |      100 |     100 |     100 | 
----------------------------|---------|----------|---------|---------|--------------------------------
  updateUserProfile.spec.js |     100 |      100 |     100 |     100 | 
----------------------------|---------|----------|---------|---------|--------------------------------
```


                       



                                     
