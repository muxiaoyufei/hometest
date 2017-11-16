"use strict"

import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Checkbox,Modal} from 'antd';
import $ from "jquery"
import { Request } from '../utils/fetch.js';

class Performance extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           Data:[],
           homeData:{},
           listId : "",
           box : [],
           COM:""
        }
        
    }
    
  // getData(url, opts) {
  //   let Binding="5A9B1C61165A648BBD225E548665C5D9"; 
  //   fetchData(url, opts, function (res) {
  //       let data = eval(res.layoutObject)
  //       console.log(data)
  //       this.setState({
  //           Data: data,           
  //       });
  //       this.getHomeData("http://117.122.226.252:9997/api/pageCreator/pageInfo/get",
  //       {"binding":Binding,"id":data[0].id,"parttern":"design"})
  //   }.bind(this))
  // }
  //   getHomeData(url, opts) {
  //     fetchData(url, opts, function (res) {
  //       let data = eval(res)
  //       this.setState({
  //         homeData:data,
  //       })
  //     }.bind(this))
  //   }
    componentWillMount(){
      // let Binding="5A9B1C61165A648BBD225E548665C5D9";
      // this.getData('http://117.122.226.252:9997/api/pageCreator/pageInfo/list',{"binding":Binding})
      this.changeHtml()
    }
    changeHtml(){
      this.setState({
        COM:<HotDeal />
      })
    }
    render() {
        // console.log("Data>>>",this.state.Data,"-------",this.state.homeData)
        console.log("com>>>",this.state.COM)
        const {homeData}=this.state;
        // console.log(homeData.layout)
        return (
            <div className="performance">
              <table></table>
            </div>
        )
    }

    componentDidMount(){
      Request("http://117.122.226.252:9997/api/pageCreator/pageInfo/list",{
        "binding":"68D24F3AEF9743DFC24089A1701988A0"
      }).then((data)=>{
        console.log(data)
        console.log(data.layoutObject[0].id)
        this.setState({
          listId : data.layoutObject[0].id          
        })
        Request("http://117.122.226.252:9997/api/pageCreator/pageInfo/get",{
          "binding":"68D24F3AEF9743DFC24089A1701988A0",
          "id":this.state.listId,
          "parttern":"design"
        }).then((data)=>{
          const box = document.getElementsByTagName('table')[0];
          box.innerHTML = data.layout;
          const td = box.getElementsByTagName('comp');
          for(var i=0; i<td.length; i++){
            switch(td[i].getAttribute('name')){
              case "hotDeal":
              console.log("123>>",td[i])
              let domhtml=td[i].getAttribute('id')
              console.log("id",domhtml)
               ReactDOM.render(
                (<HotDeal />)
                , document.getElementById(domhtml));
              break;
              case "immediate":
              break;
            }
          }
        })
      })
    }
}

export default Performance

class HotDeal extends Component {
  render() {
    return (
      <div className="hotdeal" name="listGrid">
        <h3>热门交易</h3>
        <ul>
          <li>
            <a href="javascript:void(0)">似的发射点发生</a>
          </li>
          <li>
            <a href="javascript:void(0)">似的发射点发生</a>
          </li>
          <li>
            <a href="javascript:void(0)">似的发射点发生</a>
          </li>
        </ul>
      </div>
    )
  }
}