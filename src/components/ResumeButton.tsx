import { Link } from 'react-router-dom'
import { CgFile } from 'react-icons/cg'


const ResumeButton = () => {
    return (
        <Link to={'/files/Saya-ang,Kenth_Resume.pdf'} target="_blank" className="inline-block my-4 rounded-full">
            <button className="flex gap-2 items-center px-4 py-3 text-sm font-semibold bg-gradient rounded-full group text-catppuccinBase">
                <div className="group-hover:" ><CgFile size={20} /></div>
                My Resume
            </button>
        </Link>
    )
}

export default ResumeButton