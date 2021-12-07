import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'


const Edit = () => {

    const [loading, setLoading] = useState(true)
    const [formState, setFormState] = useState({})
    const [detail, setDetail] = useState("")
    const [details, setDetails] = useState([])
    const [project, setProject] = useState({})
    const [image, setImage] = useState()
    const [imageBinary, setImageBinary] = useState()
    const [imageUrl, setImageUrl] = useState()
    const [detailInputs, setDetailInputs] = useState(["details"])

    const {id} = useParams()

    const history = useHistory()

    const instance = axios.create({
        withCredentials: true,
        baseURL: "http://localhost:8000/api"
    })

    useEffect(() => {

        instance.get(`/projects/${id}`)
            .then(res => {
                console.log(res.data.mainImage)
                let buffer = res.data.mainImage
                console.log(buffer)
                let base64 = Buffer.from(res.data.mainImage.data.join(""), "binary").toString("base64")
                setLoading(!loading)
                setProject(res.data)
                setImageUrl(base64)
                console.log(base64)
                // console.log(res.data.mainImage.data)
                setImageBinary(res.data.mainImage.data)
                // const binaryFlat = imageBinary.join("")
                // console.log(binaryFlat)
                setTimeout(() => {
                    let src = getSource(res.data.mainImage.data)      // <-- use .join("") to flatten
                    console.log(src)
                    // setImageUrl(src)
                }, 2000)
                // console.log(imageBinary)
                if (!project) {
                    setTimeout(() => {
                        setProject(res.data)
                        displayDetails(project)
                    }, 2000)
                    // setTimeout(() => {
                    //     displayDetails(project)
                    //     let src = getSource(project.mainImage.data)
                    //     console.log(src)
                    //     setImageUrl(src)
                    //     console.log(`URL -> ${imageUrl}`)
                    // }, 4000);
                } else {
                    displayDetails(project)
                    // let src = getSource(project.mainImage.data)
                    // console.log(src)
                    // setImageUrl(src)
                    // console.log(`URL -> ${imageUrl}`)
                }
            })
            .catch(err => console.log(err))
        
        const link = document.createElement("link")
        link.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        link.rel = "stylesheet"
        link.integrity = "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        link.crossOrigin = "anonymous"
        document.body.appendChild(link)

        document.querySelector("html").setAttribute("style", "overflow: auto;") 

        return () => {
            document.body.removeChild(link)
        }
    }, [])

    const displayDetails = (project) => {
        console.log(project)
        // console.log(project.mainImage)
        for (let i = 0; i < project.details.length; i++) {
            setDetailInputs(detailInputs => [...detailInputs, "details"])
            setDetails(details => [...details, project.details[i]])
        }
    }

    const handleFormChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const handleDetailChange = e => {
        setDetail(e.target.value)
    }

    const handleDetailInputs = e => {
        // if (e.target.value != "") return
        setDetailInputs(detailInputs => [...detailInputs, e.target.name])
    }

    const handleDetailArray = e => {
        if (details.includes(e.target.value) || e.target.value === "") return
        setDetails(details => [...details, e.target.value])
        setFormState({...formState, details: details})
    }

    const handleImageChange = e => {
        console.log(e.target.files[0].name)
        let object = e.target.files[0]
        console.log(object)
        // for (const key in object) {
        //     console.log(`${key}: ${object[key]}`)
        //     setImage({[key]: object[key]})
        //     console.log(image)
        // }
        // let entries = Object.entries(object)
        // console.log(entries)
        // entries.forEach(entry => {
        //     console.log(`${entry[0]}: ${entry[1]}`)
        //     setImage({...image, [entry[0]]: entry[1]})
        // })
        // setImage({...e.target.files[0]})
        setImage(object)
        console.log(image)
        setFormState({...formState, mainImage: image})
    }

    const handleUpdate = e => {
        e.preventDefault()
        console.log(`update`)
        const config = { headers: {'content-type': 'multipart/form-data'}}
        let data = new FormData()
        for (const key in formState) {
            // console.log(`${key}: ${formState[key]}`)
            data.append(`${key}`, `${formState[key]}`)
        }
        console.log(data)
        // data.append("headers", {"content-type": "multipart/form-data"})
        // setFormState({...formState, mainImage: })
        console.log(`form: ${formState.mainImage}`)
        instance.put(`/projects/update/${id}`, data, config)
            .then(res => {
                console.log(`RESPONSE: ${res}`)
                // setFormState({})
            })
            .catch(err => {
                console.log(`ERROR: ${err.response.data}`)
            })
    }

    const handleDelete = (id) => {
        instance.delete(`/projects/delete/${id}`)
            .then(res => console.log("deleted"))
            .catch(err => console.log("error"))
    }

    const handleClick = (id) => {
        history.push(`/administrators`)
    }

    const getSource = binary => {
        let base64
        // console.log(`***binary***: ${binary}`)
        let blob = new Blob(binary, {type: "image/png"})
        // console.log(blob)
        let reader = new FileReader()
        reader.readAsDataURL(blob)
        reader.onloadend = () => {
            base64 = reader.result
            // console.log(base64)
            // setImageUrl(base64)
            // console.log(imageUrl)
            return base64
        }
    }

    if (!loading) {

    return (
        <div className="bg-dark p-4 text-center">
            <h1 className="display-5">{project.title}</h1>
            <table className="table">
                <thead className="bg-secondary text-light">
                    <tr style={{ borderBottom: "8px solid transparent" }}>
                        <th style={{ borderRight: "1px solid whitesmoke" }}>Role(s)</th>
                        <th style={{ borderRight: "1px solid whitesmoke" }}>Languages</th>
                        <th style={{ borderRight: "1px solid whitesmoke" }}>Technologies</th>
                        <th style={{ borderRight: "1px solid whitesmoke" }}>Summary</th>
                        <th style={{ borderRight: "1px solid whitesmoke" }}>Details</th>
                        <th style={{ borderRight: "1px solid whitesmoke" }}>Demo</th>
                        <th style={{ borderRight: "1px solid whitesmoke" }}>image</th>
                        <th style={{ borderRight: "1px solid whitesmoke" }}>Main Image</th>
                        <th style={{ borderRight: "1px solid whitesmoke" }}>Github</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody className="bg-secondary text-light text-break" style={{ borderBottom: "1px solid black" }}>
                    <tr style={{ borderTop: "8px solid transparent" }}>
                        <td style={{ maxWidth: "7%", overflow: "auto", borderRight: "1px solid whitesmoke", height: "400px" }}>{project.myRole}</td>
                        <td style={{ maxWidth: "10%", overflow: "auto", borderRight: "1px solid whitesmoke", height: "400px" }}>{project.languages}</td>
                        <td style={{ maxWidth: "20%", overflow: "auto", borderRight: "1px solid whitesmoke", height: "400px" }}>{project.technologies}</td>
                        <td style={{ maxWidth: "20%", overflow: "auto", borderRight: "1px solid whitesmoke", height: "400px" }}>{project.summary}</td>
                        <td style={{ maxWidth: "20%", overflow: "auto", borderRight: "1px solid whitesmoke", height: "400px" }}>
                        {(!project.details) ?
                        null
                        :
                        <ul>
                            {(project.details.length > 1) ?
                            project.details.map((detail, idx) => {
                                return (
                                    <li key={idx}>{detail}</li>
                                )
                            })
                            :
                                <li>{project.details[0]}</li>
                            }
                        </ul>
                        }
                        </td>
                        <td style={{ maxWidth: "8%", overflow: "auto", borderRight: "1px solid whitesmoke", height: "400px" }}>{project.demo}</td>
                        <td style={{ maxWidth: "8%", overflow: "auto", borderRight: "1px solid whitesmoke", height: "400px" }}>{project.image}</td>
                        <td style={{ maxWidth: "8%", overflow: "auto", borderRight: "1px solid whitesmoke", height: "400px" }}>
                            {/* <img src={() => getSource(project.mainImage.data)} style={{ width: "25px", height: "25px" }}/> */}
                            <img src={`data:image/png;base64,${imageUrl}`} style={{ width: "25px", height: "25px" }}/>
                            {/* {project.mainImage.data} */}
                            {/* <img src={imageUrl} style={{ width: "25px", height: "25px" }} /> */}
                        </td>
                        <td style={{ maxWidth: "8%", overflow: "auto", borderRight: "1px solid whitesmoke", height: "400px" }}>{project.github}</td>
                        <td style={{ maxWidth: "7%", overflow: "auto", height: "400px" }}><button onClick={() => handleDelete(project._id)} className="btn btn-danger mx-2" style={{ width: "75px" }}>delete</button></td>
                    </tr>
                </tbody>
            </table>
            <div className="border border-secondary rounded my-5" style={{ width: "75%", height: "2px", margin: "auto" }}></div>
            <div style={{ width: "80%", margin: "auto" }}>
                <div className="my-5 py-3 px-5 border border-light rounded" style={{ width: "80%", margin: "auto" }}>
                    <h1 className="text-light text-decoration-underline mb-4">Edit Project</h1>
                    <form onSubmit={handleUpdate} className="form text-light" style={{ width: "100%", margin: "auto" }} encType="multipart/form-data">
                        <div className="form-group d-flex flex-row justify-content-between my-3">
                            <label className="form-label fs-4 ms-4" htmlFor="title">Title</label>
                            <input onChange={handleFormChange} className="form-control" name="title" placeholder={project.title} style={{ width: "60%" }}/>
                        </div>
                        <div className="form-group d-flex flex-row justify-content-between my-3">
                            <label className="form-label fs-4 ms-4" htmlFor="myRole">Role(s)</label>
                            <input onChange={handleFormChange} className="form-control" name="myRole" placeholder={project.myRole} style={{ width: "60%" }}/>
                        </div>
                        <div className="form-group d-flex flex-row justify-content-between my-3">
                            <label className="form-label fs-4 ms-4" htmlFor="languages">Languages/Frameworks</label>
                            <input onChange={handleFormChange} className="form-control" name="languages" placeholder={project.languages} style={{ width: "60%" }}/>
                        </div>
                        <div className="form-group d-flex flex-row justify-content-between my-3">
                            <label className="form-label fs-4 ms-4" htmlFor="technologies">Technologies</label>
                            <input onChange={handleFormChange} className="form-control" name="technologies" placeholder={project.technologies} style={{ width: "60%" }}/>
                        </div>
                        <div className="form-group d-flex flex-row justify-content-between my-3">
                            <label className="form-label fs-4 ms-4" htmlFor="summary">Summary</label>
                            <input onChange={handleFormChange} className="form-control" name="summary" placeholder={project.summary} style={{ width: "60%" }}/>
                        </div>
                        <div className="d-flex flex-column my-3" style={{ width: "100%" }}>
                        {(detailInputs.length > 1) ?
                        detailInputs.map((input, idx) => {
                            if (idx === detailInputs.length - 1) {
                            return(
                                <div className="form-group d-flex flex-row justify-content-between my-2" key={idx}>
                                    <label className="form-label fs-4 ms-4" htmlFor={`${input}[${idx}]`}>Detail</label>
                                    <input onChange={handleDetailChange} onFocus={handleDetailInputs} onBlur={handleDetailArray} className="form-control" name={`${input}[${idx}]`} placeholder={project.details[idx]} style={{ width: "60%" }}/>
                                </div>
                            )
                            } else {
                            return(
                                <div className="form-group d-flex flex-row justify-content-between my-2" key={idx}>
                                    <label className="form-label fs-4 ms-4" htmlFor={`${input}[${idx}]`}>Detail</label>
                                    <input onChange={handleDetailChange} onBlur={handleDetailArray} className="form-control" name={`${input}[${idx}]`} placeholder={project.details[idx]} style={{ width: "60%" }}/>
                                </div>
                            )
                            }
                        })
                        :
                        <div className="form-group d-flex flex-row justify-content-between my-3">
                            <label className="form-label fs-4 ms-4" htmlFor="details[0]">Detail</label>
                            <input onChange={handleDetailChange} onFocus={handleDetailInputs} onBlur={handleDetailArray} className="form-control" name="details[0]" placeholder="" style={{ width: "60%" }}/>
                        </div>
                        }
                        </div>
                        <div className="form-group d-flex flex-row justify-content-between my-3">
                            <label className="form-label fs-4 ms-4" htmlFor="demo">Demo</label>
                            <input onChange={handleFormChange} className="form-control" name="demo" placeholder={project.demo} style={{ width: "60%" }}/>
                        </div>
                        <div className="form-group d-flex flex-row justify-content-between my-3">
                            <label className="form-label fs-4 ms-4" htmlFor="image">image</label>
                            <input type="text" onChange={handleFormChange} className="form-control" name="image" placeholder={project.image} style={{ width: "60%" }}/>
                        </div>
                        <div className="form-group d-flex flex-row justify-content-between my-3">
                            <label className="form-label fs-4 ms-4" htmlFor="mainImage">Main Image</label>
                            <input type="file" onChange={handleImageChange} className="form-control-file" name="mainImage" style={{ width: "60%" }}/>
                        </div>
                        <div className="form-group d-flex flex-row justify-content-between my-3">
                            <label className="form-label fs-4 ms-4" htmlFor="github">Github</label>
                            <input onChange={handleFormChange} className="form-control" name="github" placeholder={project.github} style={{ width: "60%" }}/>
                        </div>
                        <button type="submit" className="btn btn-outline-light mt-4 mb-3 fs-5" style={{ width: "30%", minWidth: "fit-content", margin: "auto" }} >update</button>
                    </form>
                </div>
            </div>
            <button onClick={handleClick} className="btn btn-secondary fs-4 p-2" style={{ width: "20%", margin: "auto" }}>back</button>
        </div>
    )
    } else {
        return (
            <h1 className="text-danger text-center m-5">L O A D I N G  . . . </h1>
        )
    }
}

export default Edit
