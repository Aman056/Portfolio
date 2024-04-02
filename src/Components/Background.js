import React from 'react'
import { Grid, Container } from '@mui/material'
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from 'framer-motion';
import img from './img/getting_started_react_native_part_1_header_62b9349b47.png'
function Background() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
        >
            <Container sx={{ my: 3, p: 0, }} className='bio-container'>
                <Grid container>
                    <Grid item lg={4} md={12} xs={12} sx={{ px: 3 }} >
                        <motion.h1 className='bio-title'
                            style={{
                                marginTop: '130px',
                                transform: isInView ? "none" : "translateX(-200px)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                            }}
                        >
                            Background
                        </motion.h1><br />

                        <motion.div
                            style={{
                                // marginTop: '130px',
                                transform: isInView ? "none" : "translateY(20px)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                            }}
                            className='background-div-bio'>
                            <motion.span style={{ fontWeight: "600" }}>Wofo24 Technology Private Limited.</motion.span> &nbsp;
                            <motion.span>Gaziabad</motion.span><br />
                            <text>React Developer   &nbsp; 2022-24 </text><br />
                            <hr />
                            <motion.span style={{ fontWeight: "600" }}>DUCAT</motion.span> &nbsp;
                            <motion.span>Noida Sector 15</motion.span><br />
                            <text>MERN Stack Developer   &nbsp; 2022-july 2022-Dec </text><br />
                            <hr />
                            <motion.span style={{ fontWeight: "600" }}>Freelance, React Developer</motion.span> &nbsp;<br />
                            {/* <motion.span>Noida Sector 15</motion.span><br/> */}
                            <text>React Developer   &nbsp; 2024-Feb to Present </text>

                        </motion.div>
                    </Grid>
                    <Grid item lg={4} md={12} xs={12} sx={{ px: 3 }} >
                        <motion.h1 className='bio-title'
                            style={{
                                marginTop: '130px',
                                transform: isInView ? "none" : "translateY(-200px)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                            }}

                        >Expertise</motion.h1>
                        <motion.div
                            style={{
                                // marginTop: '130px',
                                transform: isInView ? "none" : "translateY(20px)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                            }}
                            className='background-div-bio'>

                            <ul style={{ paddingTop: '30px' }}>
                                <li>React.js</li>
                                <li>Redux.js</li>
                                <li>Javascript.js</li>
                                <li>MaterialUi</li>
                                <li>Tailwind Css</li>
                                <li>Bootstrap</li>
                                <li>HTML</li>
                                <li>CSS</li>
                            </ul>

                        </motion.div>
                    </Grid>
                    <Grid item lg={4} md={12} xs={12}>
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
                </Grid>

            </Container>
        </motion.div>
    )
}

export default Background