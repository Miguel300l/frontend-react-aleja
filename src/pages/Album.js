import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function Pensamientos() {
    const url = "https://backend-alejandra.vercel.app/verEventos";
    const urll = "https://backend-alejandra.vercel.app"; // Cambia la URL según tu API
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pensamientoEliminado, setPensamientoEliminado] = useState(false);

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

    function eliminarEvento(id) {
        Axios.delete(`${urll}/eliminarEvento/${id}`)
            .then(() => {
                // Actualizar la lista de tarjetas después de eliminar una
                const updatedData = data.filter(item => item._id !== id);
                setData(updatedData);
                setPensamientoEliminado(true); // Mostrar el mensaje de pensamiento eliminado
                setTimeout(() => {
                    setPensamientoEliminado(false); // Ocultar el mensaje después de 3 segundos
                }, 3000);
            })
            .catch(error => {
                console.error(error);
            });
    }

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
                    <div className='row justify-content-center my-4'>
                        {data.map((item) => (
                            <div key={item._id} className='col-md-4 col-sm-6' style={{ margin: '16px 0' }}>
                                <div className="card mb-5" style={{ height: '446px', borderRadius: '10px', border: '1px solid' }}>
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
                                <button className="btn btn-danger" style={{ marginTop: "-60px", border: '1px solid', color: "black" }} onClick={() => eliminarEvento(item._id)}>Eliminar</button>
                            </div>
                        ))}
                    </div>
                )}
                {/* Mostrar la alerta de pensamiento eliminado */}
                {pensamientoEliminado && <div className="alert alert-success">Pensamiento eliminado</div>}
            </div>
        </div>
    );
}

export default Pensamientos;
