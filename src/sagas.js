import "babel-polyfill";
import { call, put, take } from "redux-saga/effects";
import { fetchImages } from "./flickr";

function* loadImages() {
  try {
    const images = yield fetchImages();
    console.log("images", images);
    yield put({ type: "IMAGES_RECEIVED", images });
    yield put({ type: "SELECT_IMAGE", image: images[0] });
  } catch (error) {
    yield put({ type: "LOAD_IMAGES_FAILURE", error });
  }
}

function* watchLoadImages() {
  while (true) {
    yield take("LOAD_IMAGES");
    yield call(loadImages);
  }
}

export function* rootSaga() {
  yield [watchLoadImages()];
}
