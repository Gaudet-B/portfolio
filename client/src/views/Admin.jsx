import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'


const Admin = () => {

    const [loggedIn, setLoggedIn] = useState(false)
    const [formState, setFormState] = useState({})
    const [pJformState, setPJformState] = useState({})
    const [validState, setValidState] = useState({})
    const [projects, setProjects] = useState([])

    // const [admins, setAdmins] = useState([])

    const history = useHistory()

    const instance = axios.create({
        withCredentials: true,
        baseURL: "http://localhost:8000/api"
    })
    
    useEffect(() => {

        // axios.get("http://localhost:8000/api/admins")
        //     .then(res => setAdmins(res.data))
        //         console.log(res.data)
        //         console.log(admins);
        //     })
        //     .catch(err => console.log(err))

        instance.get("/projects/all")
            .then(res => setProjects(res.data))
            .catch(err => console.log(err))

        const link = document.createElement("link")
        link.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        link.rel = "stylesheet"
        link.integrity = "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        link.crossOrigin = "anonymous"
        document.body.appendChild(link)

        document.querySelector("html").setAttribute("style", "overflow: auto;")
        // ("style", "overflow-x: hidden; overflow-y: scroll;")

        return () => {
            document.body.removeChild(link)
        }
    }, [])

    const handleChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const handlePjChange = e => {
        setPJformState({
            ...pJformState,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = e => {
        e.preventDefault()
        console.log(`submit`)
        instance.post("/loginadmin", formState)
            .then(res => {
                console.log(`RESPONSE: ${res}`)
                setFormState({})
                setLoggedIn(!loggedIn)
                history.push("/administrators")
            })
            .catch(err => {
                console.log(`ERROR: ${err.response.data}`)
                const {errors} = err.response.data
                let errObj = {}
                for (const [key, value] of Object.entries(errors)) {
                    errObj[key] = value.message
                }
                setValidState(errObj)
                console.log(errObj)
            })
    }

    const handleCreate = e => {
        e.preventDefault()
        console.log(`create`)
        instance.post("/projects/new", pJformState)
            .then(res => {
                console.log(`RESPONSE: ${res}`)
                setPJformState({})
            })
            .catch(err => {
                console.log(`ERROR: ${err.response.data}`)
                // const {errors} = err.response.data
                // let errObj = {}
                // for (const [key, value] of Object.entries(errors)) {
                //     errObj[key] = value.message
                // }
                // setValidState(errObj)
                // console.log(errObj)
            })
    }

    const handleLogout = e => {
        e.preventDefault()
        instance.get("/logoutadmin")
            .then(res => {
                console.log("goodbye")
                setLoggedIn(false)
                history.push("/administrators")
        })
            .catch(err => console.log("error"))
    }

    const handleClick = (id) => {
        instance.get(`/projects/edit/${id}`)
            .then(res => {
                console.log("!")
                // history.push("/")
            })
            .catch(err => console.log("error"))
    }

    const handleDelete = (id) => {
        instance.delete(`/projects/${id}`)
            .then(res => console.log("deleted"))
            .catch(err => console.log("error"))
    }

    // const handleClick = (id) => {
    //     console.log("delete")
    //     axios.delete(`http://localhost:8000/api/${id}`)
    //         .then(res => {
    //             console.log(res)
    //         })
    //         .catch(err => console.log(err))
    // }

    if (!loggedIn) {
        return (
            <div className="bg-dark p-5 text-light" style={{ height: "100vh", width: "100vw" }}>
                <form onSubmit={handleSubmit} className="d-flex flex-column m-5 p-5 border border-light rounded">
                    <div className="form-group d-flex flex-row p-2">
                        <label className="form-label" htmlFor="username">U &gt;</label>
                        <input onChange={handleChange} className="form-control" name="username" type="text" />
                    </div>
                    { (validState.username) ? <p className="text-danger"> { validState.username } </p> : null }
                    <div className="form-group d-flex flex-row p-2">
                        <label className="form-label" htmlFor="password">P &gt;</label>
                        <input onChange={handleChange} className="form-control" name="password" type="password" />
                    </div>
                    { (validState.username) ? <p className="text-danger"> { validState.username } </p> : null }
                    <button className="btn btn-outline-light" type="submit"> X </button>
                </form>
            </div>
        )
    } else {
        return (
            <div className="bg-dark p-4 text-center" style={{ height: "100vh", width: "100vw" }}>
                <h1 className="display-2 my-3">CONTENT MANAGEMENT</h1>
                <div className="text-center my-4">
                    <h1 className="display-5">Current Project Content</h1>
                </div>
                <table className="table">
                    <thead className="bg-light">
                        <tr>
                            <th>Title</th>
                            <th>Role(s)</th>
                            <th>Technologies</th>
                            <th>Summary</th>
                            <th>Demo</th>
                            <th>Github</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody className="bg-light">
                        {(projects.length > 0) ?
                        projects.map((project, idx) => {
                            return (
                            <tr key={idx}>
                                <th>{project.title}</th>
                                <td>{project.myRole}</td>
                                <td>{project.technologies[0]}...</td>
                                <td>{project.summary[0]}...</td>
                                <td>{project.demo}</td>
                                <td>{project.github}</td>
                                <td>
                                    <div className="d-flex flex-row justify-content-between">
                                        <button onClick={() => handleClick(project._id)} className="btn btn-secondary mx-2">edit</button>
                                        <button onClick={() => handleDelete(project._id)} className="btn btn-danger mx-2">delete</button>
                                    </div>
                                </td>
                            </tr>
                            )
                        })
                        :
                        null
                        }
                    </tbody>
                </table>
                <div className="border border-secondary rounded my-5" style={{ width: "75%", height: "2px", margin: "auto" }}></div>
                <div style={{ width: "80%", margin: "auto" }}>
                    <div className="my-5 py-3 px-5 border border-light rounded" style={{ width: "80%", margin: "auto" }}>
                        <h1 className="text-light text-decoration-underline mb-4">New Project</h1>
                        <form onSubmit={handleCreate} className="form text-light" style={{ width: "100%", margin: "auto" }}>
                            <div className="form-group d-flex flex-row justify-content-between my-3">
                                <label className="form-label fs-4 ms-4" htmlFor="title">Title</label>
                                <input onChange={handlePjChange} className="form-control" name="title" style={{ width: "60%" }}/>
                            </div>
                            <div className="form-group d-flex flex-row justify-content-between my-3">
                                <label className="form-label fs-4 ms-4" htmlFor="myRole">Role(s)</label>
                                <input onChange={handlePjChange} className="form-control" name="myRole" style={{ width: "60%" }}/>
                            </div>
                            <div className="form-group d-flex flex-row justify-content-between my-3">
                                <label className="form-label fs-4 ms-4" htmlFor="languages">Languages/Frameworks</label>
                                <input onChange={handlePjChange} className="form-control" name="languages" style={{ width: "60%" }}/>
                            </div>
                            <div className="form-group d-flex flex-row justify-content-between my-3">
                                <label className="form-label fs-4 ms-4" htmlFor="technologies">Technologies</label>
                                <input onChange={handlePjChange} className="form-control" name="technologies" style={{ width: "60%" }}/>
                            </div>
                            <div className="form-group d-flex flex-row justify-content-between my-3">
                                <label className="form-label fs-4 ms-4" htmlFor="summary">Summary</label>
                                <input onChange={handlePjChange} className="form-control" name="summary" style={{ width: "60%" }}/>
                            </div>
                            <div className="form-group d-flex flex-row justify-content-between my-3">
                                <label className="form-label fs-4 ms-4" htmlFor="details">Details</label>
                                <input onChange={handlePjChange} className="form-control" name="details" style={{ width: "60%" }}/>
                            </div>
                            <div className="form-group d-flex flex-row justify-content-between my-3">
                                <label className="form-label fs-4 ms-4" htmlFor="demo">Demo</label>
                                <input onChange={handlePjChange} className="form-control" name="demo" style={{ width: "60%" }}/>
                            </div>
                            <div className="form-group d-flex flex-row justify-content-between my-3">
                                <label className="form-label fs-4 ms-4" htmlFor="github">Github</label>
                                <input onChange={handlePjChange} className="form-control" name="github" style={{ width: "60%" }}/>
                            </div>
                            <button className="btn btn-outline-light mt-4 mb-3 fs-5" style={{ width: "30%", minWidth: "fit-content", margin: "auto" }} >create</button>
                        </form>
                    </div>
                </div>
                <button onClick={handleLogout} className="btn btn-secondary fs-4 p-2" style={{ width: "20%", margin: "auto" }}>logout</button>
            </div>
        )
    }

    // return (
    //     <div>
    //         <form onSubmit={handleSubmit}>
    //             <input name="username" type="email" onChange={handleChange} />
    //             <input name="password" type="text"  onChange={handleChange} />
    //             <button type="submit">X</button>
    //         </form>
    //         <div>
    //             <table>
    //                 <thead>
    //                     <tr>
    //                         <th>ID</th>
    //                         <th>password</th>
    //                         <th>username</th>
    //                         <th>delete</th>
    //                     </tr>
    //                 </thead>
    //                 <tbody>
    //                     { (admins.length > 0) ?
    //                     admins.map((admin, idx) => {
    //                         return(
    //                             <tr key={idx}>
    //                                 <td>{ admin._id }</td>
    //                                 <td>{ admin.password }</td>
    //                                 <td>{ admin.username }</td>
    //                                 <td>
    //                                     <div>
    //                                         <button onClick={() => handleClick(admin._id)} > xX del Xx </button>
    //                                     </div>
    //                                 </td>
    //                             </tr>
    //                         )
    //                     }) : null
    //                 }
    //                 </tbody>
    //             </table>
    //         </div>
    //     </div>
    // )
}

export default Admin
