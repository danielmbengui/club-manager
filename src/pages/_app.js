import "@/src/styles/globals.css";
import "@/devlink/global.css";
import { DevLinkProvider } from "@/devlink";
import { AuthProvider } from "@/providers/AuthProvider";


export default function App({ Component, pageProps }) {
  
  return (
  <>
  <head> <script src="https://cdn.jsdelivr.net/npm/chart.js"></script></head>
  <DevLinkProvider><AuthProvider><Component {...pageProps} /></AuthProvider></DevLinkProvider>
  </>);
}
