import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const CardBack = props => {

    const { project } = props
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
            <div id="mask">
                <p>{project.title}</p>
                <p>{project.myRole}</p>
                <p>{project.technologies}</p>
                {/* <p>{project.summary}</p> */}
                <ul>
                {(project.details.length > 1) ?
                project.details.map((detail, idx) => {
                    return (
                        <li key={idx} >{detail}</li>
                    )
                })
                :
                <p>{project.details}</p>
                }
                </ul>
                <a href={project.github} style={{ color: "whitesmoke", fontFamily: "helvetica" }} >Github Repo</a>

                {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt commodi facilis repellat? Illum soluta delectus ipsa, sapiente mollitia fugiat quas expedita similique nobis ullam at sit suscipit voluptate pariatur labore.</p>
                <p>Stuff, stuff, stuff</p> */}
            </div>
        )
    }
}

export default CardBack
