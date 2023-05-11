const nombrePaciente = document.getElementById("nombre_paciente")
const apellidoPaciente = document.getElementById("apellido_paciente")
const tipoDocumento = document.getElementById("tdoc_paciente")
const documento = document.getElementById("documento_paciente")
const edad = document.getElementById("edad_paciente")
const telefono = document.getElementById("telefono_paciente")
const especialidad = document.getElementById("especialidad_paciente")
const formularioRegistro = document.getElementById("registro-pacientes-form")

formularioRegistro.addEventListener("submit", function (event) {
    event.preventDefault();

    const paciente = {
        nombrePaciente: nombrePaciente.value,
        apellidoPaciente: apellidoPaciente.value,
        tipoDocumento: tipoDocumento.value,
        documento: documento.value,
        edadPaciente: edad.value,
        telefono: telefono.value,
        especialidad: especialidad.value
    }
    let pacientes = []
    let localPacientes = localStorage.getItem("pacientes")
    
    if (localPacientes) {
        pacientes = JSON.parse(localPacientes)
    }
    pacientes.push(paciente)
    localStorage.setItem("pacientes", JSON.stringify(pacientes))
    formularioRegistro.reset()
    alert("Paciente registrado con exito")

})