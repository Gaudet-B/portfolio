import { useEffect, useState } from 'react'
import styles from '../components/landing.style.module.css'
import example1 from '../assets/project_1.1_example.png'
import example2 from '../assets/project_2_example.png'
import example3 from '../assets/rorschach_2.jpg'
import Carousel from 'react-bootstrap/Carousel'

const ProjectCarousel = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex)
    }

    useEffect(() => {
        let style = " d-flex flex-row justify-content-around"
        let flex = "d-flex"
        let container = document.getElementsByClassName("carousel-inner")
        let containers = document.getElementsByClassName("carousel-item")
        let classArr = container[0].className.split(" ")
        if (!classArr.includes(flex)) {
            container[0].className += style
        }
        for (let i = 0; i < containers.length; i++) {
            let containerArr = containers[i].className
            if (!containerArr.includes(flex)) {
                containers[i].className += style
            }
            
        }

        // for (const container in containers) {
        //     console.log(container)
        //     let stringArr = container.className.split(" ")
        //     !stringArr.includes(style) ? container.className += style : container.className = container.className
        // }
    })

    const flipCard = e => {
        var html = ""
        var htmlNew = "<div class='m-5 p-3 d-flex flex-column'><div class='d-flex flex-column text-center'>    <h5>PROJECT TITLE</h5>    <h6 class='my-2'>Technologies used, etc, etc</h6></div><p class='fst-italic'>Take these bullets straight from resume:</p><ul class='my-2'>    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium cumque voluptate eum illum! Quidem maxime impedit, dicta veniam nulla eveniet officia obcaecati doloribus quis quos, quibusdam quam fuga, dolore delectus.</li>    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque illum ducimus est, iusto exercitationem nihil. At explicabo asperiores, expedita similique neque repellendus labore ea quas eaque, ab fugiat, quis quo!</li>    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptates natus sint numquam saepe repellat molestias eligendi quasi, cumque beatae odit aliquid deleniti enim ad exercitationem. Asperiores recusandae odit dolorem.</li></ul><p class='fst-italic'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil quibusdam ex optio alias animi distinctio, magni, dolorum quod necessitatibus aperiam nostrum explicabo id rerum, commodi porro quas modi eius autem!</p></div>"
        let currentClass = e.target.className
        let classArr = currentClass.split(" ")
        console.log(classArr)
        if (!classArr.includes("flip")) {
            html = e.target.innerHTML
            console.log(html)
            e.target.className = "carousel-item bg-dark active flip"
            setTimeout(() => {
                let card = document.getElementsByClassName("carousel-item active")
                e[0].innerHTML = htmlNew
            }, 1500)
        } else {
            e.setAttribute("class", "carousel-item bg-dark active reverse")
            setTimeout(() => e.innerHTML = html, 1500)
        }
    }

    return (
        <div className="py-5">

            <Carousel activeIndex={index} interval={null} onSelect={handleSelect} style={{ height: "85vh", width: "90vw", margin: "auto" }}>
                <Carousel.Item interval={null} onclick={flipCard}>
                    <img
                        className="d-block w-100"
                        src={example1}
                        alt="First slide"
                        style={{  height: "500px", width: ""  }}
                    />
                    <Carousel.Caption>
                        <h5 className="display-5 project-title">PROJECT TITLE</h5>
                        <div className={styles.background}>
                            <h4 className="my-4">Technologies used, etc, etc</h4>
                            <p>Short summary of the project</p>
                            <p>with full details on back (and github)</p>
                            <div className="d-flex flex-row justify-content-evenly fs-4 mb-4" style={{ width: "50%", margin: "auto" }}>
                                <a className="link link-light text-decoration-none" href="#">GitHub</a>
                                |
                                <a className="link link-light text-decoration-none" href="#">Demo</a>
                            </div>
                        </div>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={null}>
                    <img
                        className="d-block w-100"
                        src={example2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={null}>
                    <img
                        className="d-block w-100"
                        src={example3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    )
}

// return (
//     <div class="container mt-5">
//         {/* CAROUSEL */}
//         <div id="carousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="false" style={{ height: "85vh", width: "70vw", margin: "auto" }}>
//             <div className="carousel-indicators justify-content-evenly" style={{ width: "250px", margin: "auto" }}>
//                 <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" style={{ width: "50px", height: "8px" }} ></button>
//                 <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 2" style={{ width: "50px", height: "8px" }} ></button>
//                 <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 3" style={{ width: "50px", height: "8px" }} ></button>
//             </div>

//             <div className="carousel-inner d-flex flex-row justify-content-around" style={{ height: "inherit" }}>
//             {/* SLIDE 1 */}
//                 <div className="carousel-item bg-dark active" style={{ height: "inherit", width: "549px", margin: "auto", border: "5px double whitesmoke", borderRadius: "6% / 5%" }} onclick={flipCard}>
//                     <img src={example1} alt="example2" className="d-block w-100" style={{ height: "400px", width: "549px" }} />
//                     <div className="carousel-caption d-none d-md-block">
//                         <h5 className="display-5 project-title">PROJECT TITLE</h5>
//                         <div className="background">
//                             <h4 className="my-4">Technologies used, etc, etc</h4>
//                             <p>Short summary of the project</p>
//                             <p>with full details on back (and github)</p>
//                             <div className="d-flex flex-row justify-content-evenly fs-4 mb-4" style={{ width: "50%", margin: "auto" }}>
//                                 <a className="link link-light text-decoration-none" href="#">GitHub</a>
//                                 |
//                                 <a className="link link-light text-decoration-none" href="#">Demo</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* SLIDE 2 */}
//                 <div className="carousel-item bg-dark active" style={{ height: "inherit", width: "549px", margin: "auto", border: "5px double whitesmoke", borderRadius: "6% / 5%" }} onclick={flipCard}>
//                     <img src={example1} alt="example3" className="d-block w-100" style={{ height: "400px", width: "549px" }} />
//                     <div className="carousel-caption d-none d-md-block">
//                         <h5 className="display-5 project-title">PROJECT TITLE</h5>
//                         <div className="background">
//                             <h4 className="my-4">Technologies used, etc, etc</h4>
//                             <p>Short summary of the project</p>
//                             <p>with full details on back (and github)</p>
//                             <div className="d-flex flex-row justify-content-evenly fs-4 mb-4" style={{ width: "50%", margin: "auto" }}>
//                                 <a className="link link-light text-decoration-none" href="#">GitHub</a>
//                                 |
//                                 <a className="link link-light text-decoration-none" href="#">Demo</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* SLIDE 3 */}
//                 <div className="carousel-item bg-dark active" style={{ height: "inherit", width: "549px", margin: "auto", border: "5px double whitesmoke", borderRadius: "6% / 5%" }} onclick={flipCard}>
//                     <img src={example1} alt="example1" className="d-block w-100" />
//                     <div className="carousel-caption d-none d-md-block">
//                         <h5 className="display-5 project-title">PROJECT TITLE</h5>
//                         <div className="background">
//                             <h4 className="my-4">Technologies used, etc, etc</h4>
//                             <p>Short summary of the project</p>
//                             <p>with full details on back (and github)</p>
//                             <div className="d-flex flex-row justify-content-evenly fs-4 mb-4" style={{ width: "50%", margin: "auto" }}>
//                                 <a className="link link-light text-decoration-none" href="#">GitHub</a>
//                                 |
//                                 <a className="link link-light text-decoration-none" href="#">Demo</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//             {/* LEFT / RIGHT CONTROLS */}
//             <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
//                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                 <span className="visually-hidden">Previous</span>
//             </button>
//             <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
//                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                 <span className="visually-hidden">Next</span>
//             </button>

//         </div>
//     </div>
// )
// }

export default ProjectCarousel
