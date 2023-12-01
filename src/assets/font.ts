import { Montserrat } from "next/font/google";
import localFont from "next/font/local";

// define a custom local font where GreatVibes-Regular.ttf is stored in the styles folder
const nexaTrial = localFont({
  variable: "--nexa-trial",
  src: "../../public/fonts/Nexa-Trial-Regular.woff",
  fallback: ["system-ui", "Arial"],
});
const montserrat = Montserrat({
  variable: "--montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  preload: true,
});

export { montserrat, nexaTrial };
