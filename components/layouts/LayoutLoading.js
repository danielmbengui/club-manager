import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useThemeMode } from '@/contexts/ThemeProvider';

export default function LayoutLoading() {
  const { theme, themeMode } = useThemeMode();
  return (
    <div>
      <Backdrop
        sx={{ color: theme.palette.primary.main, background:'rgba(0, 0, 0, 0.5)', zIndex:0 }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
