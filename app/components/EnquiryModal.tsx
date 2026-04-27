"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { LeadCaptureForm } from "./LeadCaptureForm";

export function EnquiryModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const trigger = target.closest("[data-enquiry-trigger]");

      if (trigger) {
        event.preventDefault();
        setOpen(true);
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/48 px-4 py-6 backdrop-blur-[1px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) setOpen(false);
      }}
    >
      <div className="grid max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-lg bg-white shadow-2xl lg:grid-cols-[1fr_1fr]">
        <div className="relative hidden min-h-[560px] lg:block">
          <Image
            src="/images/enquiry-modal.png"
            alt="Enterprise training discussion in a modern office"
            fill
            className="object-cover"
            sizes="480px"
          />
        </div>

        <div className="relative max-h-[90vh] overflow-y-auto px-7 py-7 sm:px-9">
          <button
            type="button"
            aria-label="Close enquiry form"
            onClick={() => setOpen(false)}
            className="absolute right-7 top-7 text-gray-500 transition hover:text-gray-900"
          >
            <X size={28} />
          </button>

          <h2 id="enquiry-modal-title" className="text-3xl font-extrabold text-gray-950">
            Enquire Now
          </h2>

          <div className="mt-8">
            <LeadCaptureForm variant="modal" />
          </div>
        </div>
      </div>
    </div>
  );
}
