import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "DLG Tech — Architect-Founded Engineering Team";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background: "linear-gradient(135deg, #09090b 0%, #1a1025 40%, #0f172a 70%, #09090b 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-50px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(120, 15, 15, 0.3) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            left: "200px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(50, 10, 65, 0.25) 0%, transparent 70%)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "#34d399",
            }}
          />
          <span
            style={{
              fontSize: "18px",
              fontWeight: 600,
              color: "rgba(255, 255, 255, 0.6)",
              letterSpacing: "0.15em",
              textTransform: "uppercase" as const,
            }}
          >
            DLG Tech
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <span
            style={{
              fontSize: "52px",
              fontWeight: 700,
              color: "white",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            Your next CTO doesn&apos;t need
          </span>
          <span
            style={{
              fontSize: "72px",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.04em",
              background: "linear-gradient(90deg, #fde68a, #fdba74, #fbbf24)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            equity.
          </span>
        </div>

        <p
          style={{
            marginTop: "28px",
            fontSize: "20px",
            lineHeight: 1.5,
            color: "rgba(255, 255, 255, 0.55)",
            maxWidth: "650px",
          }}
        >
          Architect-founded engineering team. Real technical oversight, enforced standards, startup-friendly rates.
        </p>

        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "80px",
            right: "80px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "15px", color: "rgba(255, 255, 255, 0.3)" }}>
            dlgtech.com
          </span>
          <span style={{ fontSize: "15px", color: "rgba(255, 255, 255, 0.3)" }}>
            14+ years · EU &amp; US · Architecture-first
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
