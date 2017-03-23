import Vue from 'vue';

const state = {
    //baseURL: "http://52.59.224.50:8080",
    isUserAuthenticated: false, 
    jwt: "",
    jwt_expires: 0,
    user: {
        type:"", //r
		name:"", //Fehim
		surname:"", //Dervisbegovic
		gender:"", //m
		username:"", //OS23424
		id:0, //
		auth:{
			smsToken:null,
			resetToken:null,
			phone:"", //38164123123",
			email:"", //fehimdervisbegovic@gmail.com",
			id: 0 //2
		}
    },   
    showLoginForm: false,
};

const getters = {
    showLoginForm: state => {
        state.showLoginForm = state.showLoginForm && !state.isUserAuthenticated;
        return state.showLoginForm;
    },
    isUserAuthenticated: state => {
        state.isUserAuthenticated = state.jwt && (Date.now() <= parseInt(state.jwt_expires));
        return state.isUserAuthenticated;
    },
    getAuthToken: state => {
        if ( Date.now() > parseInt(state.jwt_expires) ) {
            state.jwt = null;
            state.jwt_expires = null;
            user = null;
        }
        return state.jwt;
    }
};

const mutations = {
    toggleLoginForm: (state) => {        
        state.showLoginForm = !state.showLoginForm;
    },
    login: (state, payload) => {

        state.jwt = payload.token;
        state.jwt_expires = payload.expires;
        state.user = payload.user;

        localStorage.setItem("jwt", state.jwt);
        localStorage.setItem("jwt_expires", state.jwt_expires);
        localStorage.setItem("user", JSON.stringify(state.user));

        //state.isUserAuthenticated = true;
    },
    logout: (state) => {
        state.jwt = "";
        state.jwt_expires = "";
        state.user = "";

        localStorage.removeItem("jwt");
        localStorage.removeItem("jwt_expires");
        localStorage.removeItem("user");
    },
    //this proc sync localstorage with vuex state
    syncUserData: state => {
        console.log("Syncing localstorage with state...");
        if (typeof window !== 'undefined'){
            //this mean we are in the browser
            state.jwt = localStorage.getItem("jwt");
            state.jwt_expires = localStorage.getItem("jwt_expires");
            state.user = localStorage.getItem("user");
            console.log("Done...");
        }
        else {
            console.log("Failed, script running on the server side ...");
        }
    }
};

const actions = {

    //payload must be: {email, password} 
    login: ({commit}, payload) => {                
        //console.log(Vue.axios.baseURL);
        Vue.axios        
            .post(Vue.axios.baseURL + "/auth/login", payload)
            .then(response => {
                commit("login", response.data);                
        });
    },
    logout: ({commit}) => {
        commit("logout");
    },
    //this proc sync localstorage with vuex state
    syncUserData: ({commit}) => {
        commit("syncUserData");
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};