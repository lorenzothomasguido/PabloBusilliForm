/*'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

export default function FloatingBox() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleClickOpen}>
        Abrir Caja Flotante
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Caja Flotante</DialogTitle>
        <DialogContent>
          <DialogContentText>
            PEDI TU PRESUPUESTO
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
*/