import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import TypeformModal from "@/components/ui/TypeformModal";

interface TypeformContextValue {
  openTypeform: () => void;
  closeTypeform: () => void;
}

const TypeformContext = createContext<TypeformContextValue | null>(null);

export const TypeformProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openTypeform = useCallback(() => setIsOpen(true), []);
  const closeTypeform = useCallback(() => setIsOpen(false), []);

  return (
    <TypeformContext.Provider value={{ openTypeform, closeTypeform }}>
      {children}
      <TypeformModal isOpen={isOpen} onClose={closeTypeform} />
    </TypeformContext.Provider>
  );
};

export const useTypeform = (): TypeformContextValue => {
  const context = useContext(TypeformContext);
  if (!context) {
    throw new Error("useTypeform must be used within a TypeformProvider");
  }
  return context;
};
