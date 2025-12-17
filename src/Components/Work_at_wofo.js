import React, { useRef } from 'react'
import { Grid, Container } from '@mui/material'
import { useInView, motion } from 'framer-motion'
import data from '../data.json'
import './Style/Work.css'

function Work_Wofo() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const visible = { opacity: 1, y: 10, transition: { duration: 1 } };
    const itemVariants = {
        hidden: { opacity: 0, y: 0 },
        visible
    };

    // ✅ Find Wofo24 Technology details from JSON
    const wofoCompany = data.employmentDetails.find(
        (job) => job.companyName === "Wofo24 Technology"
    );

    // ✅ Pick one project related to Wofo (example: JuzCare Pharmacy POS)
    const wofoProject = data.projects.find(
        (proj) => proj.name.includes("JuzCare") || proj.name.includes("POS") || proj.name.includes("HKL")
    );

    return (
        <motion.div
            ref={ref}
            style={{ background: '#EEEEEE', color: '#222831' }}
        >
            <Container sx={{ my: 3 }} className='bio-container'>
                <div className='-sticky-class'>
                    <Container
                        style={{
                            transform: isInView ? "none" : "translateY(-200px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }}
                        className='work-exp'
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 200 }}
                            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 200 }}
                            transition={{ duration: 1.2, delay: 1 }}
                            className='light-title-work'
                        >
                            Worked as a {wofoCompany.designation} at {wofoCompany.companyName}.
                        </motion.span>
                    </Container>
                </div>

                {/* Main Grid */}
                <Grid container sx={{ marginTop: '75px' }}>
                    {/* LEFT SIDE - Role & Responsibilities */}
                    <Grid item lg={5} md={12} xs={12} sx={{ px: 3 }}>
                        <motion.h1
                            style={{
                                transform: isInView ? "none" : "translateX(-220px)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                                marginTop: '40px',
                                fontSize: '60px',
                                lineHeight: '70px'
                            }}
                            className='bio-title'
                            variants={itemVariants}
                        >
                            Role
                        </motion.h1>

                        <motion.p
                            style={{
                                fontSize: '30px',
                                marginTop: '20px',
                                transform: isInView ? "none" : "translateY(20px)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                            }}
                        >
                            {wofoCompany.designation}
                        </motion.p>

                     
                    </Grid>

                    {/* RIGHT SIDE - Project Details */}
                    <Grid item lg={7} md={12} xs={12} sx={{ px: 3 }}>
                        {/* <motion.h1
                            className='bio-title'
                            style={{
                                marginTop: '40px',
                                fontSize: '50px',
                                lineHeight: '60px',
                                transform: isInView ? "none" : "translateX(100px)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                            }}
                        >
                            {wofoProject?.name || "Project"}
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            style={{
                                transform: isInView ? "none" : "translateX(-50px)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                                marginTop: '25px',
                                fontSize: '20px'
                            }}
                        >
                            {wofoProject?.description}
                        </motion.p> */}
                           <motion.h2
                            style={{
                                marginTop: '30px',
                                fontSize: '28px',
                                fontWeight: '600'
                            }}
                        >
                            Responsibilities
                        </motion.h2>

                        <ul style={{ fontSize: '28px', lineHeight: '28px' }}>
                            {wofoCompany.responsibilities.map((resp, i) => (
                                <motion.li
                                    key={i}
                                    style={{
                                        transform: isInView ? "none" : "translateY(20px)",
                                        opacity: isInView ? 1 : 0,
                                        transition: `all 0.7s ease ${i * 0.2}s`
                                    }}
                                >
                                    {resp}
                                </motion.li>
                            ))}
                        </ul>
                    </Grid>
                </Grid>
            </Container>
        </motion.div>
    )
}

export default Work_Wofo
