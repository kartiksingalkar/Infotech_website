import { Link } from "react-router-dom"

const card = ({ title, content, redirect_url }) => {
    return (
        <>
            
            <a href={redirect_url}>
            <div className="m-card-head-1">
                <h3>{title}</h3>
            </div>
            <p>{content}</p>
            </a>
        </>
    )
}

export default card