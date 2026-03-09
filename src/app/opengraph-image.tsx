import { ImageResponse } from "next/og";

export const alt =
  "Innogreen - Smart, Secure & Accessible Homes in Perth, Western Australia";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #065f46 0%, #047857 50%, #059669 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          position: "relative",
        }}
      >
        {/* Decorative elements */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "400px",
            height: "400px",
            background: "rgba(255,255,255,0.05)",
            borderRadius: "50%",
            transform: "translate(100px, -100px)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "300px",
            height: "300px",
            background: "rgba(255,255,255,0.05)",
            borderRadius: "50%",
            transform: "translate(-80px, 80px)",
            display: "flex",
          }}
        />

        {/* Logo / Brand name */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              background: "white",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "20px",
              fontSize: "36px",
              fontWeight: 700,
              color: "#065f46",
            }}
          >
            IG
          </div>
          <div
            style={{
              fontSize: "52px",
              fontWeight: 700,
              color: "white",
              letterSpacing: "-1px",
              display: "flex",
            }}
          >
            Innogreen
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "32px",
            fontWeight: 600,
            color: "rgba(255,255,255,0.95)",
            textAlign: "center",
            lineHeight: 1.3,
            maxWidth: "800px",
            display: "flex",
          }}
        >
          Smart, Secure & Accessible Homes in Perth
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "20px",
            color: "rgba(255,255,255,0.8)",
            textAlign: "center",
            marginTop: "20px",
            maxWidth: "700px",
            lineHeight: 1.5,
            display: "flex",
          }}
        >
          NDIS Provider | Specialist Disability Accommodation | Smart Home Technology
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            display: "flex",
            alignItems: "center",
            gap: "30px",
            color: "rgba(255,255,255,0.6)",
            fontSize: "16px",
          }}
        >
          <span style={{ display: "flex" }}>innogreen.net.au</span>
          <span style={{ display: "flex" }}>RA82486</span>
          <span style={{ display: "flex" }}>NDIS 4050064987</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
