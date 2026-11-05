import { ImageResponse } from "next/og";

export const alt = "Silver Fox Consulting, cybersecurity consulting in Texas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Default social share image used by every page. */
export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        background: "linear-gradient(135deg, #060c18 0%, #0a1528 55%, #1a2c4e 100%)",
        color: "#ffffff",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <svg width="64" height="64" viewBox="0 0 160 160">
          <g transform="translate(32 22)" fill="#ffffff">
            <path d="M0 56 68 0 56 42 0 108Z" />
            <path d="M32 76 72 44 96 116Z" />
          </g>
        </svg>
        <div style={{ display: "flex", fontSize: 30, fontWeight: 700, letterSpacing: 3 }}>
          SILVER FOX
          <span style={{ color: "#8592a9", marginLeft: 12 }}>CONSULTING</span>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 72, lineHeight: 1.08, fontWeight: 600, maxWidth: 940 }}>
          Security that holds up when someone tests it.
        </div>
        <div style={{ marginTop: 28, fontSize: 30, color: "#b7c1cf" }}>
          Penetration testing, compliance readiness and incident response in Texas.
        </div>
      </div>
      <div style={{ display: "flex", height: 6, width: 120, background: "#6f97f2" }} />
    </div>,
    size,
  );
}
