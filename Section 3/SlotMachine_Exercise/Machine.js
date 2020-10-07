class Machine extends React.Component {
  render(){
    const {s1, s2, s3} = this.props;
    const winnings = (s1 === s2) && (s2 === s3);
    const color = { fontSize: "50px", backgroundColor: 'purple' };
    
    return (
      <div className="Machine">
        <p style={color}>
          {s1} {s2} {s3}
        </p>
        <p className={winnings ? 'win' : 'lose'}>
          {winnings ? "You win!" : "You lose!"}</p>
      </div>
    );
  }
}