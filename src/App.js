import React from "react";
import { Grid } from "@mui/material";
import youtube from "./api/youtube";

import { SearchBar, VideoDetail, VideoList } from "./components";

class App extends React.Component {
  handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyDp8lhgyPhqToMX7KiXAO03j2YyqBH91-Y",
        q: searchTerm,
      },
    });
  };
  render() {
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail />
            </Grid>
            <Grid item xs={4}>
              <VideoList />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
