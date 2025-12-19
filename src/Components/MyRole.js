import { Container, Grid } from '@mui/material'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from "framer-motion"
import data from '../data.json'
import Me from './img/left.png'

export default function MyRole() {
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
                scale: scaleProgress,
                opacity: opacityProgress
            }}
        >
            <Container 
                style={{
                    background: 'rgb(68 144 165 / 15%)',
                    color: '#222831',
                    height: 'auto',
                    overflow: 'hidden',
                }} 
                className='' 
                sx={{ my: 3, py: 1 }}
            >
                <Grid container sx={{ my: 10 }}>
                    {/* LEFT SIDE - Education Details */}
                    <Grid item lg={6} md={6} sm={12} sx={{ display: 'grid', placeContent: 'center' }}>
                        <div style={{ padding: '0px 30px' }}>
                            <motion.h1
                                style={{
                                    transform: isInView ? "none" : "translateY(20px)",
                                    opacity: isInView ? 1 : 0,
                                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                                }}
                                className='bio-title'
                            >
                                Education
                            </motion.h1>

                            {data.education.map((edu, idx) => (
                                <motion.p 
                                    key={idx} 
                                    style={{ fontSize: '20px', marginBottom: '25px' }}
                                >
                                    {edu.degree && (
                                        <>
                                            <b>{edu.degree}</b> in {edu.university} <br />
                                            {edu.cgpa && <>Achieved a CGPA of <b>{edu.cgpa}</b><br /></>}
                                        </>
                                    )}
                                    {edu.course && (
                                        <>
                                            <b>{edu.course}</b> at {edu.institute}<br />
                                            <i>{edu.duration}</i><br />
                                        </>
                                    )}
                                    {edu.level && (
                                        <>
                                            <b>{edu.level}</b> from {edu.school}<br />
                                            {edu.score && <>Score: {edu.score}</>}
                                        </>
                                    )}
                                </motion.p>
                            ))}
                        </div>
                    </Grid>

                    {/* RIGHT SIDE - Image */}
                    <Grid item lg={6} md={6} sm={12}>
                        <Container sx={{ display: 'grid', placeContent: 'end' }}>
                            <motion.div className='image-circle shadow-on-img'>
                                <img 
                                    src={Me}
                                    style={{
                                        transform: isInView ? 'none' : 'translateY(50px)',
                                        opacity: isInView ? 1 : 0,
                                        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                                    }} 
                                    height={400} 
                                    alt='Education Illustration' 
                                />
                            </motion.div>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        </motion.div>
    )
}
