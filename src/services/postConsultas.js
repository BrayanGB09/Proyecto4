async function postConsultas(nombre,apellido,consultas,date) {
    try {
     
        const userData = { 
            nombre,
            apellido,
            consultas,
            date
         
        };

        const response = await fetch("http://localhost:3001/consultas", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        return await response.json();

        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}

export{postConsultas}