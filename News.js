import React, { Component } from 'react'
import Loader from './Loader';
import NewsItem from './NewsItem'
import PropTypes from 'prop-types';


export default class News extends Component {




    constructor() {
        super();
        this.state = {
            countryCode: "",
            my_articles: [],
            spin: false,
            page: 1,

        }

        //   this.ChangeEventSelect = this.ChangeEventSelect.bind(this);
        // this.ChangeHandle = this.ChangeHandle.bind(this);
        this.ChangeHandle = async (e) => {
            this.setState({ countryCode: e.target.value })

        }



    }
    optionsValue = [
        { value: 'us', countryName: "USA" },
        { value: 'ar', countryName: "Argentina" },
        { value: 'at', countryName: "Austria" },
        { value: 'au', countryName: "Austrailia" },
        { value: 'be', countryName: "Beligium" },
        { value: 'bg', countryName: "Bangladesh" },
        { value: 'br', countryName: "Barbados" },
        { value: 'ca', countryName: "Canada" },
        { value: 'ch', countryName: "Chile" },
        { value: 'cn', countryName: "China" },
        { value: 'co', countryName: "Colombia" },
        { value: 'cu', countryName: "Cuba" },
        { value: 'cz', countryName: "Czechia" },
        { value: 'de', countryName: "Germany" },
        { value: 'eg', countryName: "Egypt" },
        { value: 'fr', countryName: "France" },
        { value: 'gb', countryName: "United Kingdom of Great Britain" },
        { value: 'gr', countryName: "Great Britain " },
        { value: 'hk', countryName: "Hong Kong" },
        { value: 'hu', countryName: "Hungary" },
        { value: 'id', countryName: "Indonesia" },
        { value: 'ie', countryName: "Ireland" },
        { value: 'in', countryName: "India" },
        { value: 'it', countryName: "Italy" },
        { value: 'jp', countryName: "Japan" },
        { value: 'kr', countryName: " Korea" },
        { value: 'lt', countryName: "Lithuania" },
        { value: 'lv', countryName: "Latvia" },
        { value: 'ma', countryName: "Morocco" },
        { value: 'mx', countryName: "Micronesia (Federated States of)" },
        { value: 'my', countryName: "Malaysia" },
        { value: 'ng', countryName: "Nigeria" },
        { value: 'nl', countryName: "Netherlands" },
        { value: 'no', countryName: "Norway" },
        { value: 'nz', countryName: "New Zealand" },
        { value: 'ph', countryName: "Philippines" },
        { value: 'rs', countryName: "Serbia" },



    ];



    async componentDidMount() {
        this.props.My_Progress(40)
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.state.countryCode}&category=${this.props.category}&apiKey=9af7d5dbc9fa4f9483a0643780892ed3&page=1&pageSize=6`);
        let response = await data.json();
        this.props.My_Progress(80)
        this.setState({ spin: true });
        setTimeout(() => {
            this.setState({
                my_articles: response.articles,
                spin: false,
                TotalArticles: response.totalResults

            })
            this.props.My_Progress(100);
        }, 2000)
        console.log(response);

    }

    async componentDidUpdate(prevProps, prevState) {
        if (prevState.countryCode !== this.state.countryCode) {

            this.props.My_Progress(40)
            let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${!this.state.countryCode ? this.state.countryCode : this.state.countryCode}&category=business&apiKey=9af7d5dbc9fa4f9483a0643780892ed3&page=1&pageSize=6`);
            let response = await data.json();
            this.props.My_Progress(80)
            this.setState({ spin: true });
            setTimeout(() => {
                this.setState({
                    my_articles: response.articles,
                    spin: false,
                    TotalArticles: response.totalResults

                })
                this.props.My_Progress(100);
            }, 2000)
            console.log(this.state)
        }
    }






    // Previous Page Button
    PreviousPage = async (e) => {
        this.props.My_Progress(40)
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.state.countryCode}&category=${this.props.category}&apiKey=9af7d5dbc9fa4f9483a0643780892ed3&page=${this.state.page - 1}&pageSize=6`);
        this.setState({ spin: true });
        let response = await data.json();
        this.props.My_Progress(80)
        setTimeout(() => {
            this.setState({
                page: this.state.page - 1,
                my_articles: response.articles,
                spin: false,
            })
            this.props.My_Progress(100)
        }, 2000);


    }

    // Next Page Button
    NextPage = async (e) => {
        if (!(this.state.page + 1 > Math.ceil(this.state.TotalArticles / 20))) {

            this.props.My_Progress(40)
            let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.state.countryCode}&category=${this.props.category}&apiKey=9af7d5dbc9fa4f9483a0643780892ed3&page=${this.state.page + 1}&pageSize=6`);
            this.setState({ spin: true });
            let response = await data.json();
            this.props.My_Progress(80)
            setTimeout(() => {
                this.setState({
                    page: this.state.page + 1,
                    my_articles: response.articles,
                    spin: false,
                })
                this.props.My_Progress(100)
            }, 2000);


        }

    }

    captial = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }


    render() {
        return (
            <>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <h3 className='text-center' style={{ margin: "20px 0px" }}>Ninja News Top Headlines Of {this.captial(this.props.category)} </h3>
                        <form className='col-md-4'>

                            <select className="form-select form-select-sm" onChange={this.ChangeHandle}   >


                                <option  >Select Country</option>
                                {
                                    this.optionsValue.map((elem) => {
                                        return (
                                            <option value={elem.value} key={elem.value} defaultValue="us" >{elem.countryName}</option>
                                        )
                                    })
                                }
                            </select>
                            <p className=' form-text'>Select Any Country Which You Want To Read News.</p>

                        </form>
                    </div>
                    <div className='row justify-content-center'>


                        {
                            this.state.spin === true ? <Loader /> :
                                this.state.my_articles.map((elem) => {

                                    return (
                                        <div className='col-md-4' key={elem.url} style={{ margin: "10px 0px" }}>
                                            <NewsItem author={elem.author} content={elem.content} url={elem.url} desc={elem.description} title={elem.title} images={elem.urlToImage} />
                                        </div>
                                    )
                                })
                        }

                    </div>
                </div>
                <div className='container d-flex justify-content-between' style={{ marginTop: "20px" }} >
                    <button className='btn btn-dark ' style={{ margin: "40px 0px", padding: "5px 40px" }} disabled={this.state.page <= 1} onClick={this.PreviousPage} >Previous</button>
                    <button className='btn btn-dark ' style={{ margin: "40px 0px", padding: "5px 40px" }} onClick={this.NextPage}>Next</button>
                </div>
            </>
        )
    }
}
