# 🌙 Midnight Cravings

**Midnight Cravings** is a premium, full-stack multi-vendor e-commerce marketplace designed for late-night food and product delivery. Built with the **MERN stack** (MongoDB, Express, React, Node.js), it offers a seamless experience for customers, sellers, and administrators.

---

## 🚀 Features

### 👤 For Customers
- **Elegant UI/UX**: Modern, responsive design built with Tailwind CSS.
- **Product Discovery**: Browse by categories, search, and view detailed product information.
- **Shopping Cart**: Dynamic cart management with real-time updates.
- **Order Tracking**: Comprehensive order history and status tracking.
- **Reviews & Ratings**: Share feedback and rate sellers/products.
- **Secure Profiles**: Manage personal information and order preferences.

### 🏪 For Sellers
- **Seller Dashboard**: Real-time analytics and product management.
- **Product Requests**: Submit new products for admin approval.
- **Order Management**: Handle incoming orders and update fulfillment status.
- **Customer Feedback**: Monitor and respond to seller reviews.

### 🛡️ For Administrators
- **Centralized Command**: Full control over users, sellers, and products.
- **Moderation**: Approve or reject seller product requests and monitor reviews.
- **Global Insights**: Overview of all platform activities, orders, and registrations.

---

## 🛠️ Tech Stack

### Frontend
- **React.js (Vite)**: For a lightning-fast development experience.
- **Tailwind CSS**: For custom, modern styling.
- **React Router 6**: For declarative routing and protected paths.
- **Axios**: For robust API communication.
- **Lucide React**: For beautiful, consistent iconography.

### Backend
- **Node.js & Express**: Scalable and fast server-side logic.
- **MongoDB & Mongoose**: Flexible NoSQL database with schema modeling.
- **JWT (JSON Web Tokens)**: Secure, stateless authentication.
- **Multer**: Handling multi-part form data and image uploads.
- **CORS**: Secure cross-origin resource sharing.

---

## 📂 Project Structure

```text
midnight-cravings/
├── frontend/             # React application (Vite)
│   ├── src/
│   │   ├── components/   # Reusable UI elements
│   │   ├── pages/        # Route-level components
│   │   ├── context/      # Global state management
│   │   └── services/     # API integration logic
├── backend/              # Node.js Express server
│   ├── models/           # Mongoose schemas
│   ├── routes/           # API endpoints
│   ├── middleware/       # Auth and error handlers
│   ├── config/           # Database & environment config
│   └── uploads/          # Static assets (product images)
```

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v16+)
- MongoDB (Local or Atlas)
- NPM or Yarn

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add your credentials:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file:
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

---

## 🔐 Security Features
- **JWT Authentication**: Secure login and session management.
- **Password Hashing**: Bcrypt used for secure credential storage.
- **Role-Based Access (RBAC)**: Middleware-enforced permissions for Admin, Seller, and User.

---

## 📄 License
This project is for educational and portfolio purposes.

---

*Created with ❤️ for the Midnight Cravings community.*