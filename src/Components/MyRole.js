import { Container, Grid } from '@mui/material'
import React from 'react'
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from 'framer-motion';
import Me from './img/left.png'
export default function MyRole() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
        <Container   ref={ref} className='' sx={{ my: 10 }}>
            <hr />
            <Grid container sx={{ my: 10 }}>
                <Grid item lg={6} md={6} sm={6} sx={{ display: 'grid', placeContent: 'center' }}>
                    <motion.h1
                        style={{
                            transform: isInView ? "none" : "translateY(20px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }}
                        className='bio-title' >I am a freelance designer and art director.</motion.h1>
                </Grid>
                <Grid item lg={6} md={6} sm={6}>
                    <Container sx={{ display: 'grid', placeContent: 'end' }}>
                        <motion.div className='image-circle shadow-on-img'>
                            <img src={Me}
                                style={{
                                    transform: isInView ? 'none' : 'translateY(50px)',
                                    opacity: isInView ? 1 : 0,
                                    transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                                }} height={400} className='' alt='' />
                        </motion.div>
                    </Container>
                </Grid>
            </Grid>
            {/* <hr /> */}
        </Container>
    )
}
