const SELECT = 'SELECT'

export const state = {
  selected: 1
}

export const mutations = {
  [SELECT](state, id) {
    console.log({ state, id })
    state.selected = id
  }
}
