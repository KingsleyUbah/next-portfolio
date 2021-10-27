import Portfolios  from '../projects.json'
import Link from 'next/link'

export default function Projects() {
    return (
        <div className="container">
            <h1> My Projects </h1>
            <div className="projects">
                    {Portfolios.map(portfolio => {
                        return(
                            <div className="project" key={portfolio.id}>
                                <img src={portfolio.cover} alt="project image" />
                                <h2>{portfolio.title}</h2>
                                <p>{portfolio.excerpt}</p>
                                <Link href={portfolio.slug}><a>View More</a></Link>
                            </div>
                        )}
                    )}
            </div>
        </div>
    )
}