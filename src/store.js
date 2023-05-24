import { reactive } from "vue";

export const store = reactive({
  arrMovies: [],
  arrShows: [],
  loading: false,
  errorMessage: "",
});
