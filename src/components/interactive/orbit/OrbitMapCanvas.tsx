"use client";

import { useEffect, useRef } from "react";
import type { SatelliteParams } from "@/src/lib/demo-adapters/orbit-types";
import { propagateOrbit } from "./orbit-scoring";

interface OrbitMapCanvasProps {
  params: SatelliteParams;
  regionGeoJSON?: { type: string; coordinates: number[][][] };
  minElevDeg?: number;
  width?: number;
  height?: number;
  className?: string;
}

export function OrbitMapCanvas({
  params,
  regionGeoJSON,
  width = 480,
  height = 240,
  className = "",
}: OrbitMapCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = width;
    canvas.height = height;

    ctx.fillStyle = "#f8fafc";
    ctx.fillRect(0, 0, width, height);

    ctx.strokeStyle = "#e2e8f0";
    ctx.lineWidth = 1;

    ctx.beginPath();
    ctx.moveTo(width * 0.1, height * 0.3);
    ctx.lineTo(width * 0.3, height * 0.2);
    ctx.lineTo(width * 0.25, height * 0.6);
    ctx.lineTo(width * 0.1, height * 0.7);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(width * 0.4, height * 0.2);
    ctx.lineTo(width * 0.5, height * 0.15);
    ctx.lineTo(width * 0.6, height * 0.3);
    ctx.lineTo(width * 0.55, height * 0.8);
    ctx.lineTo(width * 0.45, height * 0.85);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(width * 0.6, height * 0.15);
    ctx.lineTo(width * 0.9, height * 0.2);
    ctx.lineTo(width * 0.85, height * 0.4);
    ctx.lineTo(width * 0.7, height * 0.6);
    ctx.closePath();
    ctx.stroke();

    if (regionGeoJSON && regionGeoJSON.type === "Polygon") {
      const coords = regionGeoJSON.coordinates[0];
      let minLat = 90, maxLat = -90, minLon = 180, maxLon = -180;
      coords.forEach((coord) => {
        const [lon, lat] = coord;
        minLat = Math.min(minLat, lat);
        maxLat = Math.max(maxLat, lat);
        minLon = Math.min(minLon, lon);
        maxLon = Math.max(maxLon, lon);
      });
      const cx = ((minLon + maxLon) / 2 + 180) / 360 * width;
      const cy = (90 - (minLat + maxLat) / 2) / 180 * height;
      const rw = (Math.abs(maxLon - minLon) / 360) * width;
      const rh = (Math.abs(maxLat - minLat) / 180) * height;
      ctx.fillStyle = "#f97316";
      ctx.fillRect(cx - rw / 2, cy - rh / 2, rw, rh);
    }

    const trackPoints: { lat: number; lon: number }[] = [];
    const timeSteps = 12 * 3600;
    const stepSize = 1800;
    for (let t = 0; t < timeSteps; t += stepSize) {
      const position = propagateOrbit(params, t);
      if (isFinite(position.lat) && isFinite(position.lon)) {
        trackPoints.push({ lat: position.lat, lon: position.lon });
      }
    }

    if (trackPoints.length > 0) {
      ctx.strokeStyle = "#3b82f6";
      ctx.lineWidth = 2;
      ctx.beginPath();
      let firstPoint = true;
      trackPoints.forEach((point, index) => {
        const x = ((point.lon + 180) / 360) * width;
        const y = ((90 - point.lat) / 180) * height;
        if (index > 0) {
          const prev = trackPoints[index - 1];
          const prevX = ((prev.lon + 180) / 360) * width;
          if (Math.abs(x - prevX) > width / 2) {
            ctx.stroke();
            ctx.beginPath();
            firstPoint = true;
          }
        }
        if (firstPoint) {
          ctx.moveTo(x, y);
          firstPoint = false;
        } else {
          ctx.lineTo(x, y);
        }
      });
      ctx.stroke();

      const currentPosition = propagateOrbit(params, 0);
      if (isFinite(currentPosition.lat) && isFinite(currentPosition.lon)) {
        const x = ((currentPosition.lon + 180) / 360) * width;
        const y = ((90 - currentPosition.lat) / 180) * height;
        ctx.fillStyle = "#ef4444";
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, 2 * Math.PI);
        ctx.fill();
      }
    }

    ctx.strokeStyle = "#cbd5e1";
    ctx.lineWidth = 1;
    ctx.strokeRect(0, 0, width, height);
  }, [params, regionGeoJSON, width, height]);

  return (
    <div className={`overflow-hidden rounded-lg border border-[var(--border)] ${className}`}>
      <canvas
        ref={canvasRef}
        className="block w-full max-w-full"
        style={{ maxWidth: width }}
        width={width}
        height={height}
      />
    </div>
  );
}
