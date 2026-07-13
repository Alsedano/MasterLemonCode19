import FavoriteMeals from '@/components/FavoriteMeals.vue'
import MealPlanner from '@/components/MealPlanner.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: MealPlanner },
  { path: '/planner', component: MealPlanner },
  { path: '/favorites', component: FavoriteMeals },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
