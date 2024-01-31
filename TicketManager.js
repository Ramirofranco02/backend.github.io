class TicketManager {
    constructor() {
        this.eventos = [];
        this.precioBaseDeGanancia = 0.15;
        this.autoIncrementId = 1;
    }

    getEventos() {
        console.log("Eventos guardados:");
        this.eventos.forEach(evento => {
            console.log(`ID: ${evento.id}, Nombre: ${evento.nombre}, Lugar: ${evento.lugar}, Precio: ${evento.precio}, ` +
                        `Capacidad: ${evento.capacidad}, Fecha: ${evento.fecha}, Participantes: ${evento.participantes.join(', ')}`);
        });
    }

    agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date()) {
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

ticketManager.getEventos();
