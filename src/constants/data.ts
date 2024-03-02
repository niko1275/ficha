const navbarSections = [
    { 
        name: 'Exámenes', 
        url: '/examen', 
        subSections: [] 
    },
    { 
        name: 'Orden', 
        url: '/orden', 
        subSections: [
            { name: 'Gestores', url: '/orden/gestores' },
            { name: 'Gestores2', url: '/orden/gestores2' },
          
            // Puedes agregar más subsecciones aquí según sea necesario
        ]
    },
    { 
        name: 'Agenda', 
        url: '/agenda', 
        subSections: [
            { name: 'Eventos', url: '/agenda/eventos' },
            // Puedes agregar más subsecciones aquí según sea necesario
        ] 
    },
    { 
        name: 'Gestores', 
        url: '/gestores', 
        subSections: [
            { name: 'Eventos', url: '/agenda/eventos' },
            // Puedes agregar más subsecciones aquí según sea necesario
        ] 
    }
    // Puedes agregar más secciones principales aquí según sea necesario
];

export default navbarSections;