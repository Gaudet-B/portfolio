import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const CarouselContent = props => {

    const { project } = props
    // console.log(project)

    const techs = project.technologies.toString()
    const summary = project.summary.toString()

    return (
        <div id="mask">
            <h4>{project.title}</h4>
            <h5>{project.myRole}</h5>
            <h5>{techs}</h5>
            <p>{summary}</p>
            <a href={project.github} >{}</a>

            {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt commodi facilis repellat? Illum soluta delectus ipsa, sapiente mollitia fugiat quas expedita similique nobis ullam at sit suscipit voluptate pariatur labore.</p>
            <p>Stuff, stuff, stuff</p> */}
        </div>
    )
}

export default CarouselContent
