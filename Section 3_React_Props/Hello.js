class Hello extends React.Component {
  render() {
    return (
      <p>
        {" "}
        {this.props.to} {this.props.from}{" "}
      </p>
    );
  }
}
