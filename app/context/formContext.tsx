"use client";
//react
import { createContext } from "react";

interface ContextProps {
  sucess: boolean;
  setSucess: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FormContext = createContext({} as ContextProps);
