import React from 'react'

export default function MapLocation() {
    return (
        <div>
            <div className="map-section">
                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.03722469969!2d-0.09353630947161583!3d51.52724003659697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d5b8c1bac8b%3A0x94361cc71a032ed3!2s128%20City%20Road%2C%20London%2C%20United%20Kingdom%2C%20EC1V%202NX!5e1!3m2!1sen!2seg!4v1703405512374!5m2!1sen!2seg"
                        allowFullScreen="" aria-hidden="false" tabIndex="0" id="g-map"></iframe>
                </div>
            </div>
        </div>
    )
}
