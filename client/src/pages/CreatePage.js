import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useHttp } from '../hooks/http.hook';
import { useMessage } from '../hooks/message.hook';
import { AuthContext } from '../context/AuthContext';

export const CreatePage = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const { request, error, clearError } = useHttp();
  const [link, setLink] = useState('');
  const message = useMessage();

  useEffect(() => {
    window.M.updateTextFields();
  }, []);

  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

  const pressHandler = async event => {
    event.preventDefault();
    try {
      const data = await request(
        '/api/link/generate',
        'POST',
        { from: link },
        {
          Authorization: `Bearer ${auth.token}`,
        },
      );

      history.push(`/detail/${data.link._id}`);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('error: ', e.message);
    }
  };

  return (
    <div className="row">
      <h1>Create link</h1>
      <div className="col s12 m8">
        <form onSubmit={pressHandler} className="create-link-form input-field">
          <input
            type="text"
            id="link"
            value={link}
            onChange={e => setLink(e.target.value)}
            onKeyPress={pressHandler}
            className="blue-input"
          />
          <label htmlFor="link">Input link</label>

          <button
            type="submit"
            className="btn blue darken-1 waves-effect waves-light"
            onSubmit={pressHandler}
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};
