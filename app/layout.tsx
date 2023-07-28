import NavBar from "@/components/NavBar";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import StyledComponentsRegistry from "./StyledComponentsRegistry";
import "./globals.css";

// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({ subsets: ["latin"], weight: "600" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          <NavBar />
          {children}
          <Toaster />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
