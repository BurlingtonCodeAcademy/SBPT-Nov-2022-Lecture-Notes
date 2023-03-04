function AboutMe() {
    const city = 'Indianapolis';
    const state = "Indiana";

    let styles = {
        ul: {
            textAlign: 'left',
            color: 'green'
        },
        p: {
            fontSize: "20pt"
        }
    }

    return(
        <div id="about-me-section">
            <p style={styles.p}>I grew up in {city} {state}</p>
            {/* <ul style={{textAlign: "left", color: "red"}}> */}
            <ul style={styles.ul}>
                <li>Kitchen</li>
                <li>Livingroom</li>
                <li>Hallway</li>
            </ul>
        </div>
    )
}

export default AboutMe;