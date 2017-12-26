import Api from '@/services/Api'

export default {
  fetchEntries () {
    return Api().get('entries')
  },
  addEntry (params) {
    return Api().post('entries', params)
  },
  updateEntry (params) {
    return Api().put('entries/' + params.id, params)
  },
  getEntry (params) {
    return Api().get('entries/' + params.id)
  }
}
