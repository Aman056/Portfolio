import React, { useState } from 'react'
import { motion } from 'framer-motion';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Container, Box } from '@mui/material';
import { useRef } from "react";
import { useInView } from "framer-motion";
import img from './img/landing-img.jpg'
import { HandleOpen } from '../Redux/Slices/FormSlice';
import TypeWriterEffect from 'react-typewriter-effect';

import { useDispatch } from 'react-redux';
import LandingMobilePage from './ResponsiveCom/LandingMobilePage';
import LandingDesktopPage from './ResponsiveCom/LandingDesktopPage';

export default function Landing() {
    const ref = useRef(null);
    const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };
    const dispatch = useDispatch()
    const HandleOpenDialog = () => {
        dispatch(HandleOpen())
    }
    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible
    };
    return (
        <motion.div ref={ref}
            style={{ height: '100vh', overflow: 'hidden' }}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 1 } }}
            variants={{ visible: { transition: { staggerChildren: 0.3 } } }}>
            {/* <Grid container spacing={2} > */}
                <LandingDesktopPage />
                <Box sx={{ display: { xs: 'block', sm: 'block', md: 'none', lg: 'none' } }}>
                    <LandingMobilePage />
                </Box>
                {/* <Grid xs={12} md={12} lg={6}> */}
                    <motion.div className='img-fit-div'>
                        <motion.img src={img} variants={itemVariants} className='main-img' alt='title-img' />
                    </motion.div>

                {/* </Grid>
            </Grid> */}
            <hr />
        </motion.div>
    )
}
