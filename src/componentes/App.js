import '../css/App.css';
import React, {Component} from 'react';
import Header from "./Header";
import FormularioGasto from "./FormularioGasto";
import Listado from "./Listado";

class App extends Component {

    state = {
        presupuesto: '',
        restante: '',
        gastos: {}
    }

    //Agregar gasto
    agregarGasto = gasto => {
        ///tomar una copia del state actual
        const gastos = {...this.state.gastos}
        //agregar gasto al objeto del state
        gastos[`gasto${Date.now()}`] = gasto;


        //ponerle en el state
        this.setState({
            gastos
        });

    }

    render() {
        return (
            <div className="App container">
                <Header titulo='Gasto semanal'/>
                <div className='contenido-principal contenido'>
                    <div className='row'>
                        <div className='one-half column'>
                            <FormularioGasto agregarGasto={this.agregarGasto}/>
                        </div>
                        <div className='one-half column'>
                            <Listado gastos={this.state.gastos}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
