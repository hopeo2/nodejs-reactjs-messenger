import React, { useEffect } from "react";
import * as eva from "eva-icons";
import { connect } from "react-redux";
import userActions from "../Store/Actions/userActions";

function Register({ registerUser }) {
    useEffect(() => {
        eva.replace();
    }, []);
    return (
        <div className="sign">
            <div className="container">
                <div className="item">
                    <form
                        onSubmit={e => {
                            e.preventDefault();
                            registerUser({
                                userName:
                                    document.querySelector("#userName").value,
                                email: document.querySelector("#userEmail").value,
                                password:
                                    document.querySelector("#userPassword").value,
                            });
                        }}
                    >
                        <h2>ثبت نام</h2>
                        <div className="form-group">
                            <input
                                type="text"
                                id="userName"
                                className="form-control"
                                placeholder="مانند محمد بهرامی اصل"
                                required
                                autoFocus
                            />
                            <button className="btn prepend">
                                <i data-eva="person"></i>
                            </button>
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                id="userEmail"
                                className="form-control"
                                placeholder="مانند mohammad.ba@gmail.com"
                                required
                            />
                            <button className="btn prepend">
                                <i data-eva="email"></i>
                            </button>
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                id="userPassword"
                                className="form-control"
                                placeholder="********"
                                required
                            />
                            <button className="btn prepend">
                                <i data-eva="lock"></i>
                            </button>
                        </div>
                        <button type="submit" className="btn primary">
                            ثبت نام
                        </button>
                        <span>اکانت دارید؟</span>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default connect(
    (state) => {
        return {};
    },
    (dispatch) => {
        return {
            registerUser: (payload) => {
                dispatch({
                    type: userActions.USER_REGISTER,
                    payload,
                });
            },
        };
    }
)(Register);
