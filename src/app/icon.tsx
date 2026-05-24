import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8,
          background: "linear-gradient(135deg, #7c6cff 0%, #38bdf8 100%)",
          color: "white",
          fontSize: 14,
          fontWeight: 700,
        }}
      >
        UM
      </div>
    ),
    { ...size },
  );
}
