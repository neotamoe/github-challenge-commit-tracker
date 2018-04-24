import Api from '@/services/Api';
import axios from 'axios'

export default {
  getAllChallenges () {
    return Api().get('challenges')
  },
  addChallenge (params) {
    return Api().post('challenges', params)
  },
  addParticipants(params) {
    return Api().post('participants', params)
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