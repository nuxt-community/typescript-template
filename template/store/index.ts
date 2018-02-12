import {Actions, Getters, IPerson, IState, Mutations} from '~/types'
import axios from '~/plugins/axios'

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
  selectedPerson: (state:IState) => {
    const p = state.people.find((person:IPerson) => person.id === state.selected)
    return p ? p : { first_name: 'Please,', last_name: 'select someone' }
  }
}

export const actions:Actions = {
  async setPeople({ commit }) {
    const people = (await axios.get('/random-data.json')).data.slice(0,3);
    commit('setPeople', people);
  },
  select({ commit }, id:number) {
    commit('select', id)
  }
}
