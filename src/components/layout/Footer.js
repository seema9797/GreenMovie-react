import React from 'react'

function Footer() {
    return (
        <div className="row">
            <div className="col-md-12">
            <div className="footer p-3 mt-4 text-center bg-dark text-light">Develop By: <span className="text-warning font-weight-nornmal">Seema Prasad
        </span>
        ,Using<i className="fab fa-react"/>REACT JS &amp; Redux JS 
        integraget with external movies data API
        <a href="http://www.omdbapi.com/" 
        target="_blank" 
        rel="noopener noreferrer"
        >OMDB</a>    
            </div>
            </div>
        </div>
    )
}

export default Footer
