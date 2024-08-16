const UserModule = (() => {
    // URL de la API
    const apiUrl = 'https://randomuser.me/api/?results=10';

    // Función para realizar la petición y obtener los datos
    const fetchUsers = async () => {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            return data.results;
        } catch (error) {
            console.error('Error al obtener los datos de la API:', error);
            return [];
        }
    };

    // Función para renderizar la información de los usuarios en el DOM
    const renderUsers = (users) => {
        const userContainer = document.getElementById('user-data');
        users.forEach(user => {
            const userCard = document.createElement('div');
            userCard.classList.add('user-card');

            userCard.innerHTML = `
                <img src="${user.picture.medium}" alt="Foto de ${user.name.first}" />
                <div>
                    <p><strong>Nombre:</strong> ${user.name.first} ${user.name.last}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Teléfono:</strong> ${user.phone}</p>
                </div>
            `;

            userContainer.appendChild(userCard);
        });
    };

    // Función para inicializar el módulo
    const init = async () => {
        const users = await fetchUsers();
        renderUsers(users);
    };

    // IIFE para iniciar el módulo al cargar la página
    return {
        init
    };
})();

UserModule.init();
