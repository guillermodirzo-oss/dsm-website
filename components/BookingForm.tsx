"use client";

import { useEffect } from "react";

export default function BookingForm() {
  useEffect(() => {
    // Load the iFrame resizer script after component mounts
    const script = document.createElement("script");
    script.src = "https://dsmcleaningsolutions.com/resources/iframeResizer.min.js";
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full">
      <iframe
        id="iFrameResizer0"
        style={{ border: 0 }}
        src="https://dsmcleaningsolutions.com/leads/form/0df20d6464dbe5aa02cfe52c45f9960b3c858134f6b69094fcbf03a69beb8e8b101850362ba2e46b67347b9f1f80602e6c5c68d4fe5accd1dfa737a6d15dd60a?embed=true"
        height="1000px"
        width="100%"
        scrolling="yes"
        title="Book a Cleaning - DSM Cleaning Solutions"
      />
    </div>
  );
}
