import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, Zoom } from 'react-toastify';

function Toast() {
  return (
    <ToastContainer
      position="top-center"
      theme="colored"
      autoClose={3000}
      hideProgressBar
      closeOnClick
      pauseOnFocusLoss
      pauseOnHover
      transition={Zoom}
    />
  );
}

export default Toast;
