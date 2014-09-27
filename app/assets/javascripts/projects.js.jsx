/** @jsx React.DOM */
var projectData = [
            {title: "Boston", description: "Sexy City", filter: ["Fun", "Cool"], color: "#89acf0", 
            pictures: {default: "https://pbs.twimg.com/profile_images/858438474/boston.jpg", 
            transitions: ["http://upload.wikimedia.org/wikipedia/commons/5/52/New_York_Midtown_Skyline_at_night_-_Jan_2006_edit1.jpg",
                          "https://media2.wnyc.org/i/620/372/c/80/photologue/photos/cities.jpg",
                          "http://img.timeinc.net/time/photoessays/2010/smart_cities/smart_cities_01.jpg",
                          "http://www.dailygalaxy.com/.a/6a00d8341bf7f753ef0115712a0da1970b-pi"
                          ]}},
            {title: "New York", description: "Dreary City", filter: ["Sexy", "Kill Me"], color: "#89acf0",
            pictures: {default: "https://pbs.twimg.com/profile_images/858438474/boston.jpg",
            transitions: ["http://upload.wikimedia.org/wikipedia/commons/5/52/New_York_Midtown_Skyline_at_night_-_Jan_2006_edit1.jpg",
                          "https://media2.wnyc.org/i/620/372/c/80/photologue/photos/cities.jpg",
                          "http://img.timeinc.net/time/photoessays/2010/smart_cities/smart_cities_01.jpg",
                          "http://www.dailygalaxy.com/.a/6a00d8341bf7f753ef0115712a0da1970b-pi"
                          ]}},
            {title: "Portland", description: "Hipppy City", filter: ["Hipster", "Fun"], color: "#89acf0",
            pictures: {default: "https://pbs.twimg.com/profile_images/858438474/boston.jpg",
            transitions: ["http://upload.wikimedia.org/wikipedia/commons/5/52/New_York_Midtown_Skyline_at_night_-_Jan_2006_edit1.jpg",
                          "https://media2.wnyc.org/i/620/372/c/80/photologue/photos/cities.jpg",
                          "http://img.timeinc.net/time/photoessays/2010/smart_cities/smart_cities_01.jpg",
                          "http://www.dailygalaxy.com/.a/6a00d8341bf7f753ef0115712a0da1970b-pi"
                          ]}},
            {title: "District of Columbia", description: "Hot City", filter: ["Kill Me"], color: "#89acf0",
            pictures: {default: "https://pbs.twimg.com/profile_images/858438474/boston.jpg",
            transitions: ["http://upload.wikimedia.org/wikipedia/commons/5/52/New_York_Midtown_Skyline_at_night_-_Jan_2006_edit1.jpg",
                          "https://media2.wnyc.org/i/620/372/c/80/photologue/photos/cities.jpg",
                          "http://img.timeinc.net/time/photoessays/2010/smart_cities/smart_cities_01.jpg",
                          "http://www.dailygalaxy.com/.a/6a00d8341bf7f753ef0115712a0da1970b-pi"
                          ]}},
                          {title: "Boston", description: "Sexy City", filter: ["Fun", "Cool"], color: "#89acf0", 
            pictures: {default: "https://pbs.twimg.com/profile_images/858438474/boston.jpg", 
            transitions: ["http://upload.wikimedia.org/wikipedia/commons/5/52/New_York_Midtown_Skyline_at_night_-_Jan_2006_edit1.jpg",
                          "https://media2.wnyc.org/i/620/372/c/80/photologue/photos/cities.jpg",
                          "http://img.timeinc.net/time/photoessays/2010/smart_cities/smart_cities_01.jpg",
                          "http://www.dailygalaxy.com/.a/6a00d8341bf7f753ef0115712a0da1970b-pi"
                          ]}},
            {title: "New York", description: "Dreary City", filter: ["Sexy", "Kill Me"], color: "#89acf0",
            pictures: {default: "https://pbs.twimg.com/profile_images/858438474/boston.jpg",
            transitions: ["http://upload.wikimedia.org/wikipedia/commons/5/52/New_York_Midtown_Skyline_at_night_-_Jan_2006_edit1.jpg",
                          "https://media2.wnyc.org/i/620/372/c/80/photologue/photos/cities.jpg",
                          "http://img.timeinc.net/time/photoessays/2010/smart_cities/smart_cities_01.jpg",
                          "http://www.dailygalaxy.com/.a/6a00d8341bf7f753ef0115712a0da1970b-pi"
                          ]}},
            {title: "Portland", description: "Hipppy City", filter: ["Hipster", "Fun"], color: "#89acf0",
            pictures: {default: "https://pbs.twimg.com/profile_images/858438474/boston.jpg",
            transitions: ["http://upload.wikimedia.org/wikipedia/commons/5/52/New_York_Midtown_Skyline_at_night_-_Jan_2006_edit1.jpg",
                          "https://media2.wnyc.org/i/620/372/c/80/photologue/photos/cities.jpg",
                          "http://img.timeinc.net/time/photoessays/2010/smart_cities/smart_cities_01.jpg",
                          "http://www.dailygalaxy.com/.a/6a00d8341bf7f753ef0115712a0da1970b-pi"
                          ]}},
            {title: "District of Columbia", description: "Hot City", filter: ["Kill Me"], color: "#89acf0",
            pictures: {default: "https://pbs.twimg.com/profile_images/858438474/boston.jpg",
            transitions: ["http://upload.wikimedia.org/wikipedia/commons/5/52/New_York_Midtown_Skyline_at_night_-_Jan_2006_edit1.jpg",
                          "https://media2.wnyc.org/i/620/372/c/80/photologue/photos/cities.jpg",
                          "http://img.timeinc.net/time/photoessays/2010/smart_cities/smart_cities_01.jpg",
                          "http://www.dailygalaxy.com/.a/6a00d8341bf7f753ef0115712a0da1970b-pi"
                          ]}},
            {title: "Chicago", description: "Fun City", filter: ["Fun", "Cool"], color: "#89acf0",
            pictures: {default: "https://pbs.twimg.com/profile_images/858438474/boston.jpg",
            transitions: ["http://upload.wikimedia.org/wikipedia/commons/5/52/New_York_Midtown_Skyline_at_night_-_Jan_2006_edit1.jpg",
                          "https://media2.wnyc.org/i/620/372/c/80/photologue/photos/cities.jpg",
                          "http://img.timeinc.net/time/photoessays/2010/smart_cities/smart_cities_01.jpg",
                          "http://www.dailygalaxy.com/.a/6a00d8341bf7f753ef0115712a0da1970b-pi"
                          ]}},
            {title: "San Francisco", description: "Techy City", filter: ["Nerdy"], color: "#89acf0",
            pictures: {default: "https://pbs.twimg.com/profile_images/858438474/boston.jpg",
            transitions: ["http://upload.wikimedia.org/wikipedia/commons/5/52/New_York_Midtown_Skyline_at_night_-_Jan_2006_edit1.jpg",
                          "https://media2.wnyc.org/i/620/372/c/80/photologue/photos/cities.jpg",
                          "http://img.timeinc.net/time/photoessays/2010/smart_cities/smart_cities_01.jpg",
                          "http://www.dailygalaxy.com/.a/6a00d8341bf7f753ef0115712a0da1970b-pi"
                          ]}}
            ];

var filterData = [
                  {filter: "Sexy"}, 
                  {filter: "Fun"},
                  {filter: "Nerdy"}, 
                  {filter: "Cool"}, 
                  {filter: "Hipster"}, 
                  {filter: "Kill Me"}
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
        <h3>Life</h3>
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
      backgroundImage: 'url(' + 'https://pbs.twimg.com/profile_images/858438474/boston.jpg' + ')',
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