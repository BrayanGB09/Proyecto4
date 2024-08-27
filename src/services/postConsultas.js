async function postConsultas(consulta) {
    
    try {
        const response = await fetch('http://localhost:3001/consultas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(consulta)
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al enviar la consulta:', error);
        throw error;
    }
}
export { postConsultas };

async function postHistorial(consulta) {
   
    try {
        const response = await fetch('http://localhost:3001/historial', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(consulta)
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al enviar la consulta al historial:', error);
        throw error;
    }
}
export { postHistorial };