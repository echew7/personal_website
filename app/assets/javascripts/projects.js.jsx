/** @jsx React.DOM */
var projectData = [
            {title: "Flick", description: "", filter: ["Mobile", "Backend"], color: "#89acf0",
            pictures: {default: "http://web.stanford.edu/~xechew/assets/ProjectHandles/Flick/default.png", 
            transitions: [
            ]}},
            {title: "Openproof Project", description: "", filter: ["Education"], color: "#efb53e",
            pictures: {default: "http://web.stanford.edu/~xechew/assets/ProjectHandles/OpenProof/default.png", 
            transitions: [
              "http://web.stanford.edu/~xechew/assets/ProjectHandles/OpenProof/transition1.png",
              "http://web.stanford.edu/~xechew/assets/ProjectHandles/OpenProof/transition2.png",
              "http://web.stanford.edu/~xechew/assets/ProjectHandles/OpenProof/transition3.png"
            ]}},
            {title: "Evernote", description: "", filter: ["Web", "Frontend"], color: "#5ba525", 
            pictures: {default: "http://web.stanford.edu/~xechew/assets/ProjectHandles/Evernote/default.png", 
            transitions: [
              "http://web.stanford.edu/~xechew/assets/ProjectHandles/Evernote/transition1.png",
              "http://web.stanford.edu/~xechew/assets/ProjectHandles/Evernote/transition2.png",
              "http://web.stanford.edu/~xechew/assets/ProjectHandles/Evernote/transition3.png"
            ]}},
            {title: "Mobile Learning", description: "", filter: ["Education"], color: "#89acf0",
            pictures: {default: "http://web.stanford.edu/~xechew/assets/ProjectHandles/MobileLearning/default.png", 
            transitions: [
            ]}},
            {title: "HomeBase", description: "", filter: ["Mobile", "Frontend", "Backend"], color: "#AD0000",
            pictures: {default: "http://web.stanford.edu/~xechew/assets/ProjectHandles/HomeBase/default.png", 
            transitions: [
              "http://web.stanford.edu/~xechew/assets/ProjectHandles/HomeBase/transition1.png",
              "http://web.stanford.edu/~xechew/assets/ProjectHandles/HomeBase/transition2.png",
              "http://web.stanford.edu/~xechew/assets/ProjectHandles/HomeBase/transition3.png"
            ]}},
            {title: "Dandelion School", description: "", filter: ["Education"], color: "#f3ec49",
            pictures: {default: "http://web.stanford.edu/~xechew/assets/ProjectHandles/Dandelion/default.png", 
            transitions: [
            ]}},
            {title: "ChewChew", description: "", filter: ["Mobile", "Frontend"], color: "#49baf3",
            pictures: {default: "http://web.stanford.edu/~xechew/assets/ProjectHandles/ChewChew/default.png", 
            transitions: [
              "http://web.stanford.edu/~xechew/assets/ProjectHandles/ChewChew/transition1.png",
              "http://web.stanford.edu/~xechew/assets/ProjectHandles/ChewChew/transition2.png",
              "http://web.stanford.edu/~xechew/assets/ProjectHandles/ChewChew/transition3.png"
            ]}},
            {title: "Tire Generator", description: "", filter: ["Extras"], color: "#89acf0", 
            pictures: {default: "http://web.stanford.edu/~xechew/assets/ProjectHandles/Tire/default.png", 
            transitions: [
            ]}}
            ];

var filterData = [
                  {filter: "Education"},
                  {filter: "Web"}, 
                  {filter: "Mobile"}, 
                  {filter: "Frontend"},
                  {filter: "Backend"}, 
                  {filter: "Extras"}, 
                 ];

var ProjectDisplay = React.createClass({
  getInitialState: function() {
    return {filter: null, summary: {title: null, description: null}, projects: []}; 
  },
  componentDidMount: function() {
    this.setState({filter: this.state.filter, summary: this.state.summary, projects: this.props.projects});
  },
  displaySummary: function(summary) {
    this.setState({filter: this.state.filter, summary: summary, projects: this.props.projects});
    this.refs.summary.getDOMNode().style.opacity = 1;
  },
  hideSummary: function() {
    this.refs.summary.getDOMNode().style.opacity = 0;
  },
  changeFilter: function(filter) {
    this.setState({filter: filter, summary: this.state.summary, projects: this.state.projects});
    if (filter == "Web") {
     $("#logo").attr('class', 'shake'); 
    } else {
     $("#logo").attr('class', ''); 
    }
  },
  render: function() {
    return (
      <div className="project-display">
        <ProjectSidebar filters={filterData} onFilterChange={this.changeFilter} />
        <ProjectGrid filter={this.state.filter} projects={this.state.projects} 
                onProjectMouseOver={this.displaySummary}
                onProjectMouseOut={this.hideSummary} />
        <ProjectSummary ref="summary" summary={this.state.summary} /> 
      </div>
    );
  } 
});

