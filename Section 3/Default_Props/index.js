class App extends React.Component {
  render() {
    return (
      <div>
        <Hello 
          to="hi" 
          from="Paul"
          num={3}
        />
        <Hello 
          to="hi" 
          from="Paul"
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
