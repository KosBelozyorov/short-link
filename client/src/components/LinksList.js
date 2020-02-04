import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

export const LinksList = ({ links }) => {
  if (!links.length) {
    return <h2 className="center">No added links</h2>;
  }

  return (
    <section className="links-container">
      <h1>List of links</h1>
      <div className="divider" />
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Original</th>
            <th>Short links</th>
            <th>Info</th>
          </tr>
        </thead>

        <tbody>
          {links.map((link, index) => {
            return (
              <tr key={link._id}>
                <td>{index + 1}</td>
                <td>{link.from}</td>
                <td>{link.to}</td>
                <td>
                  <Link
                    to={`/detail/${link._id}`}
                    title="click to get detail info"
                  >
                    info
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

LinksList.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
};
