import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Form from '../components/Form'
import styles from '../components/contact.style.module.css'


const Contact = () => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadData = async () => {
            await new Promise((res) => setTimeout(res, 2000))
            setLoading(false)
        }
        document.querySelector("html").setAttribute("style", "overflow-y: scroll;")
        loadData()
    })

    if (loading) {
        return (
            <div className={styles.loadingBackground} >
                <div className={styles.loadingMask}>
                    <div className={styles.spinner}></div>
                    <div className={styles.logoSpinner}></div>
                    <div className={styles.logo}></div>
                </div>
            </div>
        )

    } else {
        return (
            <div className={styles.bg} >
                <div className={styles.contactBackground}>
                    <Header left="PROJECTS" right="RESUME"/>
                    <h2>Contact Brian</h2>
                    <Form />
                </div>
            </div>
        )
    }
}

export default Contact
