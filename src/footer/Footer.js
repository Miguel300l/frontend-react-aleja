import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Footer.css'
function footer() {
    return (
        <>
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <h3>Información de Contacto</h3>
                            <p>Dirección: 123 Calle Principal, Ciudad</p>
                            <p>Teléfono: (123) 456-7890</p>
                            <p>Correo Electrónico: info@example.com</p>
                        </div>
                        <div class="col-md-6">
                            <h3>Enlaces Rápidos</h3>
                            <ul>
                                <li><Link to="/">IINICIO</Link></li>
                                <li><Link to="album">ALBUM</Link></li>
                                <li><Link to="pensamientos">PENSAMIENTOS</Link></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default footer