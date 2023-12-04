import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import FormProvider from "./context/formProvider";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Newslatter Form",
  description: "Code by Rafael Thumaza",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <FormProvider>{children}</FormProvider>
      </body>
    </html>
  );
}
