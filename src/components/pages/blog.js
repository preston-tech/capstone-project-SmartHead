import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

class Blog extends Component {
  constructor() {
    super();

    this.state = {
      blogItems: [],
      totalCount: 0,
      currentPage: 0,
      isLoading: true
    }

    this.getBlogItems = this.getBlogItems.bind(this);
    this.handleNewBlogClick = this.handleNewBlogClick.bind(this);
    this.onScroll = this.onScroll.bind(this);
    window.addEventListener("scroll", this.onScroll, false)
    this.handleSuccessfulNewBlogSubmission = this.handleSuccessfulNewBlogSubmission.bind(this);
  }

  handleSuccessfulNewBlogSubmission() {
    this.setState({
      blogModalIsOpen: false,
      // blogItems: [blog].concat(this.state.blogItems)
    })
  }

  onScroll() {
    if (
      this.state.isLoading ||
      this.state.blogItems.length === this.state.totalCount
    ) {
      return;
    }
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      this.getBlogItems;
    }
  };

  getBlogItems() {
    this.setState({
      currentPage: this.state.currentPage + 1
    });
    axios
      .get(`https://localhost:5000?page=${this
      .state.currentPage}`,
      {
        withCredentials: true
      })
      .then(response => {
        console.log("getting", response.data);
        this.setState({
          blogItems: this.state.blogItems.concat(
            response.data.portfolio_blogs
          ),
          totalCount: response.data.meta.total_records,
          isLoading: false
        });
      })
      .catch(error => {
        console.log("getBlogItems error", error);
      });
  }

  handleNewBlogClick() {
    this.setState({
      blogModalIsOpen: true
    })
  }

  componnetWillMount() {
    this.getBlogItems();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false)
  }

  render() {
    const blogRecords = this.state.blogItems.map(blogItem => {
      return <Blog key={blogItem.id} blogItem = {blogItem} />;
    });

    return (
      <div className="blog-container">
        <div className="introduction">
          {this.props.loggedInStatus === "LOGGED_IN" ? (
            <div className="new-blog-link">
              <a onClick={this.handleNewBlogClick}>
                <FontAwesomeIcon icon="plus-circle" />
              </a>
            </div>
          ) : null}
          <div className="content-container">
            {blogRecords}
          </div>

          {this.state.isLoading ? (
            <div className="content-loader">
              <FontAwesomeIcon icon="spinner" spin />
            </div>
          ) : null}
        </div>
      </div>
    )
  }
}

export default Blog;