import React from "react";
import { useNavigate } from "react-router";

const UserProfile = ({ account }) => {
  const navigate = useNavigate();
  const navigateprofil = () => {
    navigate(`/update/${account._id}`);
  };
  return (
    <div>
      <div>
        <div className=" d-flex justify-content-center">
          <div className="col-md-7">
            <div className="card p-3 py-4">
              <div className="text-center">
                <img
                  src="https://gomycodelearndev.blob.core.windows.net/profiles/06cda292-fc13-4c97-ae1b-2cf13d1b6f4d-133062700034967825.jpg"
                  width="100"
                  className="rounded-circle"
                  alt="user"
                />
              </div>
              <div className="text-center mt-3">
                <span className="bg-secondary p-1 px-4 rounded text-white">
                  you are a {account.role}
                </span>
                <h5 className="mt-2 mb-0">Hello {account.name}</h5>
                <br />
                <h4>Email</h4>
                <span>{account.email}</span>
                <div class="px-4 mt-1"></div>
                <div class="buttons">
                  <button
                    className="btn btn-primary px-4 ms-3"
                    onClick={() => navigateprofil()}
                  >
                    Update Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
