# ⚙️ API Gateway BFF 🚀

A production-style **Backend-for-Frontend (BFF) API Gateway** built with Express.js to handle request routing, header transformation, and CORS-safe communication with external APIs.

---

## 🧠 Overview

This project implements a **BFF (Backend-for-Frontend)** layer acting as a **reverse proxy gateway**.

Instead of calling external APIs directly (blocked by browsers), the frontend communicates with this gateway.

---

## 🏗️ Architecture

```
Client (React App)
        ↓
API Gateway (Express BFF)
        ↓
External APIs (Swiggy)
```

---

## ✨ Features

- 🔁 Reverse Proxy Gateway
- 🌐 CORS Handling
- 🕵️ Header Transformation
- 🔀 Dynamic Routing (no need to define endpoints manually)
- ⚡ BFF Pattern
- 🧩 Multi-Endpoint Support

---

## 📦 Tech Stack

- Node.js
- Express.js
- http-proxy-middleware
- CORS

---

## ⚙️ Getting Started

### 1️⃣ Clone Repository

```bash
git clone https://github.com/sharadindudas/api-gateway-bff.git
cd api-gateway-bff
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Run Server

```bash
npm start
```

or (for development)

```bash
npm run dev
```

---

### 4️⃣ Server URL

```bash
http://localhost:3001
```

---

## 🔌 API Base Endpoint

```bash
http://localhost:3001/api/proxy/swiggy
```

---

# 📘 Usage Examples

## 📍 1. Fetch Restaurants List

### Frontend Example

```js
const fetchRestaurants = async () => {
  const lat = 22.518;
  const lng = 88.3832;

  const res = await fetch(
    `http://localhost:3001/api/proxy/swiggy/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
  );

  const data = await res.json();
  console.log(data);
};
```

---

## 🍽️ 2. Fetch Restaurant Menu

```js
const fetchMenu = async (resId) => {
  const lat = 22.518;
  const lng = 88.3832;

  const res = await fetch(
    `http://localhost:3001/api/proxy/swiggy/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${resId}`
  );

  const data = await res.json();
  console.log(data);
};
```

---

## 🔄 3. Dynamic Routing

You can call **any Swiggy API endpoint** through this gateway:

```bash
/api/proxy/swiggy/<ANY_PATH>
```

### Examples:

```bash
/api/proxy/swiggy/dapi/restaurants/list/v5
/api/proxy/swiggy/mapi/menu/pl
/api/proxy/swiggy/dapi/restaurants/search
```

---

## 🧪 4. cURL Testing

```bash
curl "http://localhost:3001/api/proxy/swiggy/dapi/restaurants/list/v5?lat=22.518&lng=88.3832"
```

---

## ⚙️ Frontend Environment Setup

Create a `.env` file in your frontend project:

```env
VITE_BASE_URL=http://localhost:3001/
```

---

## 🛡️ Why Use This BFF?

### ❌ Direct API Call (Fails)

```js
fetch("https://www.swiggy.com/dapi/restaurants/list/v5");
// Blocked by CORS
```

### ✅ Using BFF (Works)

```js
fetch("http://localhost:3001/api/proxy/swiggy/dapi/restaurants/list/v5");
// Success
```

---

## 🔧 How It Works

1. Frontend sends request to BFF
2. Express intercepts request
3. Path is rewritten
4. Headers are modified
5. Request forwarded to Swiggy
6. Response returned with CORS headers

---

## 📂 Example Proxy Config

```js
app.use(
  "/api/proxy/swiggy",
  createProxyMiddleware({
    target: "https://www.swiggy.com",
    changeOrigin: true,
    pathRewrite: {
      "^/api/proxy/swiggy": ""
    },
    onProxyReq: (proxyReq) => {
      proxyReq.setHeader("User-Agent", "Mozilla/5.0");
      proxyReq.setHeader("Referer", "https://www.swiggy.com/");
      proxyReq.setHeader("Origin", "https://www.swiggy.com");
    }
  })
);
```

---

## 💡 Real-World Use Cases

- API Gateway Architecture
- Backend-for-Frontend (BFF)
- Microservices Routing
- Third-party API Integration
- CORS-safe communication

---

## 🚀 Future Improvements

- 🔥 Rate Limiting
- 🔥 Caching (Redis)
- 🔥 Request Logging (Morgan/Winston)
- 🔥 Authentication Layer (JWT)
- 🔥 Multi-API Gateway Support

---

## 🧑‍💻 Author

**Sharadindu Das**
