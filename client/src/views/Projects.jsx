import { useEffect, useState } from 'react'
import styles from '../components/projects.style.module.css'
import CustomCarousel from '../components/CustomCarousel'
import Header from '../components/Header'
import axios from 'axios'


const Projects = () => {

    const [loading, setLoading] = useState(true)
    const [projects, setProjects] = useState([])

    useEffect(() => {
        document.querySelector("html").setAttribute("style", "overflow-x: hidden; overflow-y: scroll;")
        const loadData = async () => {
            await new Promise((res) => setTimeout(res, 3000))
            setLoading(false)
        }
        loadData()
        axios.get("http://localhost:8000/api/projects")
            .then(res => {
                setProjects(res.data)
                console.log(projects[0])
            })
            .catch(err => console.log(err))
    }, [])

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
            <div className={styles.bg}>
                <div id="projectsContainer" className={styles.projectsBackground}>
                    <Header left="HOME" right="CONTACT"/>
                    <h2>P R O J E C T S</h2>
                    <div style={{ width: "fit-content", margin: "auto" }}>
                        <CustomCarousel projects={projects} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects
