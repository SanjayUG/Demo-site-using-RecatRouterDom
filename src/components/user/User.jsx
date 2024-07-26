import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return (
    <div className="bg-gray-300 text-black text-3xl p-4">
      User(This is user id): {id}
    </div>
  );
}

export default User;
