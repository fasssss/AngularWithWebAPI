import { postState } from "./post-feature/post-state";
import { deleteState } from "./delete-feature/delete-state";
import { fetchState } from "./fetch-feature/fetch-state";
import {updateState} from "./update-feature/update-state";

export interface State {
  postState: postState;
  deleteState: deleteState;
  fetchState: fetchState;
  updateState: updateState;
}
