import React,{Component} from 'react';
import {Tree} from 'react-d3-tree';
import './App.css';
import Confetti from 'react-confetti'
import ShowTeams from './Teams'

var arrayToTree = require('array-to-tree');
var index = 4 , count = 0,smallindex = 2,defaultindex = 4,defaultsmallindex = 2,specialid = 8, defaultZoom = 1;
var treePosition ={x:700 ,y:115};
var textLayout = {textAnchor: "start", x: -35, y: -25, transform: undefined};
var colors = {
  stroke: 'white',
};
var fillCircle ={
  fill: '#fa8900',
  strokeWidth: 2
}
var style = {
              nodes: {
                node: {
                  circle: fillCircle,
                  name: colors,
                  },
                leafNode: {
                  circle: fillCircle,
                  name: colors,
                  },
              },}

export default class MyTree extends Component {
  constructor(props){
    super(props)
    this.state = {
      Data2 : [],
      isFull: false,
      isConfettiBoom: false
    }
  }

    componentDidMount(){
      var Data =[];
      if (this.props.State.teamList.length<8) {
        Data = [{name:'Champion',id:1,parent_id:undefined,specialid:1},
                {name:'#1 Finalist',id:2,parent_id:1,specialid:2},
                {name:'#2 Finalist',id:3,parent_id:1,specialid:3}];
        for (var i = 0; i < this.props.State.teamList.length; i++) {
          if (smallindex > 3) {
            Data.push({name : undefined, id:count, parent_id:defaultsmallindex,specialid:specialid})
            Data[smallindex-1].parent_id = count;
            specialid++;
            Data.push({name : this.props.State.teamList[i].answer,id:undefined,parent_id:count,specialid:specialid});
            specialid++;
            smallindex++;
            if (count%2) {
              defaultsmallindex++;
            }
          }else {Data.push({name : this.props.State.teamList[i].answer,id:undefined,parent_id:smallindex,specialid:specialid});specialid++ }

          if (count%2 && smallindex <=3) {
            smallindex++;
          }
          count++;
        };
        this.setState({Data2:Data,isFull:true});         
      }

      else{
        Data = [{name:'Champion',id:1,parent_id:undefined,specialid:1},
                    {name:'#1 Finalist',id:2,parent_id:1,specialid:2},
                    {name:'#2 Finalist',id:3,parent_id:1,specialid:3},
                    {name:'#1 Semi Finalist',id:4,parent_id:2,specialid:4},
                    {name:'#2 Semi Finalist',id:5,parent_id:2,specialid:5},
                    {name:'#3 Semi Finalist',id:6,parent_id:3,specialid:6},
                    {name:'#4 Semi Finalist',id:7,parent_id:3,specialid:7}];
        for (i = 0; i < this.props.State.teamList.length; i++) {
          if (index > 7) {
            Data.push({name : undefined, id:count, parent_id:defaultindex,specialid:specialid})
            Data[index-1].parent_id = count;
            specialid++;
            Data.push({name : this.props.State.teamList[i].answer,id:undefined,parent_id:count,specialid:specialid});
            specialid++;
            index++;
            if (count%2) {
              defaultindex++;
            }
          }else {
            Data.push({name : this.props.State.teamList[i].answer,id:undefined,parent_id:index,specialid:specialid});
            specialid++;
          }

          if (count%2 && index <=7) {
            index++;
          }
          count++;
        };
         this.setState({Data2:Data,isFull:true});
         if (Data.length>15) {
          defaultZoom=0.6;
         }
         else defaultZoom=0.8;
      }
      console.log(Data);
    }

    onUpdateItem = event => {
      if (event.name !== undefined) {
        this.setState(state => {
          const list = state.Data2.map((item) => {
            if (item.specialid === event.parent.specialid) {
              item.name = event.name;
              console.log(event);
              return item;
            } else {
              return item;
            }
          });
          return {
            list,
          };
        });      
      }
      };

    scrollTop = event => {
        this.setState({isConfettiBoom: true})  
        document.documentElement.scrollTop = 0;
      }

    render() {
      if (this.state.isFull) {
          return (
            <div>
              <div id="treeWrapper" style={{width: '90em', height: '45em'}}>
                <Tree 
                 data={arrayToTree(this.state.Data2)}
                 pathFunc={'elbow'}
                 orientation={'vertical'}
                 collapsible={false} 
                 translate={treePosition} 
                 zoom={defaultZoom} 
                 zoomable={false} 
                 textLayout={textLayout} 
                 styles= {style}
                 onClick= {(event) =>{ event.parent === undefined ? this.scrollTop(event) : this.onUpdateItem(event)}}/>
                 {this.state.isConfettiBoom ? <Confetti /> : null}
              </div>
              <ShowTeams State={this.props.State}/>
            </div>
          );
        }
        return (
          <div >
            <h1>Loading...</h1>
          </div>
        );
        }
}
