async function getConsultas() {
    try {
        const response = await fetch(`http://localhost:3001/consultas`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener la consulta:', error);
        throw error;
    }
}
export { getConsultas };

async function getConsultasById(id) {
    try {
        const response = await fetch(`http://localhost:3001/consultas/`+id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener la consulta:', error);
        throw error;
    }
}
export { getConsultasById };

async function getHistorial() {
    try {
        const response = await fetch('http://localhost:3001/historial', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener el historial:', error);
        throw error;
    }
}
export  { getHistorial };