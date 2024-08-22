async function updateConsultas(nombre, apellido,consultas,date) {
    try {
     
        const userData = { 
            nombre, 
            apellido,
            consultas,
            date
        
        };
        const response = await fetch("http://localhost:3001/consultas/"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

     
        return await response.json();
    } catch (error) {
        console.error('Error update user:', error);
        throw error;
    }
}

export{updateConsultas}