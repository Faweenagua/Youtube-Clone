import React from "react";

import { Paper, TextField } from "@mui/material";

class SearchBar extends React.Component {
  state = {
    searchTerm: "",
  };

  handleChange = (e) => {
    this.state({ searchTerm: e.target.value });
  };

  handleChange = (e) => {
    e.preventDefault();
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;

    onFormSubmit(searchTerm);
  };

  render() {
    return (
      <Paper elevation={6} style={{ padding: "25px" }}>
        <form onSubmit={this.handleSubmit}>
          <TextField
            fullWidth
            label="Search...."
            onChange={this.handleChange}
          />
        </form>
      </Paper>
    );
  }
}

export default SearchBar;
