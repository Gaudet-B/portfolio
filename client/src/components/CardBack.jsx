import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Demo from './Demo'
import styles from '../components/carousel.style.module.css'

const CardBack = props => {

    const { project, flipCard, flip } = props
    // const { details, demo } = project

    // const splitArr = (num, arr) => {
    //     let returnArr = []
    //     for (let i = 0; i < arr.length; i += num) {
    //         returnArr.push(arr.slice(i, i + num))
    //     }
    //     return returnArr
    // }

    // const technologies = "Python, Flask, Jinja2, Flask, Jinja2, Flask, Jinja2, Flask, Jinja2, Flask, Jinja2, Flask, Jinja2, Flask, Jinja2, Flask, Jinja2"
    // const techArr = splitArr(6, technologies)

    // const techs = project.technologies.toString()
    // const summary = project.summary.toString()

    if (!project) {
        return (
            <h3>UNDER CONSTRUCTION</h3>
        )
    } else {
        return (
            <div id="mask" style={{ height: "inherit", padding: "5px" }}>
                <p style={{ color: "rgba(0, 143, 17, .9)", fontSize: "2.25rem", marginTop: "10px", marginBottom: "20px"}}>{project.title}</p>
                <p><strong>My Role(s):</strong> {project.myRole}</p>
                <p><strong>Technologies Used:</strong> {project.technologies}</p>
                {/* <p>{project.summary}</p> */}
                <div style={{ height: "0px", border: "1px solid rgba(0, 143, 17, .9)", width: "65%", margin: "auto" }}></div>
                <div>
                    <p style={{fontSize: "14pt", marginTop: "10px", marginBottom: "5px", textDecoration: "underline" }}><strong>Application Details:</strong></p>
                    <ul style={{ textAlign: "left" }}>
                    {(project.details.length > 1) ?
                    project.details.map((detail, idx) => {
                        return (
                            <li key={idx} style={{ margin: "10px 0px" }}>{detail}</li>
                            )
                        })
                        :
                        <p>{project.details}</p>
                    }
                    </ul>
                </div>
                <div style={{ height: "0px", border: "1px solid rgba(0, 143, 17, .9)", width: "65%", margin: "auto" }}></div>
                <Demo />
                <p className={styles.flipLink} onClick={() => flipCard(flip)}><strong> || </strong> flip back to the front of card <strong> || </strong></p>
                {/* <a href={project.github} style={{ marginTop: "10px", position: "relative" }} >Github Repo</a> */}

                {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt commodi facilis repellat? Illum soluta delectus ipsa, sapiente mollitia fugiat quas expedita similique nobis ullam at sit suscipit voluptate pariatur labore.</p>
                <p>Stuff, stuff, stuff</p> */}
            </div>
        )
    }
}

export default CardBack
