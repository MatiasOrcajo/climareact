import React from "react";

const Clima = ({resultado})=>{

    //extraer valores

    const {name, main} = resultado;
    if (!name) return null;
    const kelvin = 273.15;
    return(
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es: </h2>
                <h2 className="temperatura">
                {(main.temp - kelvin).toFixed(1)} <span>&#x2103;</span>
                </h2>
            </div>
        </div>
    )
}

export default Clima