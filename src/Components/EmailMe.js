import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HandleClose } from '../Redux/Slices/FormSlice';
import {
  Dialog, DialogActions, DialogContent, DialogContentText,
  DialogTitle, Slide, TextField, Box, Grid, Button, 
  Divider
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import { send } from 'emailjs-com';
import img from './img/nutmeg.gif';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EmailMe() {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.Dialog.open);

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    number: "",
    description: ""
  });
  const [result, setResult] = useState(false);
  const [formDataError, setFormDataError] = useState({ email: false, number: false, numberValidate: "" });

  const serviceID = "service_l4bpbq3";    // from EmailJS dashboard
  const templateID = "template_oyea85g";  // from EmailJS template
  const publicKey = "wiE-U_FXCRKQW3GPh";  // from EmailJS account settings

  const sendEmail = () => {
    setLoading(true);

    send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setResult(true);
        setLoading(false);
      })
      .catch((error) => {
        console.error("FAILED...", error);
        setResult(false);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (result) {
      setTimeout(() => {
        handleClose();
      }, 3000);
    }
  }, [result]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email) {
      setFormDataError({ email: true });
    } else if (formData.number) {
      if (isNaN(formData.number)) {
        setFormDataError({ number: true, numberValidate: "Should be a number" });
      } else if (formData.number.length !== 10) {
        setFormDataError({ number: true, numberValidate: "Should be 10 digit number" });
      } else {
        setFormDataError({ number: false, numberValidate: "" });
        sendEmail();
      }
    } else {
      setFormDataError({ number: true, numberValidate: "Number is required" });
    }
  };

  const handleClose = () => {
    dispatch(HandleClose());
  };

  return (
    <Dialog
      sx={{ zIndex: '9999', padding:'10px'}}
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
    >
      {result ? (
        <img src={img} height={250} alt="success" />
      ) : (
        <form onSubmit={handleSubmit}>
          <DialogTitle>Email Me</DialogTitle>
          <Divider />
          <DialogContent>
            <DialogContentText>
              <Box sx={{ '& .MuiTextField-root': { width: '98.5%' } }}>
                <Grid container spacing={5}>
                  <Grid item lg={6} sm={12}>
                    <TextField
                      onChange={handleChange}
                      name="email"
                      type="email"
                      required
                      error={formDataError.email}
                      label="Your Email"
                      variant="standard"
                    />
                  </Grid>
                  <Grid item lg={6} sm={12}>
                    <TextField
                      onChange={handleChange}
                      name="number"
                      error={formDataError.number}
                      required
                      type="tel"
                      label="Phone no"
                      helperText={formDataError.numberValidate}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item lg={12} sm={12}>
                    <textarea
                      required
                      onChange={handleChange}
                      name="description"
                      style={{ maxWidth: '550px', maxHeight: "100px", minWidth: '98.5%' }}
                      placeholder="Description"
                    />
                  </Grid>
                </Grid>
              </Box>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="outlined" color="error">
              Cancel
            </Button>
            <LoadingButton
              type="submit"
              variant="contained"
              color="success"
              loading={loading}
              loadingPosition="start"
              startIcon={<MailOutlineRoundedIcon />}
            >
              <span>Send mail</span>
            </LoadingButton>
          </DialogActions>
        </form>
      )}
    </Dialog>
  );
}
