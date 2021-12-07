import DemoModal from './DemoModal'
import styles from './demo.style.module.css'

const Demo = props => {

    const { project } = props

    return (
        // <div style={{ margin: "auto", padding: "8px", width: "90%", height: "200px", border: "1px solid whitesmoke" }}>
        <div className={styles.main} >
            <div style={{ display: "flex", flexDirection: "row", justifyContent:"space-evenly" }}>
                <DemoModal project={project} demo={1}/>
                {/* <DemoModal demo={2}/>
                <DemoModal demo={3}/>
                <DemoModal demo={4}/> */}
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ullam quo unde facilis beatae in perferendis! Ipsa, modi. Facilis, nihil commodi. Minima accusamus quam earum laboriosam aperiam repudiandae consequatur fugit!</p>
        </div>
    )
}

export default Demo
