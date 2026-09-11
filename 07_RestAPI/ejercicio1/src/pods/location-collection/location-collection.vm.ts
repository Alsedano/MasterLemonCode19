export interface LocationEntityVm {
  totalCount: number;
  locations: LocationEntity[];
}

export interface LocationEntity {
  id: number
  name: string
  type: string
  dimension: string
}