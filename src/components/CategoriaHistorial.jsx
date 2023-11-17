export default function CategoriaHistorial(props) {
    return (
        <div className="contenedorCategoria">
            <div className="categoriaTitulo">
                <img className="icono"src={props.img}/>
                    <p className="titulo">{props.titulo}</p>
            </div>
            <div className="pacienteContenido">
                <img className="imagenPerfil"src={props.img}/>
                <p className="contenido">
                    {props.children}
                </p>
            </div>
        </div>
    )
}