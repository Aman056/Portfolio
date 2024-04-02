import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import { init, send } from 'emailjs-com';
import { useDispatch, useSelector } from 'react-redux';
import { HandleClose } from '../Redux/Slices/FormSlice';
import { Box, Grid } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import img from './img/nutmeg.gif'
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function EmailMe() {
    const dispatch = useDispatch()
    const open = useSelector((state) => state.Dialog.open)
    const [loading, setLoading] = React.useState(false);
    const [formData, setFormData] = React.useState()
    const [result, setResult] = React.useState()
    const [formDataError, setFormDataError] = React.useState({ "email": false, "number": false, "numberValidate": '' })

    init('wiE-U_FXCRKQW3GPh');
    const sendEmail = () => {
        setLoading(true)
        const serviceID = 'service_l4bpbq3';
        const templateID = 'template_h41d2w7';
        send(serviceID, templateID, {
            to_email: 'recipient@example.com',
            subject: 'Subject of the email',
            message: JSON.stringify(formData),
        })
            .then((response) => {
                setResult(true)
                setLoading(false)
            })
            .catch((error) => {
                setResult(false)
            });
    };
    React.useEffect(() => {
        if (result) {
            setTimeout(() => {
                handleClose()
            }, 3000)
        }
    }, [result])
    const handleChange = (e) => {
        const { value, name } = e.target
        setFormData({ ...formData, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!formData.email) {
            setFormDataError({ "email": true });
        } else if (formData.number) {
            if (isNaN(formData.number)) {
                setFormDataError({ "number": true, "numberValidate": "Should be a number" });
            } else if (formData.number.length !== 10) {
                setFormDataError({ "number": true, "numberValidate": "Should be 10 digit number" });
            } else {
                setFormDataError({ "number": false, "numberValidate": "" });
                sendEmail()
            }
        } else {
            setFormDataError({ "number": true, "numberValidate": "Number is required" });
        }
    }
    const handleClose = () => {
        dispatch(HandleClose())
    };

    return (
        <React.Fragment>
            <Dialog
                sx={{ zIndex: '9999' }}
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                {result ? <img src={img} height={250} alt='success' />
                    :
                    <form onSubmit={handleSubmit}>
                        <DialogTitle>{"Email Me"}</DialogTitle>
                        <DialogContent style={{}}>
                            <DialogContentText id="alert-dialog-slide-description">
                                <Box
                                    sx={{
                                        '& .MuiTextField-root': { width: '98.5%' },
                                    }}
                                >
                                    <Grid container spacing={5}>
                                        <Grid item lg={6} sm={12}>
                                            <TextField
                                                onChange={handleChange}
                                                name='email'
                                                type='email'
                                                required
                                                error={formDataError.email}
                                                id="standard-error-helper-text"
                                                label="Your Email"
                                                defaultValue=""

                                                variant="standard"

                                            />
                                        </Grid>
                                        <Grid item lg={6} sm={12}>
                                            <TextField
                                                onChange={handleChange}
                                                name='number'
                                                error={formDataError.number}
                                                required
                                                type='tel'
                                                id="standard-helperText"
                                                label="Phone no"
                                                defaultValue=""
                                                helperText={formDataError.numberValidate}
                                                variant="standard"
                                            />
                                        </Grid>
                                        <Grid item lg={12} sm={12}>
                                            <textarea
                                                required
                                                onChange={handleChange}
                                                name='description'
                                                style={{ maxWidth: '550px', maxHeight: "100px", minWidth: '98.5%' }} type='text'
                                                placeholder='Description' /></Grid>
                                    </Grid>
                                </Box>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} variant='outlined' color='error'>Cancel</Button>
                            <LoadingButton
                                type='submit' variant='contained' color='success'
                                loading={loading}
                                loadingPosition="start"
                                startIcon={<MailOutlineRoundedIcon />}
                            >
                                <span>Send mail</span>
                            </LoadingButton>
                        </DialogActions>
                    </form>
                }

            </Dialog>
        </React.Fragment >
    );
}