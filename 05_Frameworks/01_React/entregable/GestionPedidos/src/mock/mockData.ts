export enum StatusOrder {
    Validado = "Validado",
    Pendiente = "Pendiente"
}

export interface Order {

    id: number,
    estado: StatusOrder,
    descripcion: string,
    importe: number,

}


export const mockOrders: Order[] = [
    {
        id: 1,
        estado: StatusOrder.Pendiente,
        descripcion: "Reactivos maquinaria",
        importe: 35,
    },
    {
        id: 2,
        estado: StatusOrder.Pendiente,
        descripcion: "Recambios impresión",
        importe: 35,
    },
    {
        id: 3,
        estado: StatusOrder.Pendiente,
        descripcion: "Soportes plataforma",
        importe: 35,
    },
    {
        id: 4,
        estado: StatusOrder.Pendiente,
        descripcion: "Máquina de cortar madera",
        importe: 350,
    },
    {
        id: 5,
        estado: StatusOrder.Pendiente,
        descripcion: "Recambios cortadora",
        importe: 350,
    },
]