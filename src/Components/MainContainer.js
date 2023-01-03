import React, { useEffect, useState } from "react";
import AddUserForm from "./AddUserForm";
import UserList from "./UserList";
import modalActions from "../Actions/modalActions";
import { useDispatch } from "react-redux";
import allActions from "../Actions/allActions";

export default function MainContainer() {
  const [showAddUserForm, setShowAddUserForm] = useState(false);
  const dispatch = useDispatch();

  const changeModalStatus = () => {
    dispatch(allActions.modalActions.showModal());
    setShowAddUserForm(true);
  };
  useEffect(() => {
    dispatch(allActions.modalActions.hideModal());
  }, []);
  return (
    <div className="container">
      <div className="add-user-btn">
        <button type="button" onClick={() => changeModalStatus()}>
          Add User
        </button>
      </div>
      <UserList />
      {showAddUserForm ? <AddUserForm /> : null}
    </div>
  );
}
