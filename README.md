# 🚀 Swiggy Reverse Proxy

> A production-style **Reverse Proxy API Gateway** built with Express.js to securely interact with Swiggy APIs by handling CORS, header transformation, and request forwarding.

---

## 🧠 What is this?

This project implements a **Backend-for-Frontend (BFF)** layer that acts as a **reverse proxy** between your frontend and Swiggy’s private APIs.

Instead of making direct requests (which are blocked by browsers), your frontend communicates with this proxy server, which:

- Transparently forwards requests to Swiggy
- Mimics real browser behavior
- Handles CORS restrictions
- Returns clean, usable responses

---

## 🏗️ Architecture

```
Client (React / Vite)
        ↓
Reverse Proxy (Express.js)
        ↓
Swiggy APIs (External Service)
```

---

## ✨ Key Features

- 🔁 **Reverse Proxy Layer** — abstracts Swiggy APIs from frontend
- 🌐 **CORS Handling** — eliminates browser restrictions
- 🕵️ **Header Spoofing** — mimics real browser requests
- 🔀 **Dynamic Path Rewriting** — clean and scalable routing
- ⚡ **API Gateway Pattern** — centralized request handling
- 🧩 **Multi-endpoint Support** — works with `/mapi`, `/dapi`, etc.

---

## 📦 Tech Stack

- **Node.js**
- **Express.js**
- **http-proxy-middleware**
- **CORS**

---

## ⚙️ Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/swiggy-reverse-proxy.git
cd swiggy-reverse-proxy
```

---

### 2️⃣ Install dependencies

```bash
npm install
```

---

### 3️⃣ Start the server

```bash
npm start
```

or for development:

```bash
npm run dev
```

---

### 4️⃣ Server will run at

```
http://localhost:3001
```

---

## 🔌 API Usage

### Base Endpoint

```
http://localhost:3001/api/proxy/swiggy
```

---

### 🍽️ Get Restaurant List

```
GET /api/proxy/swiggy/dapi/restaurants/list/v5?lat=...&lng=...
```

---

### 📋 Get Restaurant Menu

```
GET /api/proxy/swiggy/mapi/menu/pl?restaurantId=...
```

---

## 🔧 How It Works (Behind the Scenes)

1. Frontend sends request to proxy
2. Express intercepts the request
3. URL path is rewritten (`/api/proxy/swiggy → ""`)
4. Headers are modified to mimic a real browser
5. Request is forwarded to Swiggy
6. Response headers are rewritten (CORS fix)
7. Clean response is returned to frontend

---

## ⚠️ Why This Exists

Browsers enforce **CORS (Cross-Origin Resource Sharing)**:

> ❌ Direct frontend → Swiggy requests = BLOCKED

This proxy solves it by:

- Acting as a **trusted intermediary**
- Moving requests to the **server-side**
- Returning **browser-safe responses**

---

## 🧪 Example Flow

```
Frontend Request:
http://localhost:3001/api/proxy/swiggy/mapi/menu

↓ Proxy transforms ↓

https://www.swiggy.com/mapi/menu
```

---

## 💡 Real-World Use Cases

- Building API Gateways
- Bypassing CORS restrictions
- Aggregating third-party APIs
- Backend-for-Frontend (BFF) architecture
- Secure API abstraction layer

---

## 🚀 Possible Enhancements

- ⚡ Response caching (Redis / in-memory)
- 🚦 Rate limiting
- 🔁 Retry & fallback logic
- 📊 Logging & monitoring
- 🔐 Authentication layer

---

## 🧑‍💻 Author

**Sharadindu Das**

---

## ⭐ Support

If you found this useful, consider giving it a ⭐ on GitHub!
