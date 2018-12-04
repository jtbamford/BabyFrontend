import React, { Component } from 'react';
import axios from 'axios';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
//import Button from './Button';
//import './Button.css';

class App extends Component {

  constructor(){
super();
this.state = {
  name: "",
  info: ""
}
}


  submit = () => {
       axios.post('http://localhost:8083/baby/create/'+document.getElementById('lengthinput').value,
        document.getElementById('nameinput').value
      ).then(Response => {
        console.log(Response.data.name)
         this.setState({name:Response.data.name})
})
}

get = () => {
     axios.get('http://localhost:8083/baby/getall',
      document.getElementById('nameinput').value
     ).then(Response=> {
       this.setState({
  info:Response.data
})
})
}

buttonFunction=(cell,row)=> {
var param;
param=row.Id;
  return <button className="btn" onClick={()=>this.deletename(param)}>Delete</button>;
}

deletename=(param)=> {
axios.delete('http://localhost:8083/baby/delete/'+param).then(Response=> {
  window.location.reload()
})
}

  render() {
    return (
      <div className="App">
        <button className="btn" onClick={this.get}>Get All</button>
<br/> <br/>
 <div className= "createnamediv">
   <input id="nameinput" type="text" placeholder="Name..."/>
   <input id="lengthinput" type="text" placeholder="Length..."/>
  </div>
   <button className="btn" onClick={this.submit}>Create Name</button>

   <div id="table">
<BootstrapTable data={this.state.info} className="table table-striped">
<TableHeaderColumn dataField='Id' width={'20%'} tdStyle={ { whiteSpace: 'normal', width:'20%' } } isKey={true}>Id</TableHeaderColumn>
<TableHeaderColumn dataField='name' width={'60%'} tdStyle={ { whiteSpace: 'normal', width:'60%'} } >Name</TableHeaderColumn>
<TableHeaderColumn dataField='button' width={'20%'} tdStyle={ { whiteSpace: 'normal', width:'20%'} } dataFormat={this.buttonFunction}></TableHeaderColumn>
</BootstrapTable>
</div>

      </div>
    );
  }

}

export default App;
