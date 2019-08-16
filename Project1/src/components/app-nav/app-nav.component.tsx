import React from 'react';
import { Link } from 'react-router-dom';
//import RevLogo from '../../assets/rev-logo.png';
import RevLogo from '../../assets/movie_city-logo.png';
//import MovirLogo from '../../assets/movie_city-logo.png';

export class NavComponent extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-expand-lg navbar-light bg-light display-front nav-pad">
        <div className="navbar-header c-pointer shift-left">
          <Link to="/home" className="unset-anchor">
            <img className="img-adjust-position rev-logo" src={RevLogo} alt="revature" />
          </Link>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample04">
          <ul className="navbar-nav ml-auto margin-nav">
          <li className="nav-item active">
                <Link to="/profile" className="unset-anchor nav-link">User Profile</Link>
            </li>
            <li className="nav-item active">
                <Link to="/followers" className="unset-anchor nav-link">Followers</Link>
            </li>
            <li className="nav-item active">
                <Link to="/friends" className="unset-anchor nav-link">Friends</Link>
            </li>
            <li className="nav-item active dropdown">
              <div className="nav-link dropdown-toggle pointer" id="examples-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Users</div>
              <div className="dropdown-menu" aria-labelledby="examples-dropdown">
                <div className="dropdown-item"><Link to="/my-user" className="unset-anchor nav-link active">My Info</Link></div>
                <div className="dropdown-item"><Link to="/find-users" className="unset-anchor nav-link active">Find Other User</Link></div>
                <div className="dropdown-item"><Link to="/patch-user" className="unset-anchor nav-link active">Update My User</Link></div>
                <div className="dropdown-item"><Link to="/post-user" className="unset-anchor nav-link active">Create A User</Link></div>
              </div>
            </li>
            <li className="nav-item active">
                <Link to="/sign-in" className="unset-anchor nav-link">Sign In</Link>
            </li>
            <li className="nav-item active dropdown">
              <div className="nav-link dropdown-toggle pointer" id="examples-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Movies</div>
              <div className="dropdown-menu" aria-labelledby="examples-dropdown">
                <div className="dropdown-item"><Link to="/movies" className="unset-anchor nav-link active">All Movies</Link></div>
                <div className="dropdown-item"><Link to="/recommended-movie" className="unset-anchor nav-link active">Recommeneded Movies</Link></div>
                <div className="dropdown-item"><Link to="/favorite-movie" className="unset-anchor nav-link active">Favorite Movies</Link></div>
                <div className="dropdown-item"><Link to="/find-movie" className="unset-anchor nav-link active">Find Movie</Link></div>
                <div className="dropdown-item"><Link to="/update-movie" className="unset-anchor nav-link active">Update Movie</Link></div>
                <div className="dropdown-item"><Link to="/post-movie" className="unset-anchor nav-link active">Add Movie</Link></div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}