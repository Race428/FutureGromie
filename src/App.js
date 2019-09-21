import React, { Component } from 'react';
import axios from 'axios';
import text from './assets/text.gif'

class App extends Component {

  constructor() {
    super()
    this.state = {
      sortedPeople: [],
      planets:[],
      listSeen: '',
      show: false
    }
  }


  sortBy = async (value) => {



    await axios.get(`/people?sortBy=${value}`).then((res) => {
      console.log(res)
      this.setState({
        sortedPeople: res.data,
        listSeen: value,
        planets:[],
      })
    })
    


  }


planetApi = async () => { 
  await axios.get(`/planets`).then((res) => {
    console.log(res)
    this.setState({
      planets: res.data,
      sortedPeople: []
     
    })
  })



}

  show = () => {
    this.setState({
      show: true
    })
  }

  render() {

    const people = this.state.sortedPeople.map((element, index) => {
      return <div key={index} className='person-card'>
        <div className='name'>{element.name}</div>  <div className='height'>{element.height}cm </div> <div className='mass'>{element.mass}kg</div>
      </div>
    })

    const planets = this.state.planets.map((ele, index) => { 
      const names =ele.residents.map((e, i)=> { 
        return <div className='names'>{e}</div>
      })
      return <div className='planet-card'key={index}>
 <div className='name'>{ele.name}</div> <div className='resident-names'>{names} </div>

      </div>
    })

    return (


      <div className="App">


        <div className='button-container'>

        <button onClick={() => this.sortBy("")}>Sort By I dont care, just give me my peeps.</button>

          <button onClick={() => this.sortBy("mass-low")}>Sort By Mass - Low to High</button>
          <button onClick={() => this.sortBy("mass-high")}>Sort By Mass - High to Low</button>

          <button onClick={() => this.sortBy('name-a-z')}>Sort By Name  (A to Z)</button>
          <button onClick={() => this.sortBy('name-z-a')}>Sort By Name (Z to A)</button>

          <button onClick={() => this.sortBy("height-low")}>Sort By Height - Low to High</button>
          <button onClick={() => this.sortBy("height-high")}>Sort By Height - High to Low</button>


        </div>
        <button onClick={this.planetApi}>Click for planets</button>

        <div className='list'>
          {
            this.state.sortedPeople.length > 1 ?
              <><h1>Scroll to the bottom!</h1></> :
              <></>
          }

          {people}
          {planets}
        </div>
        {
          this.state.show ? <div id='hidden'>
            <img  src={text} alt='gif' />
            <p>P.S, my favorite show is Better Call Saul, and the main character is named Jimmy... So, pretty dope to know you.</p>
          </div> :
            <></>
        }
        {
          this.state.sortedPeople.length > 1 ?
            <div onClick={this.show} id='click-me'>Hey Jimmy! Click here!</div> :
            <></>
        }



      </div>
    );
  }
}
export default App;
