"use client";

import { useEffect } from "react";

export default function BookingForm() {
  useEffect(() => {
    // Load the iFrame resizer script after component mounts
    const script = document.createElement("script");
    script.src = "https://dsmcleaningsolutions.bookingkoala.com/resources/iframeResizer.min.js";
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
        src="https://dsmcleaningsolutions.bookingkoala.com/leads/form/lead-form?embed=true"
        height="1000px"
        width="100%"
        scrolling="yes"
        title="Book a Cleaning - DSM Cleaning Solutions"
      />
    </div>
  );
}
