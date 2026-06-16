export enum StatusOrder {
    Validado = "Validado",
    Pendiente = "Pendiente"
}

export interface OrderLine {

    id: number,
    estado: StatusOrder,
    descripcion: string,
    importe: number,
}

export interface Order {
    orderNumber: number
    supplier: string,
    date: Date;
    totalOrder: number,
    status: number;
    orderLines: OrderLine[]
}

export const mockOrders: Order = {

    orderNumber: 123456,
    supplier: "Pepito S.A.",
    date: new Date(2026, 6, 15),
    totalOrder: 0,
    status: 0,
    orderLines: [
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
} 