import { useEffect, useState } from 'react'
import styles from '../components/projects.style.module.css'
import CustomCarousel from '../components/CustomCarousel'


const Projects = () => {

    return (
        <div id="projectsContainer" className={styles.projectsBackground}>
            <h2>P R O J E C T S</h2>
            <div style={{ width: "fit-content", margin: "auto" }}>
                <CustomCarousel />
            </div>
        </div>
    )
}

export default Projects
