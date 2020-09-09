class Hello extends React.Component {
  static defaultProps ={
    num: 1
  }
  render() {
    const {to, from, num} = this.props;
    let bangs = "!".repeat(num)
    
    return (
      <p>
        {to} {from} {bangs}
      </p>
    );
  }
}
