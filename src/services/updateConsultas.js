async function updateConsulta(id, estado) {
    try {
        const response = await fetch(`http://localhost:3001/consultas/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(estado)
        });

        if (!response.ok) {
            throw new Error(`Error en la actualización: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error en updateConsulta:', error);
        throw error; 
    }
}

export { updateConsulta };