import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.options("/api/proxy/swiggy/*", cors());

app.use(
  "/api/proxy/swiggy",
  createProxyMiddleware({
    target: "https://www.swiggy.com",
    changeOrigin: true,
    pathRewrite: { "^/api/proxy/swiggy": "" },
    onProxyReq: (proxyReq) => {
      proxyReq.setHeader("User-Agent", "Mozilla/5.0");
      proxyReq.setHeader("Referer", "https://www.swiggy.com/");
      proxyReq.setHeader("Origin", "https://www.swiggy.com");
    },
    onProxyRes: (proxyRes) => {
      proxyRes.headers["access-control-allow-origin"] = "*";
    },
    onError: (err, req, res) => {
      console.error("Proxy error:", err.message);
      res.status(502).json({ error: "Upstream request failed" });
    }
  })
);

app.get("/", (req, res) => {
  res.send("<h1>Swiggy Proxy Server Running 🚀</h1>");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
