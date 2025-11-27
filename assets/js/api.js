


async function fetchProfileData() {
    try {
        const url = 'https://raw.githubusercontent.com/GustavoDiniz17/Portifolio/refs/heads/main/data/profile.json';
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Erro ao buscar dados do perfil:', error);
        throw error;
    }
}