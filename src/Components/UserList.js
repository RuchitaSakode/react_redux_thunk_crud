import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import APICall from "../AsyncActions/asyncUserAction";

export default function UserList() {
  const userData = useSelector((state) => state.userList);
  console.log("Check Userdata", userData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(APICall.getUserList());
  }, []);
  return (
    <>
      <table id="customers">
        <tbody>
          <tr>
            <th>Id</th>
            <th>My First Name</th>
            <th>Last Name</th>
            {/* <th>Email</th> */}
            <th>Action</th>
          </tr>
          {userData && userData.data.data && userData.data.data.length > 0 ? (
            userData.data.data.map((value, index) => {
              const { id, firstName, lastName, email } = value;
              return (
                <tr key={index}>
                  <td>{id}</td>
                  <td>{firstName}</td>
                  <td>{lastName}</td>
                  {/* <td>{email}</td> */}
                  <td>
                    <button className="btn-green" type="button">
                      Edit
                    </button>
                    <button className="btn-red" type="button">
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={4}>No Record Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
