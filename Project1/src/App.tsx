import React from 'react';
import './App.scss';
import { FirstComponent } from './componentsproject1/first/first.component';
import Second from './componentsproject1/second/second.component';
import Third from './componentsproject1/third/third.component';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './componentsproject1/not-found/not-found.component';
import { NavComponent } from './componentsproject1/app-nav/app-nav.component';
import { Home } from './componentsproject1/home/home.component';
import { Clicker } from './componentsproject1/clicker/clicker.component';
import { TicTacToe } from './componentsproject1/tic-tac/tic-tac.component';
import { Norris } from './componentsproject1/norris/norris.component';
import { Pokemon } from './componentsproject1/pokemon/pokemon.component';
import { Nested } from './componentsproject1/nested/nested.component';
import { SignIn } from './components/sign-in/sign-in.component';
import Cards from './componentsproject1/cards/cards.component';
import Reimbursements from './componentsproject1/reimbursements/reimbursements.components';
import { PostReimbs } from './componentsproject1/post-reimbursements/post.reimbs';
import { PatchReimbs } from './componentsproject1/update-reimbs/update.reimbursement';
import { PatchUser } from './componentsproject1/update-user/update-user.component';
import Users from './componentsproject1/users/users.component';
import MyUser from './componentsproject1/users/my.users.component';
import GetMovies from './components/movies/get-movies/get-movies.component'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavComponent />
        {/* The switch will only render the first route to match */}
        <Switch>
          <Route path="/movies" component={GetMovies} />
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
