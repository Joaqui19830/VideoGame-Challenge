import { createSlice } from "@reduxjs/toolkit";

const limitOfElement = 5;

export const videogamesSlice = createSlice({
  name: "Videogames",
  initialState: {
    isLoading: true,
    videoGames: [],
    oldVideoGames: [],
    selectedVideoGame: undefined,
    page: 0,
    hideNextPageButton: false,
    hidePreviousPageButton: true,
  },
  reducers: {
    startLoading: (state /* action */) => {
      state.isLoading = true;
    },
    setVideoGames: (state, actions) => {
      state.isLoading = false;
      // console.log(actions);

      state.oldVideoGames = actions.payload.videoGames;
      const aux = [...state.oldVideoGames];

      state.videoGames = [
        ...aux.slice(
          state.page * limitOfElement,
          (state.page + 1) * limitOfElement
        ),
      ];
    },
    filterVideoGame: (state, actions) => {
      const valueToFilter = actions.payload.value.toUpperCase().trim();
      if (valueToFilter === "") {
        const aux = [...state.oldVideoGames];

        state.videoGames = [
          ...aux.slice(
            state.page * limitOfElement,
            (state.page + 1) * limitOfElement
          ),
        ];
      } else {
        state.videoGames = state.oldVideoGames.filter((videogame) =>
          videogame.name.toUpperCase().includes(valueToFilter)
        );
      }
    },
    setSelectedVideoGame: (state, actions) => {
      state.selectedVideoGame = actions.payload.selectedVideoGame;
    },
    filtrarPorOrdenDeNombre: (state, actions) => {
      const valueToFilter = actions.payload === "asc";
      if (valueToFilter) {
        state.videoGames.sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
      } else {
        state.videoGames.sort((a, b) => {
          if (a.name > b.name) {
            return -1;
          }
          if (a.name < b.name) {
            return 1;
          }
          // a must be equal to b
          return 0;
        });
      }
    },
    filtrarPorRating: (state, actions) => {
      const valueToFilter = actions.payload === "asc";
      if (valueToFilter) {
        state.videoGames.sort((a, b) => {
          if (a.rating > b.rating) {
            return -1;
          }
          if (a.rating < b.rating) {
            return 1;
          }
          // a must be equal to b
          return 0;
        });
      } else {
        state.videoGames.sort((a, b) => {
          if (a.rating > b.rating) {
            return 1;
          }
          if (a.rating < b.rating) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
      }
    },
    filtrarPorGenero: (state, actions) => {
      if (actions.payload === "All") {
        state.videoGames = state.oldVideoGames;
      } else {
        state.videoGames = state.oldVideoGames.filter(
          (game) =>
            game.generos.filter((e) => e.name === actions.payload).length > 0
        );
      }
    },

    filtrarPorApiOBdd: (state, actions) => {
      if (actions.payload === "Api") {
        state.videoGames = state.oldVideoGames.filter((item) => {
          return item.created === false;
        });
      } else {
        state.videoGames = state.oldVideoGames.filter((item) => {
          return item.created === true;
        });
      }
    },
    setPage: (state, actions) => {
      const newPage = state.page + 1;
      const aux = [...state.oldVideoGames];
      const newVideoArray = aux.slice(
        newPage * limitOfElement,
        (newPage + 1) * limitOfElement
      );
      if (newVideoArray.length !== 0) {
        state.page = newPage;
        state.videoGames = [];
        state.videoGames = newVideoArray;
        state.hidePreviousPageButton = false;
      } else {
        state.hideNextPageButton = true;
      }
    },
    setPagePrevius: (state, actions) => {
      if (state.page !== 0) {
        state.page = state.page - 1;
        const aux = [...state.oldVideoGames];
        state.videoGames = [
          ...aux.slice(
            state.page * limitOfElement,
            (state.page + 1) * limitOfElement
          ),
        ];

        if (state.page === 0) {
          state.hidePreviousPageButton = true;
        } else {
          state.hideNextPageButton = false;
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  startLoading,
  setVideoGames,
  filterVideoGame,
  setSelectedVideoGame,
  filtrarPorOrdenDeNombre,
  filtrarPorApiOBdd,
  filtrarPorGenero,
  filtrarPorRating,
  setPage,
  setPagePrevius,
} = videogamesSlice.actions;
