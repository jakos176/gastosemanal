import '../css/App.css';
import React, {Component} from 'react';
import Header from "./Header";
import FormularioGasto from "./FormularioGasto";

class App extends Component {

    state = {
        gastos: {
            presupuesto: '',
            restante: '',
            gastos: {}
        }
    }

    //Agregar gasto
    agregarGasto = gasto => {
        ///tomar una copia del state actual
        const gastos = {...this.state.gastos}
        //agregar gasto al objeto del state

        //ponerle en el state

    }

    render() {
        return (
            <div className="App container">
                <Header titulo='Gasto semanal'/>
                <div className='contenido-principal contenido'>
                    <div className='row'>
                        <div className='one-half column'>
                            <FormularioGasto agregarGasto={this.agregarGasto()}/>
                        </div>
                        <div className='one-half column'>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
