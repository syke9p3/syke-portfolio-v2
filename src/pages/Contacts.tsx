import Fancybox from "../components/Fancybox";
import { projects } from "../data/projectList";

const Contacts = () => {
    return (
        <div>
            <Fancybox
                options={{
                    Carousel: {
                        infinite: false,
                    },
                }}
            >

                {projects.map((project, i) => (

                    <a data-fancybox="gallery" href={project.imgSrc} key={project.id}>
                        <img
                            alt=""
                            src={project.imgSrc}
                            width="200"
                            height="150"
                        />
                    </a>

                ))}

            </Fancybox>
        </div>
    );
}

export default Contacts;