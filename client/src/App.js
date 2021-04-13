import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';
import Label from './components/Label/Label';
import Nav from './components/NAV/Nav'; 
import Notes from './components/Notes/Notes'; 
import Card from './components/Card/Card'; 
// import Warn from './components/Warn';
// import { Button } from 'react-bootstrap';
import './App.css'; 
class App extends Component{
  constructor(){
    super();
    this.state={
        title: '',
        note: '',
        page: 'notes',
        Notes: [],
        trash: [],
    }
}
componentDidMount() {
  fetch("http://localhost:5000/")
  .then(response => response.json())
  // .then(abc =>this.setState({Notes:abc.text}));
  .then(abc => {

    abc.forEach(user=> 
      {
    let newNOte={
      title: user.title, notes: user.text, id: user._id
    }
    let currentNote = [ ...this.state.Notes ];
    currentNote.push(newNOte);
    console.log(currentNote);
    // console.log(newNOte);
  
    this.setState({
      Notes
      : currentNote
    })
  }
   
    )
    // console.log(this.state.Notes);
    // console.log(abc);
  return abc});
  };

onTitleChange = (event) => {
    this.setState({title: event.target.value});
}
onNoteChange = (event) => {
    this.setState({note: event.target.value});
}

onAdd = () => {
  // console.log("nfsdlnlkdsn");
  if(this.state.title!=='' && this.state.note!==''){
    const updateNote = {
        id: Math.random(),
        title: this.state.title,
        notes: this.state.note
    } 
    const list = [ ...this.state.Notes ];
    list.push(updateNote);
    this.setState({
        Notes : list,
        title: '',
        note: ''
    });
  }
  // else{
  // <Warn text={"hello world"}/>
  // console.log("fsdfsd");
  // }
}

onCardClick=(key)=>{
  const trashNote= this.state.Notes.filter(note => note.id===key);
  const updatesNote = this.state.Notes.filter(note => note.id !== key);
  const newTrash = [ ...this.state.trash ];
  newTrash.push(trashNote[0]);
  
  this.setState({
    Notes: updatesNote,
    trash: newTrash, 
    title: '',
    note: ''
  });
  // console.log(this.state.Notes);
}
onTrashClick=(key)=>{
  // console.log("trash");
  console.log('KEY',key);
  const newTrash = this.state.trash.filter(note=> {console.log('ID',note.id);
  return note.id!==key} );
  this.setState({trash:newTrash});
}
sample=()=>{
  console.log("fsdgs");
}
notePage=()=>{
  this.setState({page: 'notes'});
  // console.log("You Clicked Note");
}
trashPage=()=>{
  this.setState({page: 'trash'});
  // console.log("You Clicked Trash");
}
  render(){
    return(
      <div>
        <Nav/>
          <Label notePage={this.notePage} trashPage={this.trashPage} className="Side-Nav"/>
        <div className="Main-area">
          { this.state.page==='notes'
            ?
            (
              <div>
                <Notes title={this.state.title} note={this.state.note} onTitleChange={this.onTitleChange} onNoteChange={this.onNoteChange} onAdd={this.onAdd}/>
                <div className="card-main">
                  {this.state.Notes.map(info => <Card title={info.title} onCardClick={()=>this.onCardClick(info.id)} key={info.id} notes={info.notes} />)}
                </div>
              </div>
            )
            :
            (this.state.trash.map(info=><Card title={info.title} key={info.id} notes={info.notes} onCardClick={()=>this.onTrashClick((info.id))}/>))
          }
        </div>
      </div>  
    );
  }
}

export default App;