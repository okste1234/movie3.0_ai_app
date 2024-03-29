import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import { Movies, MovieInformation, Profile, Actors, NavBar } from '.';

function App() {
  return (
    <div className="root">
      <CssBaseline />
      <NavBar />
      <main className="content">
        <div className="toolbar" />
        <Routes>

          <Route
            exact
            path="/"
            element={<Movies />}
          />

          <Route
            exact
            path="/profile/:id"
            element={<Profile />}
          />

          <Route
            exact
            path="/movie/:id"
            element={<MovieInformation />}
          />

          <Route
            exact
            path="/actors/:id"
            element={<Actors />}
          />

        </Routes>
      </main>
    </div>
  );
}

export default App;
