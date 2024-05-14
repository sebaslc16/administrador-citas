import { generarId } from "./funciones.js";

// objeto cita
const citaObj = {
    id: generarId(),
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: ''
}

let editando = {
    value: false
};

export {editando, citaObj}