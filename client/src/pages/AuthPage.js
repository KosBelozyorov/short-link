import React, { useState, useEffect, useContext } from 'react';
import { useHttp } from '../hooks/http.hook';
import { useMessage } from '../hooks/message.hook';
import { AuthContext } from '../context/AuthContext';

export const AuthPage = () => {
  const auth = useContext(AuthContext);
  const message = useMessage();
  const { loading, request, error, clearError } = useHttp();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

  // TODO: check this hook
  useEffect(() => {
    window.M.updateTextFields();
  }, []);

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', { ...form });

      message(data.message);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e.message);
    }
  };

  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', { ...form });

      auth.login(data.token, data.userId);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e.message);
    }
  };

  return (
    <div className="row">
      <div className="auth-container col s6 l4">
        <h1>SLM</h1>
        <div className="card blue darken-1">
          <div className="card-content white-text">
            <span className="card-title">Authorization</span>
            <div>
              <div className="input-field">
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="yellow-input"
                  value={form.email}
                  onChange={changeHandler}
                  title="test@test.com"
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field">
                <input
                  id="password"
                  type="password"
                  name="password"
                  className="yellow-input"
                  value={form.password}
                  onChange={changeHandler}
                  title="test4test"
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>
          </div>
          <div className="card-action register-page-action">
            <button
              className="btn yellow darken-4 waves-effect waves-light"
              type="button"
              onClick={loginHandler}
              disabled={loading}
            >
              Login
            </button>
            <button
              className="btn grey lighten-1 black-text waves-effect waves-light"
              type="button"
              onClick={registerHandler}
              disabled={loading}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
