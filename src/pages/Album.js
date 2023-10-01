import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function Pensamientos() {
    const url = "https://backend-alejandra.vercel.app/verEventos"; // Cambia la URL según tu API
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Realizar una solicitud GET a la API o servidor cuando el componente se monte
        Axios.get(url)
            .then((res) => {
                setData(res.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    const backgroundStyle = {
        backgroundImage: 'url("https://dropsfamilygarden.com/wp-content/uploads/2023/05/black-oil-sunflower.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <div style={backgroundStyle}>
            <div className="container">
                {loading ? (
                    <p>Cargando...</p>
                ) : (
                    <div className='row'>
                        {data.map((item) => (
                            <div key={item._id} className='col-sm-4' style={{ margin: '16px 0' }}>
                                <div className="card h-100" style={{ width: '18rem', borderRadius: '10px', border: '1px solid' }}>
                                    <img
                                        src={item.imagen.urlImg}
                                        alt={item.titulo}
                                        style={{ maxHeight: '200px', width: '100%', objectFit: 'cover' }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.titulo}</h5>
                                        <p className="card-text">{item.descripcion}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                )}
            </div>
        </div>
    );
}

export default Pensamientos;