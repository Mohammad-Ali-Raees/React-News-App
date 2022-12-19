import React, { Component } from 'react'

export default class Slects extends Component {

    constructor() {
        super()
        this.state = {
            changeVal: "",
            CountryName:[],
            Articles: []
        }
        // this.handleEvent = this.handleEvent.bind(this);
        this.handleEvent = (e) => {
            this.setState({ changeVal: e.target.value })
          
           // this.setState({countryName:e.target.innerText});
        
         
       
        let a = [];
        a.push(e.target.innerText)
        console.log(a.toString().replace(" "))
       
        let b = ""
        b = a[0];
        console.log()

        }
        
      
    }

    optionsValue = [
        { value: 'us', countryName: "USA" },
        { value: 'ar', countryName: "Argentina" },
        { value: 'at', countryName: "Austria" },
        { value: 'au', countryName: "Austrailia" },
        { value: 'be', countryName: "Beligium" },
        { value: 'bg', countryName: "Bangladesh" },
    ]


    // async componentDidMount() {
    //     let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.state.changeVal}&category=business&apiKey=9af7d5dbc9fa4f9483a0643780892ed3`);

    //     let response = await data.json();
    //     this.setState({ Articles: response.articles })
    //     console.log(response)
    // }

    // async componentDidUpdate() {


    // }
    // async componentDidUpdate(prevProps, prevState) {
    //     if (prevState.changeVal !== this.state.changeVal) {
           
    //         // let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${!this.state.changeVal  ? this.state.changeVal : this.state.changeVal}&category=business&apiKey=9af7d5dbc9fa4f9483a0643780892ed3`);

    //         // let response = await data.json();
    //         // this.setState({ Articles: response.articles })
    //         // console.log(response)

    //         console.log(this.state.CountryName )
    //     }
    // }



    render() {

        return (
            <div>

                <select onChange={this.handleEvent.bind(this)} >
                    
                   {
                    this.optionsValue.map((elem)=>{
                        return(
                            <option key={elem.value} value={elem.value}>{elem.countryName}</option>
                        )
                    })
                   }
                </select>
                <p >{this.state.changeVal}</p>
                <p>
                    {
                    this.optionsValue.find(elem => { if(elem.countryName == this.state.changeVal){
                        console.log(elem);
                    }})
                    }
                </p>

                <div>
                    {
                        this.state.Articles.map((elem) => {
                            return (
                                < div key={elem.title} style={{border:"1px solid grey",width:"300px",margin:"20px"}}>
                                    <p style={{border:"2px solid red"}}>{!elem.author ? "Elliot Smith" : elem.author}</p>
                                    <p>{elem.content}</p>
                                </div>
                            )
                        })
                        
                    }
                </div>

            </div>

        )
    }
}
