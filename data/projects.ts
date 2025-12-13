export const projects = [
  {
    slug: "nora-backend",
    title: "Nora (Mum Mentor AI) — Backend",
    description:
      "Backend platform for Nora — an empathetic conversational companion for new mothers; supports AI memory, notifications, real-time voice, and OAuth integrations.",
    metrics: [
      "Production-ready Celery notification system (RabbitMQ + Redis)",
      "Real-time voice chat WebSocket endpoint",
      "AI memory extraction and personality features"
    ],
    stack: [
      "FastAPI",
      "Celery",
      "RabbitMQ",
      "Redis",
      "SQLAlchemy",
      "PostgreSQL",
      "Alembic",
      "WebSockets",
      "Pytest",
      "OpenAI Whisper"
    ],
    repo: "https://github.com/emerjent/nora-be",
    liveUrl: "https://noramum.app"
  },
  {
    slug: "building-detection",
    title: "Building Detection System",
    description:
      "Production-grade geospatial ML system for automated building segmentation.",
    metrics: [
      "92% IoU",
      "70% reduction in manual surveying time",
      "1.7cm aerial imagery"
    ],
    stack: [
      "PyTorch",
      "FastAPI",
      "Celery",
      "Redis",
      "GDAL",
      "GCP"
    ],
    liveUrl: "https://usefieldwatch.com/"
  },
  {
    slug: "crypto-agent",
    title: "Crypto Agent",
    description:
      "LLM-powered cryptocurrency analytics system using JSON-RPC APIs.",
    metrics: [
      "Multi-intent processing",
      "Groq LLM integration",
      "Async FastAPI"
    ],
    stack: ["FastAPI", "Groq LLM", "CoinGecko", "Pytest"]
  },
  {
    slug: "image-similarity",
    title: "Image Similarity API",
    description:
      "Scalable image similarity search handling 195k+ images.",
    metrics: [
      "195k+ images",
      "25% lower latency",
      "CLIP embeddings"
    ],
    stack: ["FastAPI", "CLIP", "MongoDB"]
  }
  ,
  {
    slug: "wallet-paystack",
    title: "Wallet Service (Paystack)",
    description:
      "Backend wallet service with Paystack integration, JWT + Google OAuth authentication, API-key access, and idempotent webhook handling.",
    metrics: [
      "Paystack deposit + webhook verification",
      "API key system with permission scopes and expiry",
      "Atomic wallet-to-wallet transfers and transaction history"
    ],
    stack: [
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Alembic",
      "Paystack",
      "JWT",
      "Google OAuth",
      "Uvicorn"
    ],
    repo: "https://github.com/idyweb/Wallet_Service_with_Paystack"
  },
  {
    slug: "image-upload-service",
    title: "Image Upload Service",
    description:
      "Asynchronous image upload and processing service with background workers (resize, compress, thumbnails) and status endpoints.",
    metrics: [
      "Background processing with Celery",
      "Support for local + GCS storage",
      "Status tracking and result retrieval endpoints"
    ],
    stack: ["FastAPI", "Celery", "Redis", "PostgreSQL", "Google Cloud Storage", "Pillow"],
    repo: "https://github.com/idyweb/image-upload-service"
  },
  {
    slug: "agent-token-price-service",
    title: "Agent-to-Agent Token Price Service",
    description:
      "A2A protocol-compliant cryptocurrency price agent providing real-time pricing and natural language responses using CoinGecko and Groq LLM.",
    metrics: [
      "Real-time prices for 100+ cryptocurrencies",
      "Groq LLM (Llama 3.3) integration for NLU",
      "A2A / JSON-RPC 2.0 compatibility"
    ],
    stack: ["FastAPI", "CoinGecko API", "Groq LLM", "Python", "JSON-RPC"],
    repo: "https://github.com/idyweb/Agent-to-Agent-Token-Price-Service-"
  }
];
