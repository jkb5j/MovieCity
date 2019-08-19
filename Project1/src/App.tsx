import React from 'react';
import './App.scss';
import { FirstComponent } from './componentsproject1/first/first.component';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './componentsproject1/not-found/not-found.component';
import { NavComponent } from './components/app-nav/app-nav.component';
import { Norris } from './componentsproject1/norris/norris.component';
import { Pokemon } from './componentsproject1/pokemon/pokemon.component';
import { Nested } from './componentsproject1/nested/nested.component';
import { SignIn } from './components/sign-in/sign-in.component';
import { PostReimbs } from './componentsproject1/post-reimbursements/post.reimbs';
import { PatchUser } from './componentsproject1/update-user/update-user.component';
import Users from './componentsproject1/users/users.component';
import MyUser from './componentsproject1/users/my.users.component';
import GetMovies from './components/movies/get-movies/get-movies.component'
import FavMovies from './components/movies/favorite-movies/fav-movies.component';
import { PostUser } from './components/users/post-user/post-user.component';
import GetUsers from './components/users/get-users/get-users.component';
import { UpdateUser } from './components/users/update-user/update-user.component';
import {UserProfile} from './components/profile/user-profile.component';
import GetFollowers from './components/followers/get-followers/get-followers.component';
import GetRecommendations from './components/recommendations/get-recommendations/get-recommendations.component';
import GetPending from './components/pending/get-pending/get-pending.component';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavComponent />
        {/* The switch will only render the first route to match */}
        <Switch>
          <Route path="/movies" component={GetMovies} />
          <Route path="/favorite-movie" component={FavMovies} />
          <Route path="/followers" component={GetFollowers} />
          <Route path="/recommendations" component={GetRecommendations} />
          <Route path="/post-reimbs" component={PostReimbs} />
          <Route path="/pending" component={GetPending} />
          <Route path="/update-user" component={PatchUser} />
          <Route path="/chuck-norris" component={Norris} />
          <Route path="/nested" component={Nested} />
          <Route path="/pokemon" component={Pokemon} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/first" component={FirstComponent} />
          <Route path="/my-user-info" component={MyUser} />
          <Route path="/all-users" component={Users} />
          <Route path="/post-user" component={PostUser} />
          <Route path="/find-users" component={GetUsers} />
          <Route path="/patch-user" component={UpdateUser} />
          <Route path="/profile" component={UserProfile}/>
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
