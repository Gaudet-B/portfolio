import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'
import { useHistory } from 'react-router-dom'
import image1 from '../assets/rorschach_2.jpg'
import image2 from '../assets/rorschach.webp'
import image3 from '../assets/project_1.1_example.png'
import image4 from '../assets/project_2_example.png'
import styles from './demo.style.module.css'


const DemoModal = props => {

    const { demo } = props

    const [show, setShow] = useState(false)
    const [step, setStep] = useState(demo)
    const history = useHistory()

    const handleClose = () => {
        setStep(1)
        setShow(false)
    }

    const handleShow = () => setShow(true)

    const handleNext = () => {
        setStep(step + 1)
    }

    const handleBack = () => {
        setStep(step - 1)
    }

    return (
        <div onClick={handleShow} className={styles.demo}>
            <div className={styles.demoMask}>
            <Modal show={show} onHide={handleClose}>
                {
                    (step <= 0) ?
                    handleClose()
                    :
                    (step > 4) ?
                    handleClose()
                    :
                    (step === 1) ?
                    <Container>
                        <Modal.Header closeButton>
                        </Modal.Header>
                        <Modal.Body>
                            {(demo === 1) ?
                            <img src={image1} ></img>
                            :
                            (demo === 2) ?
                            <img src={image2} ></img>
                            :
                            (demo === 3) ?
                            <img src={image3} ></img>
                            :
                            (demo === 4) ?
                            <img src={image4} ></img>
                            :
                            null
                            }
                        </Modal.Body>
                    </Container>
                    :
                    (step === 2) ?
                    <Container>
                        <Modal.Header closeButton>
                        </Modal.Header>
                        <Modal.Body>

                        </Modal.Body>
                    </Container>
                    :
                    (step === 3) ?
                    <Container>
                        <Modal.Header closeButton>
                        </Modal.Header>
                        <Modal.Body>

                        </Modal.Body>
                    </Container>
                    :
                    (step === 4) ?
                    <Container>
                        <Modal.Header closeButton>
                        </Modal.Header>
                        <Modal.Body>

                        </Modal.Body>
                    </Container>
                    :
                    <p>Loading...</p>
                }
                <Modal.Footer>
                    <button onClick={handleBack} >Back</button>
                    <button onClick={handleNext} >Next</button>
                </Modal.Footer>
            </Modal>
            </div>
        </div>
    )
}

export default DemoModal
