import React from 'react'
import { motion } from 'framer-motion';
import { Container, Box, Grid } from '@mui/material';
import { useRef } from "react";
import TypeWriterEffect from 'react-typewriter-effect';
import { HandleOpen } from '../../Redux/Slices/FormSlice';
import data from '../../data.json'

import { useDispatch } from 'react-redux';
export default function LandingDesktopPage() {
   
    const ref = useRef(null);
    const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };
    const dispatch = useDispatch()
    const HandleOpenDialog = () => {
        dispatch(HandleOpen())
    }
    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible
    };
    return (
        <Grid sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' } }}>
            <div className='main-title-div-for-d' >
                <Container className='content-div'>
                    <motion.span className='portfolio-title' variants={itemVariants}>portfolio</motion.span><br />
                    <div className='title-div'>
                        <Box sx={{ mt: 4, pt: 6, display: 'flex', justifyContent: "center" }}>
                            <motion.div
                                className="box"
                                animate={{
                                    scale: [1, 2, 2, 1, 1],
                                    rotate: [0, 0, 180, 180, 0],
                                    borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                                }}
                                transition={{
                                    duration: 2,
                                    ease: "easeInOut",
                                    times: [0, 0.2, 0.5, 0.8, 1],
                                    repeat: Infinity,
                                    repeatDelay: 1
                                }}
                            >

                            </motion.div>
                            <motion.span className='title'

                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.3,
                                    ease: [0, 0.71, 0.2, 1.01],
                                    scale: {
                                        type: "spring",
                                        damping: 5,
                                        stiffness: 100,
                                        restDelta: 0.001
                                    }
                                }}
                                variants={itemVariants}>
                               {data.personalDetails.fullName}
                            </motion.span>
                        </Box>
                    </div>
                </Container>
            </div>
            <Container sx={{  mt: 1, display: 'flex', justifyContent: 'space-around', alignItems: 'center', }}>
                <motion.span style={{display:'block', width:"400px"}} className='portfolio-title' variants={itemVariants}>

                <TypeWriterEffect
                    textStyle={{
                        fontSize: "17.9px",
                        fontFamily: "Courier",
                        letterSpacing: "3px",
                        textTransform: "uppercase",
                        fontWeight: 500
                    }}
                    startDelay={2000}
                    cursorColor="#3F3D56"
                    repeat
                    multiText={[
                        'React.js Developer,',
                        'Javascript Developer,',
                        'Frontend Developer',
                        'Software  Engineer'
                      
                    ]}
                    multiTextDelay={1000}
                    typeSpeed={30}
                />
                  
                  
                  </motion.span>

               
                <motion.a
                    style={{ textDecoration: 'none', color: 'black' }}
                    className='portfolio-title-email'
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    variants={itemVariants}
                    onClick={HandleOpenDialog}
                >
                     <TypeWriterEffect
                    textStyle={{
                        fontSize: "17.9px",
                        fontFamily: "Courier",
                        letterSpacing: "3px",
                        textTransform: "uppercase",
                        fontWeight: 500
                    }}
                    startDelay={2000}
                    cursorColor="#3F3D56"
                    repeat
                    multiText={[
                        'Hi There,',
                        'Click Me',
                        'Mail Me!',
                    ]}
                    multiTextDelay={1000}
                    typeSpeed={30}
                />
                </motion.a>


            </Container>
        </Grid>
    )
}
