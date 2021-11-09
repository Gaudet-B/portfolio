import { useEffect, useState } from 'react'
import styles from '../components/projects.style.module.css'
import CustomCarousel from '../components/CustomCarousel'


const Projects = () => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        document.querySelector("html").setAttribute("style", "overflow-x: hidden; overflow-y: scroll;")
        const loadData = async () => {
            await new Promise((res) => setTimeout(res, 3000))
            setLoading(false)
        }
        loadData()
    })

    if (loading) {
        return (
            <div className={styles.loadingBackground} >
                <div className={styles.loadingMask}>
                    <div className={styles.spinner}></div>
                    <div className={styles.logoSpinner}></div>
                    <div className={styles.logo}>BG</div>
                </div>
            </div>
        )
    } else {
        return (
            <div className={styles.bg}>
                <div id="projectsContainer" className={styles.projectsBackground}>
                    <h2>P R O J E C T S</h2>
                    <div style={{ width: "fit-content", margin: "auto" }}>
                        <CustomCarousel />
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects
