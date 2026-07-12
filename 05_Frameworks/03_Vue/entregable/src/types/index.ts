export interface Meal {
    id: number;
    name: string;
    weekDay: string;
    dinner: boolean;
}

export function createNoMealItem(lunch: boolean): Meal[] {
    return [{
        id: 0,
        name: "No hay comidas",
        weekDay: "",
        dinner: lunch
    }]
}

export function createEmptyMeal(lunch: boolean): Meal {
    return {
        id: 0,
        name: "",
        weekDay: "Dia de la semana",
        dinner: lunch
    }
}