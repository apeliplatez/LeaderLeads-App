
"use client";
import { app } from "@/lib/firebase";
import { createContext, useContext } from "react";

const FirebaseContext = createContext(null);

export function FirebaseProvider({ children }: { children: React.ReactNode }) {
  return (
    <FirebaseContext.Provider value={null}>{children}</FirebaseContext.Provider>
  );
}

export function useFirebase() {
  const context = useContext(FirebaseContext);
  if (context === undefined) {
    throw new Error("useFirebase must be used within a FirebaseProvider");
  }
  return app;
}
