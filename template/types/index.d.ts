import {GetterTree, MutationTree, ActionTree} from "vuex"

export interface IPerson {
  id: number
  first_name: string,
  last_name: string,
  contact: object,
  gender: string,
  ip_address: string,
  avatar: string,
  address: string,
  country: string,
  postalCode: string,
  state: string,
  street: string
}

export interface IState {
  selected: number,
  people: IPerson[]
}

export type Getters = GetterTree<IState, any>
export type Mutations = MutationTree<IState>
export type Actions = ActionTree<IState, any>