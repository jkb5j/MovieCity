import React from 'react';
import { Link } from 'react-router-dom';
import RevLogo from '../../assets/rev-logo.png';

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
              <Link to="/my-user-info" className="unset-anchor nav-link">My Info</Link>
            </li>
            <li className="nav-item active">
            <Link to="/update-user" className="unset-anchor nav-link">Update My Info</Link>
            </li>
            <li className="nav-item active">
            <Link to="/all-users" className="unset-anchor nav-link">All Users</Link>
            </li>
            <li className="nav-item active">
            <Link to="/reimbursements" className="unset-anchor nav-link">Reimbursements</Link>
            </li>
            <li className="nav-item active">
              <Link to="/post-reimbs" className="unset-anchor nav-link">Post A Reimbursement</Link>
            </li>
            <li className="nav-item active">
              <Link to="/update-reimbs" className="unset-anchor nav-link">Resolve Reimbursements</Link>
            </li>
            <li className="nav-item active">
            <Link to="/sign-in" className="unset-anchor nav-link">Sign In</Link>
            </li>
            {/* <li className="nav-item active dropdown"> */}
              {/* <div className="nav-link dropdown-toggle pointer" id="examples-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Examples</div> */}
              {/* <div className="dropdown-menu" aria-labelledby="examples-dropdown"> */}
                {/* <div className="dropdown-item"><Link to="/all-users" className="unset-anchor nav-link">All Users</Link></div> */}
                {/* <div className="dropdown-item"><Link to="/first" className="unset-anchor nav-link active">First</Link></div> */}
                {/* <div className="dropdown-item"><Link to="/clicker" className="unset-anchor nav-link active">Clicker Game</Link></div> */}
                {/* <div className="dropdown-item"><Link to="/tic-tac-toe" className="unset-anchor nav-link active">Tic Tac Toe Game</Link></div> */}
                {/* <div className="dropdown-item"></div> */}
                {/* <div className="dropdown-item"><Link to="/pokemon" className="unset-anchor nav-link active">Pokemon</Link></div> */}
                {/* <div className="dropdown-item"><Link to="/cards" className="unset-anchor nav-link active">Cards</Link></div> */}
                {/* <div className="dropdown-item"><Link to="/clicker" className="unset-anchor nav-link active">Clicker</Link></div> */}
                {/* <div className="dropdown-item"><Link to="/home" className="unset-anchor nav-link active">Home</Link></div> */}
              {/* </div> */}
            {/* </li> */}
            <li className="nav-item active">
            <Link to="/chuck-norris" className="unset-anchor nav-link">Chuck Norris Jokes</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}