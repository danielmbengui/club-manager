import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function LayoutLoading() {

  return (
    <div>
      <Backdrop
        sx={{ color: 'var(--brand-1)', background:'rgba(0, 0, 0, 0.5)', zIndex:0 }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
