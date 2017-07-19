import { getPeople } from "~/api/people"

export const state = () => ({
  selected: 1,
  people: []
})

export const mutations = {
  select(state, id) {
    state.selected = id
  },
  setPeople(state, people) {
    state.people = people
  }
}

export const getters = {
  selectedPerson: state => {
    const p = state.people.find(person => person.id === state.selected)
    return p ? p : { first_name: 'Please,', last_name: 'select someone' }
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    commit('setPeople', await getPeople(3))
  },
  select({ commit }, id) {
    commit('select', id)
  }
}
