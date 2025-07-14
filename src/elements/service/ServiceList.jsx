import React ,{ Component }from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";

const ServiceList = [
    {
    icon: <FiCast />,
    title: 'System & Software Design',
    description: 'From enterprise systems to mobile apps, I design modular architectures that support performance, scalability, and maintainability.'
    },
            { 
        icon: <FiMonitor />,
        title: 'Mobile App Development',
        description: 'Offering mobile solutions for both Android and iOS. I specialize in Kotlin and Swift, ensuring user-friendly and efficient applications.'
    },
    {
    icon: <FiMonitor />,
    title: 'Frontend Development',
    description: 'I build modern, responsive UIs using HTML, CSS, and Vue.js, with an emphasis on usability and clean design. Now also learning React.'
    },
    {
    icon: <FiLayers />,
    title: 'Backend Development',
    description: 'Creating various backend solutions suitable for every project, from REST APIs to microservices to enterprise applications.'
    },
    {
    icon: <FiUsers />,
    title: 'UI/UX & Design',
    description: 'I design clean and user-focused interfaces using Figma, Affinity Designer, and Affinity Photo, including branding and pictograms. Currently transitioning to Adobe products.'
    },
    { 
        icon: <FiLayers />,
    title: ' Quality Assurance',
    description: 'I apply unit, integration, and E2E testing using JUnit, Cypress, and other testing tools to maintain project reliability.'
    }
]


class ServiceThree extends Component{
    render(){
const { column, onServiceClick } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
<div onClick={onServiceClick} style={{ cursor: 'pointer' }}>

                                <div className="service service__style--2">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
    </div>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
