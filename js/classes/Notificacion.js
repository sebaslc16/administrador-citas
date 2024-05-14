import { formulario } from "../selectores.js";

// Clase notificacion
export default class Notificacion {

    constructor({ texto, tipo }) {
        this.texto = texto;
        this.tipo = tipo;

        this.mostrar();
    }

    mostrar() {
        //crear notificacion
        const alerta = document.createElement('DIV');
        alerta.classList.add('text-center', 'w-full', 'p-3', 'text-white', 'my-5', 'alert', 'uppercase', 'font-bold', 'text-sm');

        const alertaPrevia = document.querySelector('.alert');
        alertaPrevia?.remove();

        //si es de tipo error o exito, agregar una nueva clase
        this.tipo === 'error' ? alerta.classList.add('bg-red-500') : alerta.classList.add('bg-green-500');

        // mensaje de la alerta
        alerta.textContent = this.texto;

        //Insertar la alerta en el DOM
        formulario.parentElement.insertBefore(alerta, formulario);

        setTimeout(() => {
            alerta.remove();
        }, 3000);

    }

}