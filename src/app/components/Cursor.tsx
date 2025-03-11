"use client";

import React, { useEffect, useRef } from "react";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed w-8 h-8 bg-yellow-400 rounded-full pointer-events-none mix-blend-difference shadow-[0_0_20px_rgba(255,255,0,1),0_0_40px_rgba(255,255,0,0.8)] transition-all duration-100 ease-out"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        transform: "translate(-50%, -50%)",
        willChange: "transform",
        zIndex: 9999, // Ensures cursor is always on top
      }}
    />
  );
};

export default Cursor;
