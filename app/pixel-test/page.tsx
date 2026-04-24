import type { Metadata } from "next";
import PixelTestClient from "./PixelTestClient";

// Never index this page — it's a private debug tool
export const metadata: Metadata = {
  title: "Pixel Diagnostic | DSM Internal",
  robots: { index: false, follow: false },
};

export default function PixelTestPage() {
  return <PixelTestClient />;
}
