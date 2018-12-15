import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

class PageProjectsList extends React.Component {
  componentDidMount() {

  }
  render() {
    return (
      <div className="container">
        {this.props.projects.map(project => (
          <div key={project.name}>
            <NavLink className="nav-link" to={`/projects/${project.name}`}>{project.name}</NavLink>
          </div>
        ))}
      </div>
    );
  }
}

PageProjectsList.propTypes = {
  projects: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  projects: state.projects,
});

export default connect(mapStateToProps)(PageProjectsList);
