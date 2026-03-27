import React, { Component } from "react";

// Ridewatch renders a single watch button with its name and year.
// Clicking the button toggles the watch's owned status in localStorage
// and updates the button's CSS class to reflect the change visually.
export class Ridewatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // "false" = not owned; "true-{series}" = owned (used as CSS class name)
      Checked: "false",
    };

    this.onClick = this.onClick.bind(this);
  }

  // Runs before the component mounts. Checks localStorage to set the
  // initial owned/not-owned visual state of the button.
  // The Checked state value is only used to drive the button's CSS class.
  componentWillMount() {
    var tempIdentity = this.props.id;
    if (this.props.allChecked === true) {
      // If a parent "check all" was triggered, mark this watch as owned
      localStorage.setItem(tempIdentity, tempIdentity);
      this.setState({
        Checked: "true-" + this.props.series,
      });
    } else {
      // Otherwise, restore owned state from localStorage on page load
      if (localStorage.getItem(tempIdentity)) {
        this.setState({
          Checked: "true-" + this.props.series,
        });
      } else {
        this.setState({
          Checked: "false",
        });
      }
    }
  }

  // Responds when the allChecked prop changes (i.e. the "Check All" button is clicked).
  // Updates localStorage and the button's visual state to match.
  componentDidUpdate(prevProps) {
    if (prevProps.allChecked !== this.props.allChecked) {
      if (this.props.allChecked === true) {
        localStorage.setItem(this.props.id, this.props.id);
        this.setState({ Checked: "true-" + this.props.series });
      } else {
        localStorage.removeItem(this.props.id);
        this.setState({ Checked: "false" });
      }
    }
  }

  // Toggles owned status when the button is clicked.
  // If the watch is already owned, removes it from localStorage and resets the CSS class.
  // If not owned, saves it to localStorage and applies the series-specific CSS class.
  // Calls totalOwnedUpdate() to refresh the owned counter in the sidebar.
  onClick() {
    var tempIdentity = this.props.id;

    if (localStorage.getItem(tempIdentity)) {
      this.setState({
        Checked: "false",
      });
      localStorage.removeItem(tempIdentity);
    } else {
      localStorage.setItem(tempIdentity, tempIdentity);
      this.setState({
        Checked: "true-" + this.props.series,
      });
    }

    this.props.totalOwnedUpdate();
  }

  // Renders the watch button, its image, name (or katakana), and release year.
  // The button's className is set to this.state.Checked, which controls its background color.
  render() {
    return (
      <div id="ridewatch">
        <button className={this.state.Checked} onClick={this.onClick}>
          <img src={this.props.imgsrc} alt={this.props.alt} />
        </button>
        <p>
          {this.props.identity}
          <br /> {this.props.year}
        </p>
      </div>
    );
  }
}

export default Ridewatch;
