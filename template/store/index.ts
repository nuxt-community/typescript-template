import { getPeople } from '~/api/people'
import {Actions, Getters, IPerson, IState, Mutations} from '~/types'

export const state = () => ({
  selected: 1,
  people: []
} as IState)

export const mutations:Mutations = {
  select(state:IState, id:number) {
    state.selected = id
  },
  setPeople(state:IState, people:IPerson[]) {
    state.people = people
  }
}

export const getters:Getters = {
  selectedPerson: state => {
    const p = state.people.find((person:IPerson) => person.id === state.selected)
    return p ? p : { first_name: 'Please,', last_name: 'select someone' }
  }
}

export const actions:Actions = {
  async nuxtServerInit({ commit }) {
    commit('setPeople', await getPeople(3))
  },
  select({ commit }, id:number) {
    commit('select', id)
  }
}
