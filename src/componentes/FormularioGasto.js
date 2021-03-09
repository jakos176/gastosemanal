import React, {Component} from 'react';

class FormularioGasto extends Component {

    //refs para los campos del formulario
    nombreGasto = React.createRef;
    cantidadGasto = React.createRef;

    crearGasto = (e) => {

        //prevenir el default
        e.preventDefault();

        //crear el objeto con los datos
        const gasto = {
            nombreGasto: this.nombreGasto.current.value,
            cantidadGasto: this.cantidadGasto.current.value,
        };

        //agregarlo y enviar los props
        this.props.agregarGasto(gasto)

        //resetear el formulario (opcional)
        e.current.target();

    };

    render() {
        return (
            <form onSubmit={this.crearGasto}>
                <h2>Agrega tus gastos aqui</h2>
                <div className="campo">
                    <label>Nombre Gasto</label>
                    <input className="u-full-width" type="text" placeholder="Ej. Transporte" ref={this.nombreGasto}/>
                </div>

                <div className="campo">
                    <label>Cantidad</label>
                    <input className="u-full-width" type="text" placeholder="Ej. 300" ref={this.cantidadGasto}/>
                </div>

                <input className="button-primary u-full-width" type="submit" value="Agregar"/>
            </form>
        );
    }

}

export default FormularioGasto;