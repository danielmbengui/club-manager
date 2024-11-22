import "@/devlink/global.css";
import "@/src/styles/globals.css";
import { DevLinkProvider } from "@/devlink";
import { AuthProvider } from "@/providers/AuthProvider";


export default function App({ Component, pageProps }) {
  
  return (<DevLinkProvider><AuthProvider><Component {...pageProps} /></AuthProvider></DevLinkProvider>);
}
