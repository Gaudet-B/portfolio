import React from 'react'
import styles from '../components/form.style.module.css'


const Form = () => {

    let offsetX 
    let offsetY

    // const move = () => {
    //     const button = document.getElementById("button")
        
    //     button.style.left = `${button.pageX - offsetX}px`
    //     button.style.top = `${button.pageY - offsetY}px`
    // }
    // const add = e => {
    //     const button = document.getElementById("button")
    //     offsetX = e.clientX - button.getBoundingClientRect().left
    //     offsetY = e.clientY - button.getBoundingClientRect().top
    //     e.target.addEventListener('mousemove', move)
    // }
    // const remove = e => {
    //     console.log(`OUT - ${offsetX}, ${offsetY}`)
    //     const button = document.getElementById("button")
    //     e.target.removeEventListener('mousemove', move)
    // }

    return (
        <div style={{ paddingTop: "5em" }}>
            <form className={styles.mainForm}>
                <div className={styles.formComponent}>
                    <label className={styles.label}>your email address</label>
                    <input className={styles.textInput} type="text" />
                </div>
                <div className={styles.formComponent}>
                    <label className={styles.label}>message</label>
                    <textarea className={styles.textInput} rows="12" />
                </div>
                <div className={styles.formComponent}>
                    <label className={styles.label}>reason for request</label>
                    <select className={styles.textInput}>
                        <option className={styles.option} />
                        <option className={styles.option} />
                        <option className={styles.option} />
                    </select>
                </div>
                <div className={styles.buttonContainer}>
                    <button id="button" className={styles.formButton} type="submit">send</button>
                </div>
            </form>
        </div>
    )
}

export default Form
