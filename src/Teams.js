import React from 'react';
import './App.css';

var teams = [];
function ShowTeams(props){

for (var i = props.State.teamList.length-1; i>=0; i--) {
		//teams.push(props.State.teamList[i].answer)
		//captains.push(props.State.captainList[i])
		if (props.State.teamPhoto[i] !==undefined) {
			teams.push( <div className="card color">
						    <div className="card-header" id={i}>
						      <h5 className="mb-0 ">
						        <button className="btn btn-link textColor" data-toggle="collapse" data-target={"#c" + i} aria-expanded="true" aria-controls={"c" + i}>
						          {props.State.teamList[i].answer}
						        </button>
						      </h5>
						    </div>

						    <div id={"c" + i} className="collapse" aria-labelledby={i} data-parent="#accordion">
						      <div className="card-body ">
						      	<img src={props.State.teamPhoto[i]} alt="Team Photo" ></img>
						      </div>
						    </div>
						  </div>
							)		
			}
		else{
			teams.push( <div className="card color">
						    <div className="card-header" id={i}>
						      <h5 className="mb-0 ">
						        <button className="btn btn-link textColor" data-toggle="collapse" data-target={"#c" + i} aria-expanded="true" aria-controls={"c" + i}>
						          {props.State.teamList[i].answer}
						        </button>
						      </h5>
						    </div>

						    <div id={"c" + i} className="collapse" aria-labelledby={i} data-parent="#accordion">
						      <div className="card-body ">
						      	<img src='https://www.precisionpass.co.uk/wp-content/uploads/2018/03/default-team-logo.png' alt="Team Photo" ></img>
						      </div>
						    </div>
						  </div>
							)	
		}

	}

return (
      <div>
      	<div id="accordion">
      			<h1>Team List</h1>
  				{teams}
			</div>
      </div>
    );
  }

export default ShowTeams;