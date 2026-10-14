// Use export to be able to use a type in other files
export type Id = number | string

export interface MyEvent {
  id: Id
  host_id: Id
  title: string
  date: Date
  image_url?: string
  description?: string
  host?: User
  rsvps?: Rsvp[]
}

export interface Rsvp {
  event_id: Id
  name: string
  email: string
}

export interface User {
  id: Id
  name: string
  username: string
  email: string
}
