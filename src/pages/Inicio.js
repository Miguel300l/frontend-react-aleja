
import React from 'react'
import afrodita1 from '../img/afrodita1.jpg'
import afrodita2 from '../img/afrodita2.jpg'
import afrodita3 from '../img/afrodita3.jpg'
import aleja1 from '../img/aleja1.jpg'
import aleja2 from '../img/aleja2.jpg'
import aleja3 from '../img/aleja3.jpg'
import aleja4 from '../img/aleja4.jpg'
import aleja5 from '../img/aleja5.jpg'
import aleja6 from '../img/aleja6.jpg'

function Inicio() {
    const backgroundStyle = {
        backgroundImage: 'url("https://wikifaunia.com/wp-content/uploads/2015/09/girasol.jpg")', // Reemplaza con la ruta de tu imagen de fondo
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        minHeight: '100vh', // Ajusta la altura mínima según tus necesidades
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (

        <>

            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={afrodita1} style={{ width: '100%' }} alt="" />
                    </div>
                    <div class="carousel-item">
                        <img src={afrodita2} style={{ width: '100%' }} alt="" />
                    </div>
                    <div class="carousel-item">
                        <img src={afrodita3} style={{ width: '100%' }} alt="" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <div style={backgroundStyle}>

                <div className='container'>
                    <div className='row justify-content-center my-4'>
                        <div className='col-sm-4'>
                            <div className="card" style={{
                                width: '18rem', minHeight: '100%', borderRadius: '10px', border: '1px solid'
                            }}>
                                <img src={aleja1} alt="" style={{ height: '200px', objectFit: 'cover' }} />
                                <div className="card-body">
                                    <h5>Sé tu propia inspiración</h5>
                                    <p className="card-text">Cree en ti misma. Eres más valiente de lo que crees, más talentosa de lo que sabes y capaz de más de lo que imaginas.</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className="card" style={{ width: '18rem', minHeight: '100%', borderRadius: '10px', border: '1px solid' }}>
                                <img src={aleja2} alt="" style={{ height: '200px', objectFit: 'cover' }} />
                                <div className="card-body">
                                    <h5>El éxito es un viaje</h5>
                                    <p className="card-text">El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. Si amas lo que haces, tendrás éxito.</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className="card" style={{ width: '18rem', minHeight: '100%', borderRadius: '10px', border: '1px solid' }}>
                                <img src={aleja3} alt="" style={{ height: '200px', objectFit: 'cover' }} />
                                <div className="card-body">
                                    <h5>El poder de la perseverancia</h5>
                                    <p className="card-text">No importa cuantas veces caigas, lo importante es cuantas veces te levantes.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='p-4'></div>

                    <div className='row justify-content-center my-4'>
                        <div className='col-sm-4'>
                            <div className="card" style={{ width: '18rem', minHeight: '100%', borderRadius: '10px', border: '1px solid' }}>
                                <img src={aleja4} alt="" style={{ height: '200px', objectFit: 'cover' }} />
                                <div className="card-body">
                                    <h5>Avanza hacia tus sueños</h5>
                                    <p className="card-text">El camino hacia el éxito y la grandeza no es una línea recta. Tiene curvas, obstáculos y momentos difíciles, pero vale la pena cada paso.</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className="card" style={{ width: '18rem', minHeight: '100%', borderRadius: '10px', border: '1px solid' }}>
                                <img src={aleja5} alt="" style={{ height: '200px', objectFit: 'cover' }} />
                                <div className="card-body">
                                    <h5>Supérate a ti misma</h5>
                                    <p className="card-text">Recuerda que cada día es una nueva oportunidad para ser mejor. No te rindas</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className="card" style={{ width: '18rem', minHeight: '100%', borderRadius: '10px', border: '1px solid' }}>
                                <img src={aleja6} alt="" style={{ height: '200px', objectFit: 'cover' }} />
                                <div className="card-body">
                                    <h5>Enfócate en el presente</h5>
                                    <p className="card-text">No importa cuánto tiempo te tome llegar allí, lo importante es que sigas avanzando hacia tus metas.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Inicio