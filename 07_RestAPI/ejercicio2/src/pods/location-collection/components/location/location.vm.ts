export interface Location {
  id: number
  name: string
  type: string
  dimension: string
}

export const createEmptyLocation = (): Location => ({
  id: 0,
  name: "",
  type: "",
  dimension: "",
});
