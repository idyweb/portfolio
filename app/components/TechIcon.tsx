import React from "react";

const techIcons: Record<string, React.ReactNode> = {
  Python: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 1c6.075 0 11 4.925 11 11s-4.925 11-11 11-11-4.925-11-11 4.925-11 11-11z"/><path d="M7.5 6h9v2h-9zm0 4h9v5h-9z"/>
    </svg>
  ),
  FastAPI: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
    </svg>
  ),
  PyTorch: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <circle cx="12" cy="12" r="10"/>
    </svg>
  ),
  TensorFlow: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
    </svg>
  ),
  PostgreSQL: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <circle cx="12" cy="12" r="10"/>
    </svg>
  ),
  MongoDB: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"/>
    </svg>
  ),
  Docker: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
    </svg>
  ),
  AWS: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M6 2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z"/>
    </svg>
  ),
  GCP: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
    </svg>
  ),
  Kubernetes: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
    </svg>
  ),
  Celery: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <circle cx="12" cy="12" r="10"/>
    </svg>
  ),
  Redis: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
    </svg>
  ),
  GDAL: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <circle cx="12" cy="12" r="10"/>
    </svg>
  ),
  Rasterio: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <circle cx="12" cy="12" r="10"/>
    </svg>
  ),
  GeoPandas: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <circle cx="12" cy="12" r="10"/>
    </svg>
  ),
  CLIP: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <circle cx="12" cy="12" r="10"/>
    </svg>
  ),
  "U-Net": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <circle cx="12" cy="12" r="10"/>
    </svg>
  ),
  ResNet: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <circle cx="12" cy="12" r="10"/>
    </svg>
  ),
  Flask: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
    </svg>
  ),
};

export default function TechIcon({ tech }: { tech: string }) {
  return (
    <span className="inline-block text-[var(--neo-1)]" title={tech}>
      {techIcons[tech] || (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <circle cx="12" cy="12" r="10"/>
        </svg>
      )}
    </span>
  );
}
