"use client";
//react
import { createContext } from "react";

interface ContextProps {
  sucess: boolean;
  setSucess: React.Dispatch<React.SetStateAction<boolean>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

export const FormContext = createContext({} as ContextProps);
