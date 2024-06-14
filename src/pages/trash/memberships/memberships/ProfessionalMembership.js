import React from 'react'

const ProfessionalMembership = ({ images }) => {
  return (
    <section className="schedule">
      <div className='container'>
        <div className="schedule-inner">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12 ">
              <div className="single-schedule first wow fadInUp" data-wow-duration="1s" data-wow-delay=".1s">
                <div className="inner">
                  <div className="icon">
                    <i className="fa fa-ambulance"></i>
                  </div>
                  <div className="single-content text-white">
                    <h3 className='text-white'>Professional Membership</h3>
                    <p className='lead'>Advantages</p>
                    <ul>
                      <li>
                        access to resources and information dedicated to the member's specialty of medicine.
                      </li>
                      <li>
                        May include Opportunities for training and professional development in the field of specialization.
                      </li>
                      <li>
                        It allows doctors to access resources and information provided by the medical organization. 
                      </li>
                      <li>
                        They can participate in Public events and meetings organized by the organization.
                      </li>
                    </ul>
                    <p className='lead'>Benefits</p>
                    <ul>
                      <li>
                        Enhance knowledge and skills in a specialty Medicine.
                      </li>
                      <li>
                        Interacting with colleagues with a common interest.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfessionalMembership