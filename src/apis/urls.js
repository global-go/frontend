// const prefix = "https://globalgo.delbertbeta.cc/v1"
const prefix = "/v1"

export default {
    register: prefix + '/register',
    login: prefix + '/login',
    userModify:id => `${prefix}/user/${id}`,
    upload: prefix + '/images',
    putaway: prefix + '/admin/commodity',
    indexInfo: prefix + '/index/info',
    commodityModify: id => `${prefix}/admin/commodity/${id}`,
    cart: id => `${prefix}/user/${id}/cart/`,
    

}