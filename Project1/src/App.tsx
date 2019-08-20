import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NavComponent } from './components/app-nav/app-nav.component';
import { Norris } from './components/norris/norris.component';
import { SignIn } from './components/sign-in/sign-in.component';
import GetMovies from './components/movies/get-movies/get-movies.component'
import FavMovies from './components/movies/favorite-movies/fav-movies.component';
import { PostUser } from './components/users/post-user/post-user.component';
import GetUsers from './components/users/get-users/get-users.component';
import { UpdateUser } from './components/users/update-user/update-user.component';
import {UserProfile} from './components/profile/user-profile.component';
import GetFollowers from './components/followers/get-followers/get-followers.component';
import GetPending from './components/pending/get-pending/get-pending.component';
import MyFriends from './components/friends/get-friends/get-friends.component';
import GetRecommendations from './components/recommendations/get-recommendations/get-recommendations.component';

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
          <Route path="/friends" component={MyFriends} />
          <Route path="/pending" component={GetPending} />
          <Route path="/chuck-norris" component={Norris} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/post-user" component={PostUser} />
          <Route path="/find-users" component={GetUsers} />
          <Route path="/patch-user" component={UpdateUser} />
          <Route path="/profile" component={UserProfile}/>
          <Route path="/recommended-movie" component={GetRecommendations}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
