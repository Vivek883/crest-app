import React, { Component } from 'react'

export default class Testimonial extends Component {
    render() {
        return (
            <div id="content">
                <div id="left">
                    <br></br>
                    <br></br>
                    <p>D2C brands face issues with supply chain management and high growth startups are not equipped to<br></br> run their demand forecast manually. Crest automates all the workflows and helps brands predict high<br></br> demand periods and be ready to cater to customer demands. It has a direct impact on the revenue <br></br>readiness of a company and that's the value we see Crest unlocking for many companies in the <br></br>future. Rahul and team have built a robust product with years of their experience distilled into the <br></br>workflows.</p>
                    <div class="profile">
                        <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/651c00235cd9c2cd10fb1976_Samosa%20Party%20Client%20Image.webp" alt="Diksha Pande" class="profile-picture" />
                        <div class="profile-info">
                            <h2>Diksha Pande</h2>
                            <p>Co-founder, Samosa Party</p>
                        </div>
                        <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63a48634ed59555eb9125770_samosa.svg" alt="Samosa Party" class="logo" />

                    </div>
                    <div class="arrows">
                        <div class="arrow left-arrow">&lt;</div>
                        <div class="arrow right-arrow">&gt;</div>
                    </div>
                    <br></br>
                    <br></br>
                    <div class="info-cards">
                        <div class="info-card">
                            <p class="percentage">upto <span class="highlight">95%</span></p>
                            <p class="description">Demand Fulfilment</p>
                        </div>
                        <div class="info-card">
                            <p class="percentage">&lt; <span class="highlight">3%</span></p>
                            <p class="description">Daily Stock-out</p>
                        </div>
                        <div class="info-card outlined">
                            <p class="read-story">Read story</p>
                            <p class="arrow">→</p>
                        </div>
                    </div>

                </div>
                <div id="right">
                    <br></br>
                    <br></br>
                    <img className='testimg' src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664ddc11c29c3652662f0739_samosa%20party%20image.webp" />
                <br></br>
                <br></br>
                
                </div>
                <br></br>
                <br></br>
            </div>
        )
    }
}
