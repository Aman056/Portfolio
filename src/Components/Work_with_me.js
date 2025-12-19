import { Box, Container, Grid } from '@mui/material';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Me from './img/right.png'; // fallback or default image
import data from '../data.json'

export default function WorkWithMe() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", ".9 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    const { personalDetails } = data;

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress
            }}
        >
            <Container className='bio-container' sx={{ my: 10, maxHeight: '100vh' }}>
                <Grid container sx={{ my: 10 }}>
                    <Grid item lg={6} md={6} sm={6} sx={{ display: 'grid', placeContent: 'center' }}>
                        <motion.h1 className='bio-title'>Work with me</motion.h1>
                        <Container sx={{ display: 'grid', placeContent: 'start' }}>
                            <motion.div className='image-circle-work shadow-on-img'>
                                <img
                                    style={{
                                        width: 'auto',
                                        transform: isInView ? 'none' : 'translateX(150px)',
                                        opacity: isInView ? 1 : 0,
                                        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                                    }}
                                    src={Me}
                                    height={400}
                                    alt={personalDetails.fullName}
                                />
                            </motion.div>
                        </Container>
                    </Grid>

                    <Grid item lg={6} md={6} sm={6} sx={{ display: 'grid', placeContent: 'center' }}>
                        <Container>
                            <Box sx={{ pt: 10 }}>
                                {personalDetails.address && (
                                    <Box sx={{ my: 6 }}>
                                        <b style={{ fontSize: '30px', lineHeight: '30px' }}>Address:</b>
                                        <br />
                                        <span style={{ fontSize: '30px', lineHeight: '30px' }}>
                                            {personalDetails.address.street}, {personalDetails.address.city}, {personalDetails.address.state}
                                        </span>
                                    </Box>
                                )}
                                {personalDetails.phone && (
                                    <Box sx={{ my: 6 }}>
                                        <b style={{ fontSize: '30px', lineHeight: '30px' }}>Phone no:</b>
                                        <br />
                                        <span style={{ fontSize: '30px', lineHeight: '30px' }}>
                                            {personalDetails.phone}
                                        </span>
                                    </Box>
                                )}
                                {personalDetails.email && (
                                    <Box sx={{ my: 6 }}>
                                        <b style={{ fontSize: '30px', lineHeight: '30px' }}>Email:</b>
                                        <br />
                                        <span style={{ fontSize: '30px', lineHeight: '30px' }}>
                                            {personalDetails.email}
                                        </span>
                                    </Box>
                                )}
                            </Box>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        </motion.div>
    );
}
