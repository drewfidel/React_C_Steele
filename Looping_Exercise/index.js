class App extends React.Component{
  render(){
    return(
      <div>
        <Friend 
          name="Elton"
          hobbies={['Piano', 'Singing', 'Dancing']}
        />
        <Friend 
          name="Friday"
          hobbies={['Gambling', 'Singing']}
        />
      </div>

    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));