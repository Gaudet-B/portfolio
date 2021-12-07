import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import project2img from '../assets/project_2_example.png'
import project1img from '../assets/project_1.1_example.png'
import styles from '../components/carousel.style.module.css'

const CardFront = props => {

    const { project, flipCard, flip } = props
    // console.log(project)
    
    // const techs = project.technologies.toString()
    // const summary = project.summary.toString()

    const selectPhoto = project => {
        if (project === "MyDraft Partner") return project2img
        else if (project === "P!ZZA") return project1img
        else if (project === "Myth Game") return project2img
        else if (project === "briangaudet.com") return project2img
    }

    const source = selectPhoto(project.title)
    
    if (!project) {
        return (
            <h3>UNDER CONSTRUCTION</h3>
        )
    } else {
        return (
            <div id="mask" style={{ padding: "5px" }}>
                <img src={project.mainImage} alt="placeholder" />
                <p style={{ fontSize: "2rem", fontWeight: "bold", margin: "18px 0px 14px 0px" }}>{project.title}</p>
                <p style={{ fontSize: "16pt", fontWeight: "bold", letterSpacing: ".18em", color: "rgba(255,255,255,.75)", marginTop: "0px" }}>{project.myRole}</p>
                <p style={{ fontSize: "16pt", fontWeight: "bold", marginBottom: "30px", color: "rgba(0, 143, 17, .9)" }}><strong style={{ fontSize: "18pt", color: "rgb(0, 214, 25)" }}>&#123;</strong> {project.languages} <strong style={{ fontSize: "18pt", color: "rgb(0, 214, 25)" }}>&#125;</strong></p>
                <p style={{ fontSize: "14pt", margin: "0px 5px 20px 5px" }}>{project.summary}</p>
                <a href={project.github} target="_blank" >Github Repo</a>
                <p className={styles.flipLink} onClick={() => flipCard(flip)}><strong> || </strong> flip card for more project details <strong> || </strong></p>

                {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt commodi facilis repellat? Illum soluta delectus ipsa, sapiente mollitia fugiat quas expedita similique nobis ullam at sit suscipit voluptate pariatur labore.</p>
                <p>Stuff, stuff, stuff</p> */}
            </div>
        )
    }
}

export default CardFront
