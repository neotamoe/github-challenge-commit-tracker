import Api from '@/services/Api'

export default {
  getAllChallenges () {
    return Api().get('challenges')
  },
  addChallenge (params) {
    return Api().post('challenges', params)
  },
  updateChallenge (params) {
    return Api().put('challenges/' + params.id, params)
  },  
  getChallenge (params) {
    return Api().get('challenges/' + params.id)
  },
  deleteChallenge (id) {
    return Api().delete('challenges/' + id)
  }
}