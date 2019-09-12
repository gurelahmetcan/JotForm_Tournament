import React,{Component} from 'react';
import MyTree from './MyTree'

export default class Data extends Component {
	constructor(props){
		super(props)
		this.state = {
			teamList: [],
			teamPhoto: [],
			matchNumber: 0,
			isFull: false
		}
	}

	async componentDidMount() {
		var url = "https://api.jotform.com/form/" + this.props.State.selectedId + "/submissions?apiKey=" + this.props.State.apiKey;
	    var response = await fetch(url);
	    var data = await response.json();
	    var qid =[];
	    for (var i = 0; i < this.props.State.questions.length; i++) {
	    	qid.push(this.props.State.questions[i].qid);
	    }
		var teamList = [];
		var teamPhoto = [];
	    for (i = 0; i < data.content.length; i++) {
				for (var k = 0; k < qid.length; k++) {
					if (data.content[i].answers[qid[k]].type === "control_textbox") {
						teamList.push(Object.values(data.content[i].answers)[qid[k]-1]);
					}
					else if (data.content[i].answers[qid[k]].type === "control_fileupload") {
						teamPhoto.push(data.content[i].answers[qid[k]].answer[0]);
					}
				
			}
		};
		this.setState({ teamList,matchNumber : data.content.length,isFull: true , teamPhoto});
	  }

  render() {
  	if (this.state.isFull) {
	    return (
	          <MyTree State={this.state}/>
	    );
  	}
    return (
      <div >
      	Loading...
      </div>
    );
  }
}
