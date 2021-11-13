import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import project2img from '../assets/project_2_example.png'

const CardFront = props => {

    const { project } = props
    // console.log(project)

    // const techs = project.technologies.toString()
    // const summary = project.summary.toString()

    if (!project) {
        return (
            <h3>UNDER CONSTRUCTION</h3>
        )
    } else {
        return (
            <div id="mask">
                <img src={project2img} alt="placeholder" />
                <p style={{ fontSize: "2rem", fontWeight: "bold", margin: "18px 0px 14px 0px" }}>{project.title}</p>
                <p style={{ fontSize: "16pt", fontWeight: "bold", letterSpacing: ".18em", color: "rgba(255,255,255,.75)", marginTop: "0px" }}>{project.myRole}</p>
                <p style={{ fontSize: "16pt", fontWeight: "bold", marginBottom: "30px" }}> <span style={{ fontSize: "18pt" }}>&#123;</span> {project.languages} <span style={{ fontSize: "18pt" }}>&#125;</span></p>
                <p style={{ fontSize: "14pt", marginBottom: "30px" }}>{project.summary}</p>
                <a style={{ fontSize: "14pt", color: "whitesmoke", fontFamily: "helvetica"  }} href={project.github} >Github Repo</a>
                <p>( flip card for more project details )</p>

                {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt commodi facilis repellat? Illum soluta delectus ipsa, sapiente mollitia fugiat quas expedita similique nobis ullam at sit suscipit voluptate pariatur labore.</p>
                <p>Stuff, stuff, stuff</p> */}
            </div>
        )
    }
}

export default CardFront
