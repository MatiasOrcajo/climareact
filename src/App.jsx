import React,{Fragment, useState, useEffect} from 'react';
import Header from './components/Header'
import Form from './components/Form'
import Clima from './components/Clima'
import Error from './components/Error'



function App() {
  
  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: ''
  });

  const [consulta, setConsulta] = useState(false);
  const [resultado, setResultado] = useState({});
  const [error, setError] = useState(false);
  console.log(error);
  const { ciudad, pais } = busqueda;
  useEffect(() => {
    const consultarAPI = async () => {
      const id = '884a57e2517d3d1597bfbb7be1f72a1e';
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${id}`

      const res = await fetch(url);
      const result = await res.json();

      setResultado(result);


      if (result.cod === "404") {
        setError(true);
      } else {
        setError(false);
      }

    }
    consultarAPI();
  }, [consulta])
  
  let componente;
  if (error) {
    componente = <Error mensaje="No hay resultados" />
  } else {
    componente = <Clima resultado={resultado} />
  }



  return (
    <Fragment>
      <Header titulo='Clima React app' />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form busqueda={busqueda} setBusqueda={setBusqueda} setConsulta={setConsulta}></Form>
            </div>
            <div className="col m6 s12">
              {componente}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
