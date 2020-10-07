class App extends React.Component {
  render() {
    return(
      <div>
        <Test
          name="drew"
          like="banana"
          gender="male"
        />

      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));