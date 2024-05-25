"use client";
import React, { useRef, useEffect } from "react";

const BOX_WIDTH = 300;
const BOX_HEIGHT = 100;

const Page: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasRefOriginal = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    draw();
  }, []);

  const resizeCanvas = () => {
    draw();
  };

  const draw = () => {
    const canvas = canvasRef.current;
    const canvasOriginal = canvasRefOriginal.current;
    if (canvas) {
      const scale = window.innerWidth / BOX_WIDTH;
      //setup new canvas size
      canvas.width = BOX_WIDTH * scale;
      canvas.height = BOX_HEIGHT * scale;
      const ctx = canvas.getContext("2d");

      ctx.scale(scale, scale);
      ctx.fillStyle = "blue";
      ctx.fillRect(10, 10, 80, 80);
    }

    if (canvasOriginal) {
      const ctx = canvasOriginal.getContext("2d");
      ctx.fillStyle = "blue";
      ctx.fillRect(10, 10, 80, 80);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", resizeCanvas);
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRefOriginal}
        width={BOX_WIDTH}
        height={BOX_HEIGHT}
        style={{ width: "100%", height: "100%" }}
        className="m-3 bg-gray-400"
      />
      <canvas
        ref={canvasRef}
        width={BOX_WIDTH}
        height={BOX_HEIGHT}
        // style={{ width: "100%", height: "100%" }}
        className="m-3 bg-gray-400"
      />
    </>
  );
};

export default Page;
