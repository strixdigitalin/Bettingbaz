import React, { useState } from "react";
import MyBet from "../MyBet";

function MyAccount() {
  const [showBet, setshowBet] = useState("");
  return (
    <>
      <div className="account_detail">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <div className="profile_menu">
                <div className="profile_title">
                  <h3>My Account</h3>
                </div>
                <div
                  class="nav flex-column nav-pills"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    class="nav-link active"
                    id="v-pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-home"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                    My Profile
                  </button>
                  <button
                    class="nav-link"
                    id="v-pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    My Bet
                  </button>
                  <button
                    class="nav-link"
                    id="v-pills-messages-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-messages"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-messages"
                    aria-selected="false"
                  >
                    Bet History
                  </button>
                  <button
                    class="nav-link"
                    id="v-pills-messages-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-messages"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-messages"
                    aria-selected="false"
                    onClick={() => {
                      setshowBet(true);
                    }}
                  >
                    Running Bet
                  </button>
                  <button
                    class="nav-link"
                    id="v-pills-messages-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-messages"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-messages"
                    aria-selected="false"
                  >
                    My Wallet
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="profile_info">
                <div class="tab-content" id="v-pills-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="v-pills-home"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    <div className="profile_inr_info">
                      <div className="profile_title">
                        <h3>My Profile</h3>
                      </div>
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>First Name</td>
                            <td>Rahul</td>
                          </tr>
                          <tr>
                            <td>Last Name</td>
                            <td>Singh</td>
                          </tr>
                          <tr>
                            <td>User Name</td>
                            <td>rahulsing55</td>
                          </tr>
                          <tr>
                            <td>Email Id</td>
                            <td>rahulsingh154@gmail.com</td>
                          </tr>
                          <tr>
                            <td>Phone Num.</td>
                            <td>+919810291083</td>
                          </tr>
                          <tr>
                            <td>Password</td>
                            <td>
                              <div className="pass_inr">
                                <span>****</span>
                                <a href="#">Edit</a>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="v-pills-profile"
                    role="tabpanel"
                    aria-labelledby="v-pills-profile-tab"
                  >
                    <div className="profile_inr_info">
                      <div className="wallet_title">
                        <h3>My Wallet</h3>
                        <div className="blance_title">
                          <h3>My Balance</h3>
                          <h3>0.00</h3>
                        </div>
                      </div>
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>First Name</td>
                            <td>Rahul</td>
                          </tr>
                          <tr>
                            <td>Last Name</td>
                            <td>Singh</td>
                          </tr>
                          <tr>
                            <td>User Name</td>
                            <td>rahulsing55</td>
                          </tr>
                          <tr>
                            <td>Email Id</td>
                            <td>rahulsingh154@gmail.com</td>
                          </tr>
                          <tr>
                            <td>Phone Num.</td>
                            <td>+919810291083</td>
                          </tr>
                          <tr>
                            <td>Password</td>
                            <td>
                              <div className="pass_inr">
                                <span>****</span>
                                <a href="#">Edit</a>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="v-pills-messages"
                    role="tabpanel"
                    aria-labelledby="v-pills-messages-tab"
                  >
                    ...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      {showBet && <MyBet showBet={showBet} setshowBet={setshowBet} />}
    </>
  );
}
export default MyAccount;
