import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useUTM } from "@/hooks/useUTM";

const TYPEFORM_ID = "waw3Nx7c";

interface TypeformModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TypeformModal = ({ isOpen, onClose }: TypeformModalProps) => {
  const { getUTMQueryString } = useUTM();

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  const utmParams = getUTMQueryString();
  const typeformUrl = `https://form.typeform.com/to/${TYPEFORM_ID}${utmParams ? `?${utmParams}` : ""}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[1000] flex items-center justify-center"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: -40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative w-[95vw] max-w-[600px] h-[90vh] bg-black rounded-xl overflow-hidden shadow-premium-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with close button */}
            <div className="flex justify-end items-center p-4 border-b border-border/30">
              <button
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground transition-colors p-1"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Typeform iframe */}
            <div className="h-[calc(100%-65px)]">
              <iframe
                src={typeformUrl}
                width="100%"
                height="100%"
                style={{ border: "none" }}
                allow="camera; microphone; autoplay; encrypted-media;"
                title="Application Form"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TypeformModal;
