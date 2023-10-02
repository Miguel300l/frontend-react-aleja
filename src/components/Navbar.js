import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light " style={{ background: '#ff85d5' }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" style={{ marginLeft: '160px' }} >ARDNAJELA</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto mb-2 mb-lg-0" style={{ marginRight: '10px' }}>
                            <Link className="nav-link active" aria-current="page" to="/" style={{ marginRight: '10px' }}>INICIO</Link>
                            <Link className="nav-link" to="/album" style={{ marginRight: '10px' }}>ALBUM</Link>
                            <Link className="nav-link" to="/pensamientos" style={{ marginRight: '10px' }}>PENSAMIENTOS</Link>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;