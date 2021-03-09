import '../css/App.css';
import Header from "./Header";
import FormularioGasto from "./FormularioGasto";

function App() {
    return (
        <div className="App container">
            <Header titulo='Gasto semanal'/>
            <div className='contenido-principal contenido'>
                <div className='row'>
                    <div className='one-half column'>
                        <FormularioGasto/>
                    </div>
                    <div className='one-half column'>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
