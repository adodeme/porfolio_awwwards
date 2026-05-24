"use client";

export default function GridBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-black" />

      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,255,.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,.2) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="absolute -z-10 inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
            <div
        className="absolute w-[800px] h-[800px] rounded-full blur-[150px]"
        style={{
            background: "rgba(0,255,255,.08)",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
        }}
        />
    </div>
  );
}