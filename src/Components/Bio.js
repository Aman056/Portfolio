import { Grid, Container } from '@mui/material'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from "framer-motion"
import img from './img/getting_started_react_native_part_1_header_62b9349b47.jpg'
import data from '../data.json'

export default function Bio() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", ".9 1"],
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                color: '#222831',
                height: 'auto',
                overflow: 'hidden',
                scale: scaleProgress,
                opacity: opacityProgress
            }}
        >
            <Container sx={{ my: 3, p: 0 }}>
                {/* Header */}
                <Grid container>
                    <Grid item lg={6} md={6} xs={12} sx={{ px: 3 }}>
                        <motion.span className='light-title'
                            style={{
                                transform: isInView ? "none" : "translateY(50px)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                            }}
                        >
                            Bio
                        </motion.span>
                        <br />
                    </Grid>
                    <Grid item lg={6} md={6} xs={12}>
                        <motion.h1 className='bio-title'
                            style={{
                                marginTop: '70px',
                                transform: isInView ? "none" : "translateY(20px)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                            }}
                        >
                            I am {data.personalDetails.fullName}, a {data.personalDetails.designation}
                        </motion.h1>
                    </Grid>
                </Grid>

                {/* Bio Content */}
                <Grid container sx={{ m: 0, p: 0 }}>
                    {/* LEFT - Image */}
                    <Grid item lg={6} md={6} xs={12}>
                        <Container sx={{ m: 0, p: 0 }}>
                            <motion.div className='img-fit-div-bio'>
                                <motion.img
                                    className='shadow-on-img bio-img'
                                    src={img}
                                    style={{
                                        transform: isInView ? "none" : "translateY(20px)",
                                        opacity: isInView ? 1 : 0,
                                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                                    }}
                                    alt='profile'
                                />
                            </motion.div>
                        </Container>
                    </Grid>

                    {/* RIGHT - About & Experience */}
                    <Grid item lg={6} md={6} xs={12} px={2}>
                        <motion.div
                            style={{
                                transform: isInView ? "none" : "translateX(20px)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                            }}
                            className="bio-paragraph"
                        >
                            <motion.p>{data.aboutMe}</motion.p>

                            {data.employmentDetails.map((job, idx) => (
                                <motion.p key={idx}>
                                    I worked at <b>{job.companyName}</b> as a <b>{job.designation}</b> from <b>{job.dateOfJoining}</b> 
                                    {job.dateOfLeaving ? ` to ${job.dateOfLeaving}` : " - Present"}, 
                                    where I {job.responsibilities[0].toLowerCase()}.
                                </motion.p>
                            ))}
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </motion.div>
    )
}
