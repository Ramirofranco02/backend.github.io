class TicketManager {
    constructor() {
        this.eventos = [];
        this.precioBaseDeGanancia = 0.15;
        this.autoIncrementId = 1;
    }

    getEventos() {
        // Devolver una copia de los eventos en lugar de imprimirlos directamente
        return this.eventos.map(evento => ({
            id: evento.id,
            nombre: evento.nombre,
            lugar: evento.lugar,
            precio: evento.precio,
            capacidad: evento.capacidad,
            fecha: evento.fecha.toLocaleDateString(),
            participantes: evento.participantes.join(', ')
        }));
    }

    agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date()) {
        // Validar precio y capacidad
        if (isNaN(precio) || isNaN(capacidad) || precio <= 0 || capacidad <= 0) {
            console.error("Precio y capacidad deben ser números positivos.");
            return;
        }

        // Aplicar incremento al precio
        precio += precio * this.precioBaseDeGanancia;

        const nuevoEvento = {
            id: this.autoIncrementId++,
            nombre: nombre,
            lugar: lugar,
            precio: precio,
            capacidad: capacidad,
            fecha: fecha,
            participantes: []
        };

        this.eventos.push(nuevoEvento);
        console.log(`Evento '${nombre}' agregado con éxito. ID: ${nuevoEvento.id}`);
    }
}

const ticketManager = new TicketManager();

ticketManager.agregarEvento("Concierto", "Estadio", 100);
ticketManager.agregarEvento("Conferencia", "Centro de Convenciones", 50, 200, new Date('2024-02-15'));

// Obtener eventos y mostrarlos
const eventos = ticketManager.getEventos();
console.log("Eventos guardados:");
eventos.forEach(evento => {
    console.log(`ID: ${evento.id}, Nombre: ${evento.nombre}, Lugar: ${evento.lugar}, Precio: ${evento.precio}, ` +
                `Capacidad: ${evento.capacidad}, Fecha: ${evento.fecha}, Participantes: ${evento.participantes}`);
});
