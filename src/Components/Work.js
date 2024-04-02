import React from 'react'
import { Grid, Container } from '@mui/material'
import { useRef } from "react";
import { useInView } from "framer-motion";
import img from './img/tab.png'
import img2 from './img/mobile2.png'
import img3 from './img/calculate.png'
import img4 from './img/help.png'
import { motion } from 'framer-motion';

function Work() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const visible = { opacity: 1, y: 10, transition: { duration: 1 } };
    const itemVariants = {
        hidden: { opacity: 0, y: 0 },
        visible
    };

    return (
        <motion.div
            ref={ref}
        >
            <Container sx={{ my: 3,}} className='bio-container'>
                <Container>  
                    <motion.span className='light-title' variants={itemVariants}>
                    Work
                </motion.span>
                </Container>
                <Grid container sx={{ marginTop: '75px', }}>
                    <Grid item lg={5} md={12} xs={12} sx={{ px: 3 , sm:{px:1}}}>

                        <motion.div
                            style={{
                              height: 'auto', // You can adjust this height as needed
                                overflow: 'hidden', // Ensure the image doesn't overflow the container
                                transform: isInView ? 'none' : 'translateY(20px)',
                                opacity: isInView ? 1 : 0,
                                transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                            }}
                        >
                            <img
                                src={img}
                                className='shadow-on-img'
                                style={{
                                    borderRadius: '15px',
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    filter: 'brightness(100%) contrast(100%)', // Adjust these filters as needed
                                }}
                                alt='' />

                        </motion.div>
                        <motion.h1

                            style={{

                                transform: isInView ? "none" : "translateY(20px)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                                marginTop: '70px', fontSize: '100px', lineHeight: '80px'

                            }}
                            className='bio-title' variants={itemVariants}>Brand Identity</motion.h1>
                    </Grid>
                    <Grid item lg={7} md={12} xs={12} sx={{ px: 3 }} >
                        <motion.div
                            style={{
                                display: 'flex',
                                flex:'wrap',
                                position:'relative',
                                overflow:'scroll',
                                justifyContent: 'space-evenly', width: "auto",
                                transform: isInView ? "none" : "translateY(20px)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                            }}
                            className='background-div-bio'>

                            <img
                                src={img2}
                                className='shadow-on-img'
                                style={{
                                    borderRadius: '15px',
                                    width: '185px',
                                    height: '100%',
                                    objectFit: 'cover',
                                    filter: 'brightness(100%) contrast(100%)', // Adjust these filters as needed
                                }}
                                alt='' />
                            <img
                                src={img3}
                                className='shadow-on-img'
                                style={{
                                    borderRadius: '15px',
                                    width: '185px',
                                    height: '100%',
                                    objectFit: 'cover',
                                    filter: 'brightness(100%) contrast(100%)', // Adjust these filters as needed
                                }}
                                alt='' />
                            <img
                                src={img4}
                                className='shadow-on-img'
                                style={{
                                    borderRadius: '15px',
                                    width: '185px',
                                    height: '100%',
                                    objectFit: 'cover',
                                    filter: 'brightness(100%) contrast(100%)', // Adjust these filters as needed
                                }}
                                alt='' />

                        </motion.div>
                        <motion.p variants={itemVariants} style={{
                            transform: isInView ? "none" : "translateY(20px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                            marginTop: '55px', fontSize: '30px'


                        }}>
                            I worked with a local clinic to create a simple, thoughtful and approachable brand identity. We agreed on a two-color scheme and modern forms as the key elements.
                        </motion.p>
                    </Grid>

                </Grid>

            </Container>
        </motion.div>
    )
}

export default Work