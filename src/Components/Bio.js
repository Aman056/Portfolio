import { Grid, Container } from '@mui/material'
import React from 'react'
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from 'framer-motion';
import img from './img/getting_started_react_native_part_1_header_62b9349b47.png'
export default function Bio() {
    const visible = { opacity: 1, y: 10, transition: { duration: 1 } };
    const itemVariants = {
        hidden: { opacity: 0, y: 0 },
        visible
    };

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            style={{ height: 'auto', overflow: 'hidden' }}
        >
            <Container sx={{ my: 3, p: 0, }}>
                <Grid container>
                    <Grid item lg={6} md={6} xs={12} sx={{ px: 3 }} ><motion.span className='light-title'
                        style={{
                            transform: isInView ? "none" : "translateY(50px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }}
                    >Bio</motion.span><br /></Grid>
                    <Grid item lg={6} md={6} xs={12} >
                        <motion.h1 className='bio-title'
                            style={{
                                marginTop: '70px',
                                transform: isInView ? "none" : "translateY(20px)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                            }}
                        >I am a Frontend Developer and React.js</motion.h1></Grid>
                </Grid>
                <Grid container sx={{ m: 0, p: 0 }}>
                    <Grid item lg={6} md={6} xs={12}>
                        <Container sx={{ m: 0, p: 0 }}>
                            <motion.div className='img-fit-div-bio'>
                                <motion.img className='shadow-on-img bio-img' src={img} style={{
                                    transform: isInView ? "none" : "translateY(20px)",
                                    opacity: isInView ? 1 : 0,
                                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                                }} alt='' />
                            </motion.div>
                        </Container>
                    </Grid>
                    <Grid item lg={6} md={6} xs={12}>
                        <motion.div style={{
                            transform: isInView ? "none" : "translateX(20px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }} className='bio-paragraph'>
                            <motion.text

                            >
                                I have <b> 2 years </b>of hands-on experience in creating and &nbsp;
                            </motion.text>
                            <motion.text >
                                implementing innovative web applications as a React.js&nbsp;
                            </motion.text>
                            <motion.text >
                                Developer. During my tenure at Wofo24 Technologies Pvt Ltd.&nbsp;
                            </motion.text>
                            <motion.text >  I honed my skills in React state management strategies,</motion.text>
                            <motion.text > designed REST calls for optimal user interface performance,</motion.text>
                            <motion.text > and tested scalable software products for reliability.</motion.text>

                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </motion.div>
    )
}
