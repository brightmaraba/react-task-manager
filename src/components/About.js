import { Link } from 'react-router-dom'
function About() {
    return (
        <div>
            <h2>Version: 1.0.0</h2>
            <h4>Released: Mar 24, 2021</h4>
            <Link to='/'>Go back</Link>
        </div>
    )
}

export default About
