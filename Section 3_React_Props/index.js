class App extends React.Component {
  render() {
    return (
      <div>
        <Hello to="hi" from="Paul" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
