import { useEffect, useState } from 'react'
import styles from '../components/projects.style.module.css'
import CustomCarousel from '../components/CustomCarousel'
// import Background from '../components/Background'


const Projects = () => {

    useState(() => {
        document.querySelector("html").setAttribute("style", "overflow-x: hidden; overflow-y: scroll;")
    })

    return (
        <div className={styles.bg}>
            {/* <Background /> */}
            <div id="projectsContainer" className={styles.projectsBackground}>
                <h2>P R O J E C T S</h2>
                <div style={{ width: "fit-content", margin: "auto" }}>
                    <CustomCarousel />
                </div>
            </div>
        </div>
    )
}

export default Projects
