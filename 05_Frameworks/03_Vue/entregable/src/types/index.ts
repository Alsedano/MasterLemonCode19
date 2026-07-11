export interface Meal {
    name: string;
    weekDay: string;
    dinner: boolean;
}

export function createEmptyMeal(lunch: boolean): Meal[] {
    return [{
        name: "No hay comidas",
        weekDay: "",
        dinner: lunch
    }]
}