# ⚙️ Midnight Cravings — Backend

The backend of **Midnight Cravings** is a robust Node.js and Express server that handles data persistence, authentication, and business logic for the marketplace.

## 🔥 Core Capabilities
- **RESTful API**: Clean and documented endpoints for all resources.
- **Authentication**: JWT-based secure auth with role-based access control.
- **Database**: MongoDB integration via Mongoose for high flexibility.
- **File Handling**: Support for product image uploads using Multer.
- **Order Management**: Complex logic for handling multi-vendor orders and status updates.

## 🛠️ Technology Stack
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **ORM**: Mongoose
- **Auth**: JSON Web Tokens (JWT) & Bcrypt
- **CORS**: Cross-Origin Resource Sharing

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Create a `.env` file in the `backend/` directory:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
```

### 3. Seed Database (Optional)
To populate the database with initial sample data:
```bash
node seeder.js
```

### 4. Start Server
```bash
npm run dev
```

## 📡 API Endpoints (Brief)
- `/api/auth`: Login, Register, Profile.
- `/api/products`: CRUD for products, search, and details.
- `/api/orders`: Order placement, history, and status updates.
- `/api/seller`: Seller-specific management routes.
- `/api/admin`: Administrative controls and moderation.

---
*Maintained with ❤️ by the Midnight Cravings Team.*
