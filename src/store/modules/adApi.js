import Vue from 'vue';

const state = {
};

const getters = {    
};

const mutations = {
};

const actions = {

    //payload must be: {email, password} 
    metoda: ({commit}, payload) => {                
        console.log(Vue.axios.baseURL);
        Vue.axios        
            .post(Vue.axios.baseURL + "/auth/login", payload)
            .then(response => {
                commit("login", response.data);                
        });
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};