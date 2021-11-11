import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'


const Admin = () => {

    const [loggedIn, setLoggedIn] = useState(false)
    const [formState, setFormState] = useState({})
    const [validState, setValidState] = useState({})

    // const [admins, setAdmins] = useState([])

    const history = useHistory()

    useEffect(() => {

        // axios.get("http://localhost:8000/api/admins")
        //     .then(res => setAdmins(res.data))
        //         console.log(res.data)
        //         console.log(admins);
        //     })
        //     .catch(err => console.log(err))

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
    })

    const handleChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(`submit`)
        axios.post("http://localhost:8000/api/loginadmin", formState)
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
            <div className="bg-dark" style={{ height: "100vh", width: "100vw" }}>
                <h1 className="display-2">LOGGED IN</h1>
                <table className="table">
                    <thead className="bg-light">
                        <tr>
                            <th>Title</th>
                            <th>Role(s)</th>
                            <th>Technologies</th>
                            <th>Summary</th>
                            <th>Demo</th>
                            <th>Github</th>
                        </tr>
                    </thead>
                    <tbody className="bg-light">
                        <tr>
                            <th>Title</th>
                            <td>Role(s)</td>
                            <td>Technologies</td>
                            <td>Summary</td>
                            <td>Demo</td>
                            <td>Github</td>
                        </tr>
                    </tbody>
                </table>
                <div className="border border-light" style={{width: "75%", height: "2px", margin: "auto"}}></div>
                <div style={{ width: "80%", margin: "auto" }}>
                    <div className="my-5 py-3 px-5 border border-light rounded" style={{ width: "100%" }}>
                        <h1 className="text-light">New Project</h1>
                        <form className="form text-light" style={{ width: "80%" }}>
                            <div className="form-group d-flex flex-row justify-content-between my-3">
                                <label className="form-label fs-4 ms-5" htmlFor="title">Title</label>
                                <input className="form-control" name="title" style={{ width: "60%" }}/>
                            </div>
                            <div className="form-group d-flex flex-row justify-content-between my-3">
                                <label className="form-label fs-4 ms-5" htmlFor="myRole">Role(s)</label>
                                <input className="form-control" name="myRole" style={{ width: "60%" }}/>
                            </div>
                            <div className="form-group d-flex flex-row justify-content-between my-3">
                                <label className="form-label fs-4 ms-5" htmlFor="technologies">Technologies</label>
                                <input className="form-control" name="technologies" style={{ width: "60%" }}/>
                            </div>
                            <div className="form-group d-flex flex-row justify-content-between my-3">
                                <label className="form-label fs-4 ms-5" htmlFor="summary">Summary</label>
                                <input className="form-control" name="summary" style={{ width: "60%" }}/>
                            </div>
                            <div className="form-group d-flex flex-row justify-content-between my-3">
                                <label className="form-label fs-4 ms-5" htmlFor="demo">Demo</label>
                                <input className="form-control" name="demo" style={{ width: "60%" }}/>
                            </div>
                            <div className="form-group d-flex flex-row justify-content-between my-3">
                                <label className="form-label fs-4 ms-5" htmlFor="github">Github</label>
                                <input className="form-control" name="github" style={{ width: "60%" }}/>
                            </div>
                        </form>
                    </div>
                </div>
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
