import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import image1 from '../assets/rorschach_2.jpg'
import image2 from '../assets/rorschach.webp'
import image3 from '../assets/project_1.1_example.png'
import image4 from '../assets/project_2_example.png'

import styles from './demo.style.module.css'
import getImages from '../scripts/images.js'


const DemoModal = props => {

    const { demo, project } = props

    const [loading, setLoading] = useState(true)
    const [show, setShow] = useState(false)
    const [step, setStep] = useState(demo)
    const [demos, setDemos] = useState(getImages())

    const history = useHistory()

    const handleClose = () => {
        setShow(false)
        setStep(demo)
        // setStep(demo)
    }

    const handleShow = () => {
        setShow(true)
        setStep(demo)
    }

    const handleNext = () => {
        setStep(step + 1)
    }

    const handleBack = () => {
        setStep(step - 1)
    }

    var projectImages = []

    const setImages = () => {
        if (project.title === "MyDraft Partner") {
            projectImages = demos.draft 
        } else {
            projectImages = demos.pizza
        }
    }

    const loadData = async () => {
        await new Promise((res) => setTimeout(res, 6000))
        setLoading(false)
    }

    useEffect(() => {
        loadData()
        setImages()
        console.log(projectImages)
    }, [])

    if (loading) {
        return (
            <div>
                <div className={styles.spinner}></div>
                <div className={styles.logoSpinner}></div>
                <div className={styles.logo}></div>
            </div>
        )

    } else {

    return (
        <div>
            {projectImages.map((image, idx) => {
                return(
                    <div key={idx} onClick={handleShow} className={styles.demo} style={{ backgroundImage: `url(/static/media/rorschach.b0972cda.webp)` }}>
                        <div className={styles.demoMask}>{image}</div>
                    </div>
                )
            })}
        {/* <div onClick={handleShow} className={styles.demo} style={{ backgroundImage: `url(/static/media/rorschach.b0972cda.webp)` }}>
            <div className={styles.demoMask}> */}
            <Modal size="sm" show={show} onHide={handleClose} style={{ position: "absolute", transform: "translateY(-1000px) translateX(350px)", boxShadow: "0px 0px 0px 500px rgb(26, 26, 26, .9)", backgroundColor: "rgb(26, 26, 26, .9)" }}>
                {(step < 1 || step > 4) ? handleClose()
                :
                <Container>
                    <Modal.Header>
                        <Button onClick={() => setStep(0)}>
                            X
                        </Button>
                    </Modal.Header>
                    <Modal.Body>
                        {(step === 1) ?
                        <img src={image1} ></img>
                        :
                        (step === 2) ?
                        <img src={image2} ></img>
                        :
                        (step === 3) ?
                        <img src={image3} ></img>
                        :
                        (step === 4) ?
                        <img src={image4} ></img>
                        : null
                        }
                    </Modal.Body>
                </Container>


                // (step === 1) ?
                // <Container>
                //     <Modal.Header>
                //         <Button onClick={() => setStep(0)}>
                //             X
                //         </Button>
                //     </Modal.Header>
                //     <Modal.Body>
                //         {(demo === 1) ?
                //         <img src={image1} ></img>
                //         :
                //         (demo === 2) ?
                //         <img src={image2} ></img>
                //         :
                //         (demo === 3) ?
                //         <img src={image3} ></img>
                //         :
                //         (demo === 4) ?
                //         <img src={image4} ></img>
                //         :
                //         null
                //         }
                //     </Modal.Body>
                // </Container>
                // :
                // (step === 2) ?
                // <Container>
                //     <Modal.Header closeButton>
                //     </Modal.Header>
                //     <Modal.Body>

                //     </Modal.Body>
                // </Container>
                // :
                // (step === 3) ?
                // <Container>
                //     <Modal.Header closeButton>
                //     </Modal.Header>
                //     <Modal.Body>

                //     </Modal.Body>
                // </Container>
                // :
                // (step === 4) ?
                // <Container>
                //     <Modal.Header closeButton>
                //     </Modal.Header>
                //     <Modal.Body>

                //     </Modal.Body>
                // </Container>
                // :
                // <p>Loading...</p>
            }
            <Modal.Footer>
                <Button onClick={handleBack} >Back</Button>
                <Button onClick={handleNext} >Next</Button>
            </Modal.Footer>
        </Modal>
        {/* </div>
        </div> */}
        </div>
    )
}
}

export default DemoModal
