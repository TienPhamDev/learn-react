import {useFetchProject} from "./fetchProject";
function Project() {
    const {loading,projects} = useFetchProject()
    console.log(loading,projects);
    if(loading){
        return (
            <section className="projects">
                <h2>Loading..</h2>
            </section>
        )
    }
    return ( 
        <section className="projects">
            <div className="title">
                <h2>Projects</h2>
                <div className="titile-underline"></div>
            </div>
            <div className="projects-center">
                {projects.map((project)=> {
                    return (
                        <a 
                        key={project.id}
                        href={project.url}
                        className="project"
                        rel='noreferrer'
                        >
                            <img className="img" src={project.img} alt={project.tittle} />
                            <h5>{project.tittle}</h5>
                        </a>
                    )
                })}
            </div>
        </section>
    );
}

export default Project;