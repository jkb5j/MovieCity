import React from 'react';
import './App.scss';
import { FirstComponent } from './components/first/first.component';
import Second from './components/second/second.component';
import Third from './components/third/third.component';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './components/not-found/not-found.component';
import { NavComponent } from './components/app-nav/app-nav.component';
import { Home } from './components/home/home.component';
import { Clicker } from './components/clicker/clicker.component';
import { TicTacToe } from './components/tic-tac/tic-tac.component';
import { Norris } from './components/norris/norris.component';
import { Pokemon } from './components/pokemon/pokemon.component';
import { Nested } from './components/nested/nested.component';
import { SignIn } from './components/sign-in/sign-in.component';
import Cards from './components/cards/cards.component';
import Reimbursements from './project-1/components/reimbursements/reimbursements.components';
import { PostReimbs } from './project-1/components/post-reimbursements/post.reimbs';
import { PatchReimbs } from './project-1/components/update-reimbs/update.reimbursement';
import { PatchUser } from './project-1/components/update-user/update-user.component';
import Users from './project-1/components/users/users.component';
import MyUser from './project-1/components/users/my.users.component';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavComponent />
        {/* The switch will only render the first route to match */}
        <Switch>
          <Route path="/reimbursements" component={Reimbursements} />
          <Route path="/post-reimbs" component={PostReimbs} />
          <Route path="/update-reimbs" component={PatchReimbs} />
          <Route path="/update-user" component={PatchUser} />
          <Route path="/second" component={Second} />
          <Route path="/third" component={Third} />
          <Route path="/cards" component={Cards} />
          <Route path="/chuck-norris" component={Norris} />
          <Route path="/clicker" component={Clicker} />
          <Route path="/home" component={Home} />
          <Route path="/nested" component={Nested} />
          <Route path="/pokemon" component={Pokemon} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/tic-tac-toe" component={TicTacToe} />
          <Route path="/first" component={FirstComponent} />
          <Route path="/my-user-info" component={MyUser} />
          <Route path="/all-users" component={Users} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
