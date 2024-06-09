import React from 'react'

const cardstyle = {
  marginLeft: '30px',
  height: '300px',
  width: '18rem',
  position: 'relative',
  borderRadius: '20px',
  backgroundColor: '#F1E9FC'
};
const img = {
  height: '60px',
  margin: '20px'
};
const cardbody = {
  textAlign: 'left',
}

function Keyscards() {
  return (
    <>
    <div>
      <section className="key-problems">
        <h2 className='key'><b>Four Key Questions Answered By Crest</b></h2>
          <div className="row">
            <div className='col-md-3'>
            <div className="card " style={cardstyle}>
              <div className="row">
                <div className="col-3">
                  <img className="card-img-top" style={img} src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f63ee54595853ca5e31682_what%20to%20orderr%20(1).svg" alt="Card image cap" />
                </div>
                <div className="row">
                  <div className="col">
                    <div className="card-body" style={cardbody}>
                      <h4 className="card-title"><strong>What to order</strong></h4>
                      <p className="card-text">Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>

            <div className='col-md-3'>
            <div className="card " style={cardstyle}>
              <div className="row">
                <div className="col-3">
                  <img className="card-img-top" style={img} src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0d2fab2e360025df922a_when%20to%20orderr.svg" alt="Card image cap" />
                </div>
                <div className="row">
                  <div className="col">
                    <div className="card-body" style={cardbody}>
                      <h4 className="card-title"><strong>When to order</strong></h4>
                      <p className="card-text">Have up-to-date inventory, storage, sales velocity, and demand. Get timely order suggestions so you're never left guessing.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>

            <div className='col-md-3'>
            <div className="card " style={cardstyle}>
              <div className="row">
                <div className="col-3">
                  <img className="card-img-top" style={img} src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0cc629ab7f2d8cb0a8bd_how%20much%20to%20stock.svg" alt="Card image cap" />
                </div>
                <div className="row">
                  <div className="col">
                    <div className="card-body" style={cardbody}>
                      <h4 className="card-title"><strong>How much to stock</strong></h4>
                      <p className="card-text">Get inventory requirements for every node, for every SKU. So you avoid out-of-stock situations, even during demand spikes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>

            <div className='col-md-3'>
            <div className="card " style={cardstyle}>
              <div className="row">
                <div className="col-3">
                  <img className="card-img-top" style={img} src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0c2c27cde81ffea6515b_where%20to%20placee.svg" alt="Card image cap" />
                </div>
                <div className="row">
                  <div className="col">
                    <div className="card-body" style={cardbody}>
                      <h4 className="card-title"><strong>Where to place</strong></h4>
                      <p className="card-text">Our tool suggests how to move stock within your supply chain. So you'll always have products available across cities.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>

          </div>
        </section>
    </div>
    </>
  )
}

export default Keyscards
