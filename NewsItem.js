import React, { Component } from 'react'

export default class NewsItem extends Component {


    

    render() {
        let { author, content, desc, title, images, url } = this.props;
        let styleling = {
            font: {
                fontSize: "13px"
            }
        }
        return (

            <div className="card" style={{ width: '100%', height: "100%", margin: "30px 0px" }}>
                <img src={!images ? "https://www.reuters.com/resizer/lFuAHHuxI65Y7ls3tDcvHquJEcc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/MXVJ3QUMGBK4RLPQHYM5NMAPUU.jpg" : images} className="card-img-top" style={{ padding: "20px", width: "100%", height: "50%" }} alt="..." />
                <div className="card-body">
                    <h5>{title.slice(0, 35)}</h5>
                    <h6 className="card-title">{!author ? "Ali " : author}</h6>
                    <p style={styleling.font} className="card-text">{!desc ? "Twitter's new CEO has announced he is “shutting down IP addresses of known bad actors today,” in an attempt to reduce the number of scams and bots, and some users say it might have worked." : desc}</p>
                    {/* <p style={styleling.font} className="">{content.slice(0,20)}</p> */}
                    <div className='d-grid gap-2'>
                      
                        <a href={url} className="btn btn-dark btn-md" >Read Full News</a>
                    </div>

                </div>

            </div>


        )
    }
}
