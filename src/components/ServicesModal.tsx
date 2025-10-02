import { useState, useEffect, useRef } from "react";
import { Database, Headset, Calendar, Mail, Share2, Globe, ShoppingCart, Box, X } from "lucide-react";
import { services } from "@/data/services";

const icons = [Database, Headset, Calendar, Mail, Share2, Globe, ShoppingCart, Box];

interface ServiceData {
  label: string;
  desc: string;
}

interface ServicesModalProps {
  onOpen?: () => void;
  onClose?: () => void;
}

export default function ServicesModal({ onOpen, onClose }: ServicesModalProps = {}) {
  const [openService, setOpenService] = useState<ServiceData | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOpenModal = (service: ServiceData, triggerElement: HTMLButtonElement) => {
    triggerRef.current = triggerElement;
    setOpenService(service);
    onOpen?.();
  };

  const handleCloseModal = () => {
    setOpenService(null);
    onClose?.();

    setTimeout(() => {
      triggerRef.current?.focus();
    }, 100);
  };

  useEffect(() => {
    if (openService && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [openService]);

  useEffect(() => {
    if (!openService) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    const handleTabKeyTrap = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || !modalRef.current) return;

      const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement?.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement?.focus();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("keydown", handleTabKeyTrap);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("keydown", handleTabKeyTrap);
      document.body.style.overflow = "";
    };
  }, [openService]);

  const renderServiceItem = (
    service: ServiceData,
    index: number,
    category: "ai" | "design"
  ) => {
    const Icon = icons[index];
    const colorClass = category === "ai" ? "text-blue-400" : "text-purple-400";
    const hoverBgClass = category === "ai" ? "hover:bg-blue-500/10" : "hover:bg-purple-500/10";
    const hoverBorderClass = category === "ai" ? "hover:border-blue-500/50" : "hover:border-purple-500/50";

    return (
      <button
        key={`${category}-${index}`}
        onClick={(e) => handleOpenModal(service, e.currentTarget)}
        className={`group flex items-center gap-4 p-5 rounded-lg border border-gray-800 bg-gray-900 transition-all duration-300 ${hoverBgClass} ${hoverBorderClass} hover:-translate-y-1 hover:shadow-lg ${category === "ai" ? "hover:shadow-blue-500/20" : "hover:shadow-purple-500/20"} cursor-pointer text-left w-full`}
      >
        <div className={`flex-shrink-0 p-3 rounded-lg ${category === "ai" ? "bg-blue-500/20" : "bg-purple-500/20"} transition-all duration-300 group-hover:scale-110`}>
          <Icon className={`w-6 h-6 ${colorClass}`} />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-base font-semibold text-white">{service.label}</h4>
        </div>
      </button>
    );
  };

  return (
    <>
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                AI Automation
              </span>
            </h3>
            <div className="space-y-4">
              {services.aiAutomation.map((service, index) => renderServiceItem(service, index, "ai"))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Creative Design
              </span>
            </h3>
            <div className="space-y-4">
              {services.creativeDesign.map((service, index) => renderServiceItem(service, index + 5, "design"))}
            </div>
          </div>
        </div>
      </div>

      {openService && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-start justify-center overflow-y-auto p-4 md:p-6 transition-opacity duration-200"
          onClick={handleCloseModal}
          aria-hidden="true"
        >
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            className="relative mx-auto my-12 w-full max-w-[44rem] rounded-2xl bg-slate-900/95 p-6 md:p-8 shadow-2xl ring-1 ring-black/30 transition-all duration-200 transform scale-100 opacity-100"
            onClick={(e) => e.stopPropagation()}
            style={{
              animation: "modalFadeIn 0.2s ease-out"
            }}
          >
            <button
              ref={closeButtonRef}
              onClick={handleCloseModal}
              className="absolute top-4 right-4 p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-gray-300" />
            </button>

            <div className="pr-10">
              <h2
                id="modal-title"
                className="text-2xl md:text-3xl font-bold text-white mb-4"
              >
                {openService.label}
              </h2>
              <p
                id="modal-description"
                className="text-base md:text-lg text-gray-300 leading-relaxed"
              >
                {openService.desc}
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes modalFadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
}
