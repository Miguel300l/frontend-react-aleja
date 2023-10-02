import React, { useState } from 'react';
import Axios from 'axios';

function Albuml() {
    const url = "https://backend-alejandra-git-main-miguel300l.vercel.app/crearEventos";
    const [data, setData] = useState({
        titulo: "",
        descripcion: "",
        eventoImg: null, // Usamos null para el campo de archivo
    });
    const [eventoCreado, setEventoCreado] = useState(false); // Estado para controlar si se ha creado el evento

    function handle(e) {
        const newdata = { ...data };
        if (e.target.id === "eventoImg") {
            newdata[e.target.id] = e.target.files[0]; // Almacenar el archivo seleccionado
        } else {
            newdata[e.target.id] = e.target.value;
        }
        setData(newdata);
    }

    function submit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("titulo", data.titulo);
        formData.append("descripcion", data.descripcion);
        formData.append("eventoImg", data.eventoImg);

        Axios.post(url, formData)
            .then(res => {
                console.log(res.data);
                setEventoCreado(true); // Marcar el evento como creado
                // Limpiar los campos de entrada después de crear el evento
                setData({
                    titulo: "",
                    descripcion: "",
                    eventoImg: null,
                });

                // Desaparecer el alerta después de 3 segundos
                setTimeout(() => {
                    setEventoCreado(false);
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
            <form onSubmit={(e) => submit(e)} className="was-validated">
                {eventoCreado && (
                    <div className="alert alert-success" role="alert">
                        PENSAMIENTO CREADO
                    </div>
                )}

                <div className="mb-3">
                    <label htmlFor="titulo" className="form-label"></label>
                    <textarea
                        className="form-control is-invalid text-center"
                        onChange={(e) => handle(e)}
                        id="titulo"
                        value={data.titulo}
                        placeholder="Titulo"
                        required
                    ></textarea>
                    <div className="invalid-feedback"></div>
                </div>

                <div className="mb-3">
                    <label htmlFor="descripcion" className="form-label"></label>
                    <textarea
                        className="form-control is-invalid text-center"
                        onChange={(e) => handle(e)}
                        id="descripcion"
                        value={data.descripcion}
                        placeholder="Descripcion"
                        required
                    ></textarea>
                    <div className="invalid-feedback"></div>
                </div>

                <div className="mb-3">
                    <label htmlFor="eventoImg" className="form-label"></label>
                    <input
                        type="file"
                        className="form-control text-center"
                        aria-label="file example"
                        onChange={(e) => handle(e)}
                        id="eventoImg"
                        required
                    />
                    <div className="invalid-feedback"></div>
                </div>

                <div className="mb-3 text-center">
                    <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ background: "#ffffff", border: '1px solid #000', color: "#000" }}
                    >
                        Enviar pensamiento
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Albuml;