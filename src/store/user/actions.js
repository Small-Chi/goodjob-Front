import { api } from '@/plugins/axios.js'
import swal from 'sweetalert2'
import router from '@/router'

export const userlogin = async ({ commit }, form) => {
  try {
    const { data } = await api.post('/users/login', form)
    commit('login', data.result)
    // router.push('/')
    swal.fire({
      icon: 'success',
      title: '成功',
      text: '登入成功'
    })
  } catch (error) {
    swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.response.data.message
    })
  }
}

export const userlogout = async ({ commit, state }) => {
  try {
    await api.delete('/users/logout', {
      headers: {
        authorization: 'Bearer ' + state.token
      }
    })
    commit('logout')
    router.push('/')
    swal.fire({
      icon: 'success',
      title: '成功',
      text: '登出成功'
    })
  } catch (error) {
    swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.response.data.message
    })
  }
}

export const usergetInfo = async ({ commit, state }) => {
  if (state.token.length === 0) return
  try {
    const { data } = await api.get('/users/me', {
      headers: {
        authorization: 'Bearer ' + state.token
      }
    })
    commit('getInfo', data.result)
  } catch (error) {
    commit('logout')
  }
}

export const addfavorite = async ({ commit, state }, data) => {
  if (state.token.length === 0) {
    swal.fire({
      icon: 'error',
      title: '錯誤',
      text: '請先登入'
    })
    router.push('/login')
    return
  }
  try {
    const { data: resData } = await api.post(
      '/users/me/favorite',
      { case: data },
      {
        headers: {
          authorization: 'Bearer ' + state.token
        }
      }
    )
    commit('updateFavorite', resData.result)
    swal.fire({
      icon: 'success',
      title: '成功',
      text: '加入收藏成功'
    })
  } catch (error) {
    swal.fire({
      icon: 'error',
      title: '錯誤',
      text: '加入收藏失敗'
    })
  }
}
