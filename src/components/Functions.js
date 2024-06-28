import React, { Component } from 'react'

export default class Functions extends Component {
    render() {
        return (
            <div>
                <div className='dots'> /*Jugaad for the gap between components*/
                    <h2 >.</h2>
                    <h2>.</h2>
                </div>
                <br></br>
                <br></br>
                <h1 className='keys'> <b>Things your spreadsheet wishes it could </b></h1>
                <div class="container">
        <div class="left-section">
            <h1>Accurate Demand Forecasting</h1>
            <p>Dynamically predict future demand across all channels, with high accuracy and lowest granularity. Crest takes into account what traditional forecasts don't: trends, real-time market signals, promotional activities, and even logistics disruptions.</p>
            <a href="#" className='learn'>Learn more ➡</a>
            <ul class="feature-list">
                <li>HELIX: Workflow Automation</li>
                <li>Automated Purchase Planning</li>
                <li>Automated Distribution Planning</li>
                <li>Easy Integration</li>
                <li>Custom Dashboards</li>
                <li>Consensus Planning</li>
            </ul>
        </div>
        <div class="right-section">
            <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64bb2507621d0bf7da369_Demand%20forecasting-p-1080.webp" alt="Dashboard Screenshot"/>
        </div>
        
    </div>
    <a href="#" class="view-features">View all features</a>
            </div>
        )
    }
}
