import { type Meal } from '@/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMealStore = defineStore('meals', () => {
    const meals = ref<Meal[]>([])

    const addDish = async (name: string, weekDay: string, dinner: boolean) => {
        const newMeal: Meal = {
            id: meals.value.length,
            name: name,
            weekDay: weekDay,
            dinner: dinner,
        }

        meals.value.push(newMeal)

        return meals
    }

    const getdinnerMeals = async () => {
        return meals.value.filter((m) => m.dinner) || []
    }

    const getDinnerMeals = async () => {
        return meals.value.filter((m) => !m.dinner) || []
    }

    const getLunchMealsForDay = (day: string): Meal[] => {
        return meals.value.filter((m) => !m.dinner && m.weekDay == day)
    }

    const getDinnerMealsForDay = (day: string): Meal[] => {
        return meals.value.filter((m) => m.dinner && m.weekDay == day)
    }

    const getMeal = (id: number): Meal => {
        return meals.value.find((m) => m.id === id) as Meal
    }

    const getFavorites = (): Meal[] => {
        return meals.value.filter((m) => m.favorite)
    }

    const updateDish = async (id: number, name: string, weekDay: string, dinner: boolean) => {
        const m = meals.value.find((m) => m.id === id) as Meal
        m.name = name
        m.weekDay = weekDay
        m.dinner = dinner
    }

    const deleteMeal = async (id: number) => {
        const index = meals.value.findIndex((m) => m.id === id)
        meals.value.splice(index, 1)
    }

    const handleFavorite = async (id: number) => {
        const m = meals.value.find((m) => m.id === id) as Meal
        m.favorite = !m.favorite
    }

    const clearAllItems = async () => {
        meals.value = []
    }

    return {
        meals,
        addDish,
        getdinnerMeals,
        getDinnerMeals,
        getLunchMealsForDay,
        getDinnerMealsForDay,
        getMeal,
        getFavorites,
        updateDish,
        deleteMeal,
        handleFavorite,
        clearAllItems,
    }
},
    {
        persist: true,
    },
)
