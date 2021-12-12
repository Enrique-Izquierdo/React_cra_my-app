// Unidad 3, actividad 7: Hooks
//
// Ejercicio 8 - Realiza el Ejercicio 3, pero esta vez realiza un carrusel de
// 3 imágenes que se pasarán con los botones anterior y siguiente. Sírvete de
// funciones para manejar los eventos asociados a los botones. 

// Ejercicio 3 - Implementa una imagen y dos botones -anterior y posterior-, 
// de modo que al hacer click en el botón "siguiente" se muestre otra imagen.
// Al hacer click sobre "anterior", se mostrará la imagen original. 
// Nota: no hay que implementar un "carrusel" de dos imágenes. Es decir, cuando
// se muestre la segunda imagen, al pulsar click sobre siguiente, no es necesario
// implementar que vuelva a la anterior.

import React, {useState} from 'react';

const Contenido = () => {
    //let i = 0;
    let [num, setNum] = useState(0);
    const fotos = ["https://www.preferente.com/wp-content/uploads/2020/03/Peru-Machupichu.jpg", "https://www.peruhop.com/wp-content/uploads/cosas-por-hacer-en-peru-andes-huaraz.jpg", "https://www.peruhop.com/wp-content/uploads/cosas-por-hacer-en-peru-selva.jpg"];
    
    const [imagen, setImagen] = useState(fotos.at(0));

    return (
        <div>
            <p>¿Por que "onClick" requiere doble click? ¿Por que en el operador ternario los indices correspondentes a la matriz de fotos son "-1" en lugar de "0", y "fotos.length" en vez de "fotos.length-1"</p>
            <img src={fotos.at(num)} alt="" width="75%"/>
            <h1>{num}</h1>
            <button onClick={ () => setNum(num>-1 ? num-- : num=fotos.length-1) }>Anterior</button>
            <button onClick={ () => setNum(num<fotos.length ? num++ : num=0) }>Siguiente</button><br/><br/><br/>
            {/* <button onClick={ () => setNum(num>0 ? num-- : num=fotos.length-1) }>Anterior</button> */}
            {/* <button onClick={ () => setNum(num<fotos.length-1 ? num++ : num=0) }>Siguiente</button> */}
            <p>En este caso, "onClick" solo requiere un click.</p>
            <img src={imagen} alt="" width="75%"/><br/>
            <button onClick={ () => setImagen(fotos.at(0)) }>Anterior B</button>
            <button onClick={ () => setImagen(fotos.at(1))}>Siguiente B</button>
        </div>
    );
}

export default Contenido;