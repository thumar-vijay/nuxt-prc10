import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      allCars: [],
      loading: false,
      apiError: false,
    },
    getters: {
      getAllCars: (state) => state.allCars,
      gatLoading: (state) => state.loading,
      getApiError: (state) => state.apiError,
    },
    mutations: {
      setAllCars: (state, payload) => (state.allCars = payload),
      setLoading: (state, payload) => (state.loading = payload),
      setApiError: (state, payload) => (state.apiError = payload),
    },

    actions: {
      async fetchCarDetails(vueContext) {
        const resCar = await this.$axios.$get(
          "https://testapi.io/api/dartya/resource/cardata"
        );
        const carList = resCar.data;
        vueContext.commit("setAllCars", carList);
        vueContext.commit("setLoading", false);
      },
      async fetchMyCar(vueContext, payload) {
        await this.$axios
          .$get(`https://testapi.io/api/dartya/resource/cardata/${payload}`)
          .then((res) => {
            vueContext.commit("setAllCars", res.data);
            vueContext.commit("setLoading", "showMyCar");
          })
          .catch((err) => {
            vueContext.commit("setApiError", err);
            vueContext.commit("setLoading", "showMyCar");
          });
      },
      // Last line of the actions
    },
  });
};

export default createStore;
