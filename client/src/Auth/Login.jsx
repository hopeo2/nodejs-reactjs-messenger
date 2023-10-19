import React from "react";

function Login() {
    return (
        <>
            <div className="sign">
                <div className="container">
                    <div className="item">
                        <form>
                            <h2>ورود</h2>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    placeholder="ایمیل"
                                    required
                                    autoFocus
                                />
                                <button className="btn prepend">
                                    <i data-eva="person"></i>
                                </button>
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    id="password"
                                    className="form-control"
                                    placeholder="کلمه عبور"
                                    required
                                />
                                <button className="btn prepend">
                                    <i data-eva="lock"></i>
                                </button>
                            </div>
                            <button type="submit" className="btn primary">
                                ورود
                            </button>
                            <span>
                                ثبت نام نکرده اید؟
                            </span>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;