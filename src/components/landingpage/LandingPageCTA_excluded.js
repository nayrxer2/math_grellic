import React from 'react'
import '../../styles/landingpagecta.css'

export default function LandingPageCTA() {
    return (
      <div className="container-fluid col-md-10 justtify-content-center">
      <div className="row offset-md-3">
        
        <div className="col-sm-4 cta-m">
        <h1>WHY CHOOSE MATH GRELLIC?</h1>
        <p className="">Get motivated by these stories.</p>
          <div className="card-body">
            <div className="border rounded grid-item-box border-light col-sm-auto col-xs-auto">
              <div className="card-item">
                <p className="">Et ab necessitatibus sit quaerat. Asperiores praesentium quo architecto sit nam vel. Dolorem minus dolores delectus minus voluptatem dignissimos optio. Nihil rerum accusamus ullam similique et dolores nam.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-4 cta-m">
          <div className="card-body">
            <div className="border rounded grid-item-box border-light col-sm-auto col-xs-auto">
              <div className="card-item">
                <p className="">Consequatur cum in iste quisquam dolor nobis et quos doloremque. Est officiis facere inventore sed. Magnam quas eum earum omnis tempora. </p>
              </div>
            </div>
          </div>

          <div className="card-body">
            <div className="border rounded grid-item-box border-light col-sm-auto col-xs-auto">
              <div className="card-item">
                <p className="">Dignissimos nisi nisi quis maiores iusto.</p>
              </div>
            </div>
          </div>
        </div>
      
      </div>
      </div>
    )
}
