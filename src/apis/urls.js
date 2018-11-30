// const prefix = "https://globalgo.delbertbeta.cc/v1"
const prefix = "/v1"

export default {
    register: prefix + '/register',
    login: prefix + '/login',
    userModify:id => `${prefix}/user/${id}`,
  

}