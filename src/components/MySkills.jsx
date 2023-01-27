import React, {useEffect} from 'react'

const MySkills = () => {

	function efectoHabilidades(){
	    const skills = document.getElementById("skills");
	    const distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
	    if(distancia_skills >= 300){
	        let habilidades = document.getElementsByClassName("progreso");
	        habilidades[0].classList.add("htmlcss");
	        habilidades[1].classList.add("javascript");
	        habilidades[2].classList.add("javascript");
	        habilidades[3].classList.add("dedicacion");
	        habilidades[4].classList.add("javascript");
	        habilidades[5].classList.add("trabajo");
	        habilidades[6].classList.add("trabajo");
	        habilidades[7].classList.add("comunicacion");
	        habilidades[8].classList.add("trabajo");
	        habilidades[9].classList.add("creatividad");
	        habilidades[10].classList.add("dedicacion");
	        habilidades[11].classList.add("proyect");
	    }
	}

	useEffect(() => {
		efectoHabilidades()
	}, [efectoHabilidades])

	return (
		    <section className="skills" id="skills">
        <div className="contenido-seccion">
            <h2>Skills</h2>
            <div className="fila">
                <div className="col">
                    <h3>Technical Skills</h3>
                    <div className="skill">
                        <span>HTML & CSS</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>80%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>Javascript</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>75%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>NodeJs</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>75%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>PHP</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>65%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>React</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>75%</span>
                            </div>
                        </div>
                    </div>

                    <div className="skill">
                        <span>Python</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>70%</span>
                            </div>
                        </div>
                    </div>

                    <div className="skill">
                        <span>SQL</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>70%</span>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col">
                    <h3>Professional Skills</h3>
                    <div className="skill">
                        <span>Communication</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>80%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>Teamwork</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>70%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>Creativity</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>99%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>Dedicación</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>65%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>responsibility and discipline</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>94%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

	)
}

export default MySkills