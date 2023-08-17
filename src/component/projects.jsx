import { About } from "./about";
import PersonalInfo from "./personalInfo";
// import Password from "./password";
import projects from './projects.module.css';



const Projects = ()=>{
    return (
            <div className={projects.projects_container}>
                <PersonalInfo/>
                {/* <Password/> */}
                <About />
                {/* hello */}
            </div>
    )
}

export {Projects}