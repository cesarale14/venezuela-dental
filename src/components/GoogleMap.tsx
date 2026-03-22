"use client";

import { CONTACT } from "@/lib/constants";

export default function GoogleMap() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200">
      <iframe
        src={`https://maps.google.com/maps?q=${CONTACT.address.lat},${CONTACT.address.lng}&z=17&output=embed`}
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Venezuela Dental Location"
        className="h-[200px] w-full md:h-[300px]"
      />
    </div>
  );
}
