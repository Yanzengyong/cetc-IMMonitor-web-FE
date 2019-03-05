import Cookies from 'js-cookie'

const cookieExpires = 7 //cookie 保存的天数

const TOKEN_KEY = 'token'
const USER_INFO = 'userInfo'

export const setToken = (token) => {
  Cookies.set(TOKEN_KEY, token, {
    expires: cookieExpires || 1
  })
}

export const setUserInfo = (userInfo) => {
  Cookies.set(USER_INFO, JSON.stringify(userInfo), {
    expires: cookieExpires || 1
  })
}

export const getToken = () => {
  const token = Cookies.get(TOKEN_KEY)
  if (token) return token
  else return false
}

export const getUserInfo = () => {
  const userInfo = Cookies.get(USER_INFO)
  if (userInfo) return JSON.parse(userInfo)
  else return false
}


export const setLocation = (city) => {
  Cookies.set('Location', city, {
    expires: cookieExpires || 1
  })
}


export const getLocation = () => {
  const Location = Cookies.get('Location')
  if (Location) return Location
  else return false
}
