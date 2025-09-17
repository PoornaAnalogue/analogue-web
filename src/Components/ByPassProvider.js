"use client";
import { createContext, useContext, useRef } from "react";

const BypassContext = createContext(null);

export function BypassProvider({ children }) {
  const isBypass = useRef(false);
  return (
    <BypassContext.Provider value={isBypass}>
      {children}
    </BypassContext.Provider>
  );
}

export function useBypass() {
  return useContext(BypassContext);
}
