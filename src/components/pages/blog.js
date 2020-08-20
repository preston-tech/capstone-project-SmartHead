import React, { Component } from "react";

class Blog extends Component {
  constructor() {
    super();

    this.state = {
      blogItems: [],
      isLoading: true,
    };

    this.onScroll = this.onScroll.bind(this);
    window.addEventListener("scroll", this.onScroll, false);
    this.handleNewBlogClick = this.handleNewBlogClick.bind(this);
    this.handleSuccessfulNewBlogSubmission = this.handleSuccessfulNewBlogSubmission.bind(this);
  }

  handleSuccessfulNewBlogSubmission(blog) {
    this.setState({
      blogModalIsOpen: false,
      blogItems: [blog].concat(this.state.blogItems)
    });
  }

  handleNewBlogClick() {
    this.setState({
      blogModalIsOpen: true
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
  }

  getBlogItems() {
    this.setState({
      currentPage: this.state.currentPage + 1
    });
    // axios api
  }

  componentWillMount() {
    this.getBlogItems();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false)
  }

  render() {
    const blogRecords = this.state.blogItems.map(blogItem => {
      return <BlogItem key={blogItem.id} blogItem={blogItem} />;
    });

    return (
      <div className="blog-container">
        <blogModal
        handleSuccessfulNewBlogSubmission={
          this.handleSuccessfulNewBlogSubmission
        }
        handleModalClose={this.handleModalClose}
        modalIsOpen={this.state.blogModalIsOpen} />
      </div>
    )
  }
}