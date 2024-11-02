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
            </div>
        </section>
    );
}

export default Project;