export default (state, action) => {
  switch (action.type) {
    case "UPDATE_ROOM":
      return {
        ...state,
        room: { ...state.room, ...action.payload }
      };
    default:
      return state;
  }
};
