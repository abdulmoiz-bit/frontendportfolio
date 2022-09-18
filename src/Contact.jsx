


const Contact = () => {

    return (
        <>
            <section className='contactme' id='contactme'>
                <h1 style={{ color: 'white', paddingBottom: '1rem' }}>
                    Get In Touch
                </h1>
                <div className="contacticons">
                    <div className="phoneno">
                        <img src="assets/images/phonelogo.png" />
                        <h4 style={{ textAlign: "center", color: "rgba(177, 173, 173, 0.5)", paddingTop: "1.6rem", fontFamily: 'Changa' }}>PHONE</h4>
                        <a href="tel:+92 316 2523252 " style={{ textAlign: "center", color: "rgba(177, 173, 173, 0.5)", paddingTop: "1rem", textDecoration: "underline" }}>+92 316 2523252</a>
                    </div>
                    <div className="email">
                        <img src="assets/images/maillogo.png" />
                        <h4 style={{ textAlign: "center", color: "rgba(177, 173, 173, 0.5)", paddingTop: "1.6rem", fontFamily: 'Changa' }}>EMAIL</h4>
                        <a href="mailto:moizrashid47@gmail.com" style={{ textAlign: "center", color: "rgba(177, 173, 173, 0.5)", paddingTop: "1rem", textDecoration: "underline" }}>moizrashid47@gmail.com</a>
                    </div>
                    <div className="linkedin">
                        <img src="assets/images/linkedinlogo.png" />
                        <h4 style={{ textAlign: "center", color: "rgba(177, 173, 173, 0.5)", paddingTop: "1.6rem", fontFamily: 'Changa' }}>LINKED in</h4>
                        <a target="_blank" href="https://www.linkedin.com/in/abdul-moiz-rashid-8119751a6/" style={{ textAlign: "center", color: "rgba(177, 173, 173, 0.5)", paddingTop: "1rem", textDecoration: "underline" }}>Connect With Me</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;