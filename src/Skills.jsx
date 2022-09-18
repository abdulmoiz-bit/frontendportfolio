import React from 'react'


const Skills = () => {
    return (
        <section className='skills' id='skills'>
            <h1 style={{ textAlign: 'center', paddingBottom: '4rem', fontSize: '3rem'}}>Skills</h1>
            <div className='grid-skills'>

                <div className='skills-card'>
                    <div className='skills-list'>
                        <h3>
                            LANGUAGES
                        </h3>
                        <ul>
                            <li> HTML </li>
                            <li>  CSS </li>
                            <li> JAVASCRIPT </li>
                        </ul>
                    </div>
                </div>
                <div className='skills-card'>
                    <div className='skills-list'>
                        <h3>
                            LIBRARIES / FRAMEWORKS
                        </h3>
                        <ul>
                            <li>  MATERIAL UI  </li>
                            <li>  BOOTSTRAP  </li>
                            <li>  REACT JS   </li>
                            <li>  REDUX   </li>
                            <li>  NEXT JS    </li>
                        </ul>
                    </div>
                </div>
                <div className='skills-card'>
                    <div className='skills-list'>
                        <h3>OTHER TOOLS</h3>
                        <ul>
                            <li> GIT </li>
                            <li> GITHUB </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills