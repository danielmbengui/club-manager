import "@/devlink/global.css";
import "@/src/styles/globals.css";
import "@/src/styles/calendar.css";
import { DevLinkProvider } from "@/devlink";
import { AuthProvider } from "@/providers/AuthProvider";
import { ThemeProvider, useTheme } from "@/contexts/ThemeProvider";
import { useEffect, useState } from "react";
//import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
//import { getMuiTheme } from "@/contexts/MuiTheme";



export default function App({ Component, pageProps }) {
<<<<<<< HEAD
=======
  const [remoteConfig, setRemoteConfig] = useState(null);
  useEffect(() => {
    const remoteConfig = getRemoteConfig(app);
    remoteConfig.settings.minimumFetchIntervalMillis = 3600000;
    remoteConfig.defaultConfig = {
      "lastVersionApp": "2.2.5",
      "urlFacebook": "https://www.facebook.com/playpadapp/",
      "mailContactPlaypad": "contact@playpadapp.com",
      "limitHoursBeforeBooking": "0.5",
      "mailPartnershipPlaypad": "partenaire@playpadapp.com",
      "urlBookingAirpad": "https://reservation-playpadapp.com/",
      "urlCgvAirpad": "https://www.airpad.ch/conditions",
      "nMaxAttempsPayment": "3",
      "urlAdminPlaypad": "https://www.padelaxe.com",
      "paymentProviderD": "datatrans",
      "limitActivesBookings": "3",
      "waitingSecondsForPayment": "20",
      "urlInstagram": "https://www.instagram.com/playpadapp/",
      "limitDaysBookings": "20",
      "mailReportsPlaypad": "reports@playpadapp.com",
      "limitHoursBeforeCancel": "3",
      "hourCancelMatch": "3",
      "minYearToPlay": "13",
      "mailMarketingPlaypad": "marketing@playpadapp.com",
      "intervalVerifyForPayment": "5",
      "urlPartnersSubscription": "https://www.playpadapp.com/pour-les-clubs",
      "urlCancelPaymentMatch": "https://playpad.page.link/CheckoutCheckMatchPage",
      "urlGetKeys": "https://us-central1-playpadapp-13dee.cloudfunctions.net/getSecretManagerClub",
      "mailSupportPlaypad": "support@playpadapp.com",
      "urlWebsitePlaypad": "https://www.playpadapp.com",
      "urlSuccessPaymentMatch": "https://playpad.page.link/CheckoutCheckMatchPage",
      "paymentProviderS": "stripe"
    }
    fetchAndActivate(remoteConfig)
      .then(() => {
        setRemoteConfig(remoteConfig);
      })
      .catch((error) => {
        console.error("Erreur lors de l'activation du Remote Config :", error);
        setRemoteConfig(null);
      });
   
  }, [])
>>>>>>> 1bc3946 (last version to be sure)
  //const { theme } = useTheme(); // Récupérer le thème clair/sombre
  //const muiTheme = getMuiTheme('light'); // Générer le thème MUI basé sur vos variables CSS
  return (<SpeedInsights>
    <ThemeProvider>
      <DevLinkProvider>
        <AuthProvider>
          <Component remoteConfig={remoteConfig} {...pageProps} />
        </AuthProvider>
      </DevLinkProvider>
    </ThemeProvider>
  </SpeedInsights>);
}
