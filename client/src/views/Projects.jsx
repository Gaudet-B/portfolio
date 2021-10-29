import { useEffect, useState } from 'react'
import styles from '../components/style.module.css'
import ProjectCarousel from '../components/ProjectCarousel'


const Projects = () => {

    useEffect(() => {
        const link = document.createElement("link")
        link.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        link.rel = "stylesheet"
        link.integrity = "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        link.crossOrigin = "anonymous"
        document.body.appendChild(link)

        // const script = document.createElement("script")
        // script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        // script.integrity = "sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        // script.crossOrigin = "anonymous"
        // document.body.appendChild(script)

        document.querySelector("html").setAttribute("class", "bg-dark")
    })

    return (
        <div className="bg-dark text-light p5">
            <ProjectCarousel />
        </div>
    )
}

export default Projects
