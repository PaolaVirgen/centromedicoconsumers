function mostrarPacientes() {
    let pacientes = []
    let localPacientes = localStorage.getItem("pacientes")
    if (localPacientes) {
        pacientes = JSON.parse(localPacientes)
    }
    const tablaPacientes = document.getElementById("tabla-pacientes")
    const cuerpoTabla = tablaPacientes.getElementsByTagName("tbody")[0]

    pacientes.forEach(paciente => {
        let fila = cuerpoTabla.insertRow()
        const celdaNombrePaciente = fila.insertCell()
        celdaNombrePaciente.textContent= paciente.nombrePaciente

        const celdaApellidoPaciente = fila.insertCell();
        celdaApellidoPaciente.textContent= paciente.apellidoPaciente

        const celdaTipoDocumento = fila.insertCell();
        celdaTipoDocumento.textContent=paciente.tipoDocumento

        const celdaDocumento = fila.insertCell();
        celdaDocumento.textContent=paciente.documento

        const celdaEdad = fila.insertCell();
        celdaEdad.textContent = paciente.edad

        const celdaTelefono = fila.insertCell();
        celdaTelefono.textContent = paciente.telefono

        const celdaEspecialidad = fila.insertCell();
        celdaEspecialidad.textContent=paciente.especialidad

    });
}

mostrarPacientes()