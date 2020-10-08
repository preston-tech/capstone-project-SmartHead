import React, { Component } from "react";
import axios from "axios";

import BlogForm from "../blog/blog-form";
import BlogItem from "../blog/blog-item";

export default class BlogManager extends Component {
  constructor() {
    super();

    this.state = {
      blogItems: [],
      blogToEdit: {}
    };

    this.handleNewFormSubmission = this.handleNewFormSubmission.bind(this);
    this.handleEditFormSubmission = this.handleEditFormSubmission.bind(this);
    this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.clearBlogToEdit = this.clearBlogToEdit.bind(this);

  }

  clearBlogToEdit() {
    this.setState({
      blogToEdit: {}
    });
  }

  handleEditClick(blogItems) {
    this.setState({
      blogToEdit: BlogItem
    });
  }

  handleDeleteClick(blogItem) {
    axios.delete(
      `https://api.devcamp.space/portfolio/portfolio_blogs/${blogItem.id}`,
      { withCredentials: true }
    )
    .then(res => {
      this.setState({
        blogItems: this.state.blogItems.filter(item => {
          return item.id !== blogItem.id;
        })
      });

      return res.data;
    })
    .catch(err => {
      console.log("handleDeleteClick error", error);
    });
  }

  handleEditFormSubmission() {
    this.getBlogItems();
  }

  handleNewFormSubmission(blogItem) {
    this.setState({
      blogItems: [portfolioItem].concat(this.state.blogItems)
    });
  }

  handleFormSubmissionError(error) {
    console.log("handleFormSubmissionError error", error);
  }

  getBlogItems() {
    axios
      .get(
        "https://prestonphillips.devcamp.space/portfolio/portfolio_blogs?order_by=created_at&direction=desc",
        { withCredentials: true }
      )
      .then(response => {
        this.setState({
          blogItems: [...response.data.blog_items]
        });
      })
      .catch(error => {
        console.log("error in getBlogItems", error);
      });
  }

  componentDidMount() {
    this.getBlogItems();
  }

  render() {
    return (
      <div className="portfolio-manager-wrapper">
        <div className="left-column">
          <BlogForm
            handleNewFormSubmission={this.handleNewFormSubmission}
            handleEditFormSubmission={this.handleEditFormSubmission}
            handleFormSubmissionError={this.handleFormSubmissionError}
            clearBlogToEdit={this.clearBlogToEdit}
            blogToEdit={this.state.blogToEdit}
          />
        </div>
      </div>
      )
    }
}