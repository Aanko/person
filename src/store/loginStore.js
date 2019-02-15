import Axios from "axios";
export default {
    //基础的state
    state: {
        loginName: "admin",
        loginPwd: "123456",
        userdata: ''
    },
    //模块state
    mutations: {

    },
    actions: {
        login(state) {
            Axios.post('/login/loginVerify',
                JSON.stringify({
                    userCode: 'admin',
                    userPassword: '123456'
                })
            ).then(function (res) {
                console.log(res);
                state.userdata=res
            }).catch(function (error) {
                console.log(error);
            })

        }
    },
    getters: {

    }
}
