import "@/devlink/global.css";
import "@/src/styles/globals.css";
import { DevLinkProvider } from "@/devlink";
import { AuthProvider } from "@/providers/AuthProvider";
import { ThemeProvider, useTheme } from "@/contexts/ThemeProvider";
//import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
//import { getMuiTheme } from "@/contexts/MuiTheme";



export default function App({ Component, pageProps }) {
  //const { theme } = useTheme(); // Récupérer le thème clair/sombre
  //const muiTheme = getMuiTheme('light'); // Générer le thème MUI basé sur vos variables CSS
  return (<ThemeProvider>
         <DevLinkProvider><AuthProvider><Component {...pageProps} /></AuthProvider></DevLinkProvider>
  </ThemeProvider>);
}
