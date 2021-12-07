// Importamos la clase React de la librería 'react'
import React from 'react';


// Creamos el componente de clase "Contenido" que hereda de la clase
// React.Component, y tiene un método render que devuelve...
class Contenido extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            titulo: "Unidad 3, actividad 5: Eventos en React",
            texto1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur lorem donec massa sapien faucibus et. Eros in cursus turpis massa tincidunt dui ut. Id diam maecenas ultricies mi. Dignissim diam quis enim lobortis scelerisque. Eu volutpat odio facilisis mauris sit. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Quis risus sed vulputate odio ut enim blandit. Nunc mattis enim ut tellus elementum sagittis vitae et. Amet luctus venenatis lectus magna fringilla urna. Ultricies integer quis auctor elit sed vulputate. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Integer eget aliquet nibh praesent tristique magna sit amet purus. Urna neque viverra justo nec ultrices. Aliquet nibh praesent tristique magna.",
            texto2: "Eros in cursus turpis massa tincidunt dui ut. Id diam maecenas ultricies mi. Dignissim diam quis enim lobortis scelerisque. Eu volutpat odio facilisis mauris sit.",
            texto3: "Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Quis risus sed vulputate odio ut enim blandit. Nunc mattis enim ut tellus elementum sagittis vitae et.",
            texto4: "Amet luctus venenatis lectus magna fringilla urna. Ultricies integer quis auctor elit sed vulputate. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis.",
            texto5: "Integer eget aliquet nibh praesent tristique magna sit amet purus. Urna neque viverra justo nec ultrices. Aliquet nibh praesent tristique magna."
        };
        this.cambiarTexto = this.cambiarTexto.bind(this);
    }

    cambiarTexto(event){
        this.setState({ texto1: "" });      
    }
    
    render() {
        return (
            <div className='stDiv'>
                <h1>{this.state.titulo}</h1>
                <p>Ejercicio 2 – En el componente Contenido, introduce cinco párrafos. Implementa la 
                    lógica necesaria para que cuando el usuario haga click sobre el primer párrafo, este 
                    desaparezca.</p>
                <h2>Ejercicio 2</h2>
                <p onClick={this.cambiarTexto}>{this.state.texto1}</p>
                <p>{this.state.texto2}</p>
                <p>{this.state.texto3}</p>
                <p>{this.state.texto4}</p>
                <p>{this.state.texto5}</p>
            </div>
        );
    }
}


// Exportamos por defecto el contenido de clase "Contenido"
export default Contenido;