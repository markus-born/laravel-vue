import Vue from 'vue';

const state = {    
    lovCountries: [],//"name": "Crna Gora","abr": "MNE","domain": "me","dial": 382,"id": 1
    lovCities: [], //"country": 1,"name": "Andrijevica","abr": "AN","id": 2
    lovLocations: [], //"city": 7,"name": "Livno","abr": "LV","id": 1
    lovCategories: []
};

const getters = {
    lovCountries: state => {
        return state.lovCountries;
    },
    lovLocations: state => {
        return state.lovLocations;
    },
    lovCities: state => {
        return state.lovCities;
    }
};

const mutations = {
    setCountries: (state, payload) => {
        state.lovCountries = payload;        
    },
    setCities: (state, payload) => {
        state.lovCities = payload;        
    },
    setLocations: (state, payload) => {
        state.lovLocations = payload;        
    } 
};

const actions = {
    getCountries: ( {commit} ) => { 
        Vue.axios
            .get(Vue.axios.baseURL + "/country")
            .then( response => { 
                commit("setCountries", response.data);
            });
    }, 
    getCities: ( {commit}, payload ) => { 
        console.log("Getting cities for country: " + payload);
        Vue.axios
            .get(Vue.axios.baseURL + "/country/" + payload)
            .then( response => { 
                commit("setCities", response.data.cities);
                commit("setLocations", []);
            });
    },
    getLocations: ( {commit}, payload ) => { 
        console.log("Getting locations for city: " + payload);
        Vue.axios
            .get(Vue.axios.baseURL + "/city/" + payload)
            .then( response => { 
                commit("setLocations", response.data.locations);
            });
    }  
};

export default {
    state,
    getters,
    mutations,
    actions
};