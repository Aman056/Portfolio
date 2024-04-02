import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion';
import { useRef } from "react";
import { useInView } from "framer-motion";
import Me from './img/right.png'
export default function Work_with_me() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const visible = { opacity: 1, y: 10, transition: { duration: 1 } };
    const itemVariants = {
        hidden: { opacity: 0, y: 0 },
        visible
    };

    return (
        <Container  ref={ref}  className='bio-container' sx={{ my: 10, maxHeight:'100vh' }}>
            {/* <hr /> */}
            <Grid container sx={{ my: 10 }}>
                <Grid item lg={6} md={6} sm={6} sx={{ display: 'grid', placeContent: 'center' }}>
                    <motion.h1 className='bio-title'
                        style={{
                            fontSize: '100px',
                            transform: isInView ? 'none' : 'translateX(150px)',
                            opacity: isInView ? 1 : 0,
                            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                        }}
                    >Work with me</motion.h1>
                    <Container sx={{ display: 'grid', placeContent: 'start' }}>
                        <motion.div className='image-circle-work shadow-on-img'>
                            <img
                                style={{
                                    width:'auto',
                                    fontSize: '100px',
                                    transform: isInView ? 'none' : 'translateX(150px)',
                                    opacity: isInView ? 1 : 0,
                                    transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                                }}
                                src={Me} height={400} alt='' />
                        </motion.div>
                    </Container>
                </Grid>
                <Grid item lg={6} md={6} sm={6} sx={{ display: 'grid', placeContent: 'center' }}>
                    <motion.div>
                        <Container>
                            <Box sx={{ pt: 10 }}>
                                <Box sx={{ my: 6 }}>
                                    <b style={{ fontSize: '30px', lineHeight: '30px' }}>
                                        Address:
                                    </b>
                                    <br />
                                    <span style={{ fontSize: '30px', lineHeight: '30px' }}>
                                        B6-1902 Panchsheel greens 2 Grater Noida Sector 16
                                    </span>
                                    <br />
                                </Box>
                                <Box sx={{ my: 6 }}>
                                    <b style={{ fontSize: '30px', lineHeight: '30px' }}>
                                        Phone no:
                                    </b>
                                    <br />
                                    <span style={{ fontSize: '30px', lineHeight: '30px' }}>
                                        +91 8423174102
                                    </span>
                                    <br />
                                </Box>
                                <Box sx={{ my: 6 }}>
                                    <b style={{ fontSize: '30px', lineHeight: '30px' }}>
                                        Email:
                                    </b>
                                    <br />
                                    <span style={{ fontSize: '30px', lineHeight: '30px' }}>
                                        Vijaychau056@gmail.com
                                    </span>
                                </Box>
                            </Box>
                        </Container>
                    </motion.div>

                </Grid>
            </Grid>
            <hr />
        </Container>
    )
}