var ProjectSidebar = React.createClass({
  getInitialState: function() {
    return {filters: []} 
  },
  componentDidMount: function() {
    this.setState({filters: this.props.filters});
  }, 
  render: function() {
    var numFilters = this.state.filters.length;
    var projectFilters = [];
    for (i = 0; i < numFilters; i++) {
      projectFilters.push(
        <ProjectFilter onFilterChange={this.props.onFilterChange}>{this.state.filters[i].filter}</ProjectFilter>
      );
    }
    return (
      <div className="project-sidebar">
        <h3>Work</h3>
        <div></div>
        <ul> 
          {projectFilters}
        </ul>
      </div>
    );
  }
})

var ProjectFilter = React.createClass({
  handleMouseOver: function(e) {
    this.props.onFilterChange(this.props.children);
  },
  handleMouseOut: function(e) {
    this.props.onFilterChange(null);
  },
  render: function() {
    return ( 
      <li className="project-filter" ref="filter"
        onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
        {this.props.children}
      </li>
    );
  }
})

var ProjectSummary = React.createClass({
  render: function() {
    return (
      <div className="project-summary">
        <h1>
          {this.props.summary.title}
        </h1>
        <p>
          {this.props.summary.description}
        </p>
      </div>
    );
  } 
});

var ProjectGrid = React.createClass({
  render: function() {
    var numHandles= this.props.projects.length;
    var projectHandles = [];
    for (i = 0; i < numHandles; i++) {
      projectHandles.push(
        <ProjectHandle filter={this.props.filter} project={this.props.projects[i]} 
                onProjectMouseOver={this.props.onProjectMouseOver} 
                onProjectMouseOut={this.props.onProjectMouseOut} />
      );
    }
    return (
      <div className="project-grid">
        {projectHandles}
      </div>
    );
  }
});


var ProjectHandle = React.createClass({
  containsFilter: function(filterArray, filter) {
    return $.inArray(filter, filterArray) > -1; 
  },
  handleMouseOver: function(e) {
    this.props.onProjectMouseOver({title: this.props.project.title, description: this.props.project.description});
    this.refs.handle.getDOMNode().style.backgroundColor = this.props.project.color;
  },
  handleMouseOut: function(e) {
    this.props.onProjectMouseOut();
    this.refs.handle.getDOMNode().style.backgroundColor = "white";
  },
  componentDidUpdate: function(prevProps, prevState) {
    if (this.containsFilter(this.props.project.filter, this.props.filter)) {
    } else { 
    }
  },
  render: function() {
    var highlightStyle = {
      backgroundColor: this.containsFilter(this.props.project.filter, this.props.filter) 
                       ? this.props.project.color : "white"
    }
    var classes = React.addons.classSet({
      'project-handle': true,
      'shake': this.containsFilter(this.props.project.filter, this.props.filter)
    });
    return (
      <div className={classes} ref="handle" style={highlightStyle}
              onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}> 
        <PictureTransitioner pictures={this.props.project.pictures}/>
      </div>
    );
  }
});

var transitionCounter = 0;
var swapper;
var PictureTransitioner = React.createClass({
  swapImage: function() {
    if (this.props.pictures.transitions.length == 0) return;
    if (transitionCounter >= this.props.pictures.transitions.length) transitionCounter = 0;
    var imageIndex = transitionCounter;//keep i under the array length
    this.refs.picture.getDOMNode().style.backgroundImage = this.constructUrl(this.props.pictures.transitions[imageIndex]); 
    transitionCounter++; 
  },
  constructUrl: function(url) {
    return "url('" + url + "')";   
  },
  transitionPictures: function(e) {
    this.swapImage();
    swapper = setInterval(this.swapImage, 2000);
  },
  displayDefault: function(e) {
    swapper = clearInterval(swapper);
    this.refs.picture.getDOMNode().style.backgroundImage = this.constructUrl(this.props.pictures.default); 
  },
  render: function() {
    var initialImage = {
      backgroundImage: this.constructUrl(this.props.pictures.default)
    };

    return (
      <div className="picture-transitioner" style={initialImage} ref="picture"
              onMouseOver={this.transitionPictures} onMouseOut={this.displayDefault}>
      </div>
    );
  }
});

$(function() {
  React.renderComponent(
    <ProjectDisplay projects={projectData} />,
    document.getElementById('projects')
    );
});