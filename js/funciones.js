import AdminCitas from "./classes/AdminCitas.js";
import Notificacion from "./classes/Notificacion.js";
import { emailInput, fechaInput, formulario, formularoInput, pacienteInput, propietarioInput, sintomasInput } from "./selectores.js";
import { citaObj, editando } from "./variables.js";

const citas = new AdminCitas();

export function datosCita(e) {
    citaObj[e.target.name] = e.target.value;
}

export function submitCita(e) {
    e.preventDefault();

    if (Object.values(citaObj).some(value => value.trim() === '')) {
        new Notificacion({ texto: 'Todos los campos son obligatorios', tipo: 'error' });
        return;
    }

    if (editando.value) {
        citas.editar({ ...citaObj });
        new Notificacion({ texto: 'Actualizado correctamente', tipo: 'exito' });
    } else {
        citas.agregar({ ...citaObj });
        new Notificacion({ texto: 'Paciente registrado', tipo: 'exito' });
    }

    formulario.reset();
    reiniciarObjetoCita();
    formularoInput.value = "Registrar paciente";
    editando.value = false;

}


export function reiniciarObjetoCita() {
    Object.assign(citaObj, {
        id: generarId(),
        paciente: '',
        propietario: '',
        email: '',
        fecha: '',
        sintomas: ''
    });
}

//id unico aleatorio
export function generarId() {
    return Math.random.toString(36).substring(2) + Date.now();
}

//cargar cita para edicion en formulario y Object
export function cargarEdicion(cita) {

    Object.assign(citaObj, cita);

    pacienteInput.value = cita.paciente;
    propietarioInput.value = cita.propietario;
    emailInput.value = cita.email;
    fechaInput.value = cita.fecha;
    sintomasInput.value = cita.sintomas;

    editando.value = true;

    formularoInput.value = "Guardar cambios";
}