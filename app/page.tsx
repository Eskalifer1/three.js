import HomeScreen from "@/screens/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Immersive Dimensions",
  description:
    "Welcome to 'Immersive Dimensions,' the ultimate destination for exploring the cutting-edge world of 3D on the web!  ",
};

export default function Home() {
  return <HomeScreen />;
}
