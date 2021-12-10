import DemoModal from './DemoModal'
import styles from './demo.style.module.css'

const Demo = props => {

    const { project, images } = props

    return (
        // <div style={{ margin: "auto", padding: "8px", width: "90%", height: "200px", border: "1px solid whitesmoke" }}>
        <div className={styles.main} >
            <div style={{ display: "flex", flexDirection: "row", justifyContent:"space-evenly" }}>
                <DemoModal project={project} images={images}/>
                {/* <DemoModal demo={2}/>
                <DemoModal demo={3}/>
                <DemoModal demo={4}/> */}
            </div>
            <p>Click on images to expand and see more details. Please refer to Github link on front of card to browse code base or download a demo.</p>
        </div>
    )
}

export default Demo
