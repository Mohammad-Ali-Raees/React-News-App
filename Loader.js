import React, { Component } from 'react'

export default class Loader extends Component {
    render() {
        return (
            <div className="spinner-border text-danger" role="status" style={{margin:"20px 0px"}}>
                <span className="visually-hidden">Loading...</span>
            </div>

        )
    }
}
