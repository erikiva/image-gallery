export default function images(state = { images: [] }, action) {
  console.log(state, action);
  switch (action.type) {
    case "IMAGES_RECEIVED":
      console.log(";ldkl", action.images);
      return { ...state, images: action.images };
    case "LOAD_IMAGES_FAILURE":
      return state;
    case "SELECT_IMAGE":
      return { ...state, selectedImage: action.image };
    default:
      return state;
  }
}
