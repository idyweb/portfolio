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
    repo: "https://github.com/emerjent/nora-be"
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
    ]
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
];
