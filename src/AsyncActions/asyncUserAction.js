import instance from "../axiosConfig";
import allActions from "../Actions/allActions";

const getUserList =
  (page = 1) =>
  async (dispatch) => {
    dispatch(allActions.userActions.getUserListStart());
    try {
      const response = await instance.get("/todos");
      dispatch(allActions.userActions.getUserListSuccess(response.data));
    } catch (err) {
      dispatch(allActions.userActions.getUserListFailure(err.message));
    }
  };
export default { getUserList };
