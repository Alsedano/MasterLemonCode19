import { createEmptyMeal, type Meal } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useMealStore = defineStore("meals", () => {
    const meals = ref<Meal[]>([]);
    /* const listItems = ref<Map<List["id"], ListItem[]>>(new Map()); */

    const addDish = async (name: string, weekDay: string, dinner: boolean) => {
        const newMeal: Meal = {
            name: name,
            weekDay: weekDay,
            dinner: dinner
        };

        meals.value.push(newMeal);

        return meals;
    };

    const getdinnerMeals = async () => {
        return meals.value.filter(m => m.dinner) || [];
    };

    const getDinnerMeals = async () => {
        return meals.value.filter(m => !m.dinner) || [];
    };

    const getLunchMealsForDay = (day: string): Meal[] => {
        const lunchMeals = meals.value.filter(m => !m.dinner && m.weekDay == day)
        return lunchMeals?.length > 0 ? lunchMeals : createEmptyMeal(true);
    };

    const getDinnerMealsForDay = (day: string) => {
        const dinnerMeals = meals.value.filter(m => m.dinner && m.weekDay == day);
        return dinnerMeals?.length > 0 ? dinnerMeals : createEmptyMeal(false);
    };
    /* 
        const updateList = async (listId: string, updatedList: Partial<List>) => {
            const list = lists.value.find((list) => list.id === listId);
            if (list) {
                Object.assign(list, updatedList);
            }
        };
    
        const deleteList = async (listId: string) => {
            lists.value = lists.value.filter((list) => list.id !== listId);
        };
    
        const createListItem = async (listId: string, content = "") => {
            const isListCreated = listItems.value.has(listId);
    
            let position = 0;
            if (isListCreated) {
                position = listItems.value.get(listId)?.length || 0;
            }
            const newListItem: ListItem = {
                id: crypto.randomUUID(),
                listId,
                content,
                isChecked: false,
                position,
                createdAt: Date.now(),
            };
    
            if (isListCreated) {
                listItems.value.get(listId)?.push(newListItem);
            } else {
                listItems.value.set(listId, [newListItem]);
            }
    
            return newListItem;
        };
    
        const getListItems = async (listId: string) => {
            return listItems.value.get(listId) || [];
        };
    
        const updateListItem = async (itemId: string, listId: string, updatedItem: Partial<ListItem>) => {
            const listItemsIternal = await getListItems(listId);
            const item = listItemsIternal.find((item) => item.id === itemId);
            if (item) {
                Object.assign(item, updatedItem);
            }
            listItems.value.set(listId, listItemsIternal);
        };
    
        const deleteListItem = async (itemId: string, listId: string) => {
            const listItemsIternal = await getListItems(listId);
            const item = listItemsIternal.find((item) => item.id === itemId);
            if (item) {
                listItemsIternal.splice(listItemsIternal.indexOf(item), 1);
            }
            listItems.value.set(listId, listItemsIternal);
        }; */

    return {
        meals,
        addDish,
        getdinnerMeals,
        getDinnerMeals,
        getLunchMealsForDay,
        getDinnerMealsForDay
    };
});