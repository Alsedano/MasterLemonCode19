import { Order } from "@/mock/mockData";

export interface OrderContextModel {
    order: Order;
    setOrder: React.Dispatch<React.SetStateAction<Order>>;
}

export const createDefaultOrder = () => ({
    orderNumber: 0,
    supplier: "",
    date: new Date(),
    totalOrder: 0,
    status: 0,
    orderLines: [],
})