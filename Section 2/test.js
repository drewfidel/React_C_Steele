class Test extends React.Component {
  render() {
    const { name, like, gender } = this.props;
    return(
      <div>
        <p>My name is {name}</p>
        <p>I like {like}</p>
        <p>I am a {gender}</p>
      </div>

    );
  }
} 

