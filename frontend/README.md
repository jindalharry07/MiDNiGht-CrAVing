# 🎨 Midnight Cravings — Frontend

The frontend of **Midnight Cravings** is a modern, responsive single-page application (SPA) built with React and Vite, styled using Tailwind CSS.

## ✨ Key Features
- **Responsive Design**: Optimized for mobile, tablet, and desktop.
- **Dynamic Routing**: Smooth transitions between pages using React Router.
- **Role-Based Views**: Specialized interfaces for Customers, Sellers, and Admins.
- **State Management**: Context API for authentication and global settings.
- **Optimistic UI**: Fast-responding interface for interactions like liking and cart updates.

## 🛠️ Technology Stack
- **Framework**: React.js (Vite)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **API Client**: Axios
- **Routing**: React Router DOM

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Create a `.env` file in the `frontend/` directory:
```env
VITE_API_URL=http://localhost:5000/api
```

### 3. Build Styling
If you've modified Tailwind configurations or global CSS:
```bash
npm run build:css
```

### 4. Run Development Server
```bash
npm run dev
```

## 📂 Structure
- `/src/components`: Generic and reusable UI components.
- `/src/pages`: Main view components (Home, Product, Cart, Admin, etc.).
- `/src/context`: React Context providers for state management.
- `/src/services`: API utility functions for backend communication.

---
*Maintained with ❤️ by the Midnight Cravings Team.*
