export interface LocationEntityApi {
  info: Info,
  results: LocationEntity[]
}

export interface Info {
  count: number
  pages: number
  next: string
  prev: any
}

export interface LocationEntity {
  id: number
  name: string
  type: string
  dimension: string
}