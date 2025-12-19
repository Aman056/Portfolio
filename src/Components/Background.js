import React, { useRef } from 'react'
import { Grid, Container } from '@mui/material'
import { motion, useDragControls, useInView, useTransform, useScroll, useAnimationFrame } from "framer-motion"
import data from '../data.json'

function Background() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const controls = useDragControls();
    const refBox = useRef(null);

    useAnimationFrame((t) => {
        const rotate = Math.sin(t / 10000) * 200;
        const y = (1 + Math.sin(t / 1000)) * -50;
        if (refBox.current) {
            refBox.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
        }
    });

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", ".9 1"],
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
            style={{
                background: "#EEEEEE",
                color: '#393E46',
                scale: scaleProgress,
                opacity: opacityProgress
            }}
            ref={ref}
        >
            <Container sx={{ my: 3, p: 0 }} className='bio-container'>
                <Grid container>
                    {/* LEFT SIDE - Background / Experience */}
                    <Grid item lg={4} md={12} xs={12} sx={{ px: 3 }}>
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
                                transform: isInView ? "none" : "translateY(20px)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                            }}
                            className='background-div-bio'
                        >
                            {data.employmentDetails.map((job, index) => (
                                <div key={index}>
                                    <motion.span style={{ fontWeight: "600" }}>
                                        {job.companyName}
                                    </motion.span> &nbsp;
                                    <motion.span>{job.workLocation}</motion.span><br />
                                    <text>
                                        {job.designation} &nbsp; {job.dateOfJoining} - {job.dateOfLeaving || "Present"}
                                    </text>
                                    <br />
                                    <hr />
                                </div>
                            ))}
                        </motion.div>
                    </Grid>

                    {/* MIDDLE - Expertise / Skills */}
                    <Grid item lg={3} md={12} xs={12} sx={{ px: 3 }}>
                        <motion.h1 className='bio-title'
                            style={{
                                marginTop: '130px',
                                transform: isInView ? "none" : "translateY(-200px)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                            }}
                        >
                            Expertise
                        </motion.h1>

                        <motion.div
                            style={{
                                transform: isInView ? "none" : "translateY(20px)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                            }}
                            className='background-div-bio'
                        >
                            <ul style={{ paddingTop: '30px' }}>
                                {data.skills.map((skill, idx) => (
                                    <li key={idx}>{skill}</li>
                                ))}
                            </ul>
                        </motion.div>
                    </Grid>

                    {/* RIGHT SIDE - Rotating Cube */}
                    <Grid item lg={5} md={12} xs={12}>
                        <Container sx={{ m: 0, p: 0, display: 'flex', justifyContent: 'start', minHeight: "92vh", alignItems: 'center' }}>
                            <motion.div className='img-fit-div-bio'>
                                <div className="container" style={{ zIndex: '000' }}>
                                    <div className="cube" ref={refBox}>
                                        {data.skills.slice(0, 6).map((skill, i) => (
                                            <div key={i} className={`side ${["front", "left", "right", "top", "bottom", "back"][i]}`}>
                                                <strong className='cube-content-text'>{skill}</strong>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        </motion.div>
    )
}

export default Background
