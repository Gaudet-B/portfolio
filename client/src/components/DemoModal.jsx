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

    const { project } = props

    const [loading, setLoading] = useState(true)
    const [show, setShow] = useState(false)
    const [step, setStep] = useState(1)
    const [demos, setDemos] = useState(getImages())
    const [projectImages, setProjectImages] = useState([])

    const history = useHistory()

    const handleClose = () => {
        setShow(false)
        setStep(1)
        // setStep(demo)
    }

    const handleShow = e => {
        e.preventDefault()
        console.log(e.target.parentNode.id)
        setShow(true)
        setStep(e.target.parentNode.id)
    }

    const handleNext = () => {
        setStep(parseInt(step) + 1)
    }

    const handleBack = () => {
        setStep(parseInt(step) - 1)
    }

    const setImages = () => {
        if (project.title === "MyDraft Partner") {
            setProjectImages(demos.draft)
        } else {
            setProjectImages(demos.pizza)
        }
        // console.log(projectImages)
    }

    const loadData = async () => {
        await new Promise((res) => setTimeout(res, 500))
        setLoading(false)
    }

    useEffect(() => {
        loadData()
        setImages()
        // document.querySelector(".modal-dialog").setAttribute("style", "height: 100% !important;")
        // document.querySelector(".modal-content").setAttribute("style", "height: 100% !important;")
        // console.log(projectImages)
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
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", width: "100%" }}>
            {(projectImages) ? projectImages.map((image, idx) => {
                if (idx < 5) return(

                    <div key={idx} id={idx + 1} onClick={handleShow} className={styles.demo} style={{ backgroundImage: `url(${image})`, backgroundPosition: "center" }}>
                        <div className={styles.demoMask}></div>
                    </div>
                )
                else return(
                    null
                )
            }) : null
            }
        {/* <div onClick={handleShow} className={styles.demo} style={{ backgroundImage: `url(/static/media/rorschach.b0972cda.webp)` }}>
            <div className={styles.demoMask}> */}
            <Modal show={show} onHide={handleClose} className={styles.modalBody} style={{ backgroundImage: `url(${projectImages[step - 1]})` }} >
                {(step < 1 || step > projectImages.length) ? handleClose()
                :
                <Container className={styles.modalContainer} >
                    <Modal.Header style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", fontSize: "20pt", fontFamily: "Roboto" }}>
                        {/* <Button onClick={() => setStep(0)}> */}
                        <div className={styles.modalButton} onClick={handleClose}>
                            X
                        </div>
                    </Modal.Header>
                    <Modal.Body >
                        {/* <img src={projectImages[step - 1]} ></img> */}
                    </Modal.Body>
                    <Modal.Footer style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <div className={styles.modalButton} onClick={handleBack} >back</div>
                        <div className={styles.modalButton} onClick={handleNext} >next</div>
                    </Modal.Footer>
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
        </Modal>
        {/* </div>
        </div> */}
        </div>
    )
}
}

export default DemoModal
