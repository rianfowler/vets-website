import PropTypes from 'prop-types';
import React from 'react';

export const VetTecAdditionalInformation = ({
  institution: { facilityCode },
  showModal,
}) => (
  <div
    role="application"
    className="additional-information row vads-u-margin-top--1"
  >
    <div className="usa-width-one-half medium-6 columns">
      <div className="institution-codes usa-width-one-whole">
        <h3>Institution codes</h3>
        <div>
          <strong>
            <button
              type="button"
              className="va-button-link learn-more-button"
              onClick={() => showModal('facilityCode')}
            >
              VA facility code:
            </button>
            &nbsp;
          </strong>
          {facilityCode || 'N/A'}
        </div>
      </div>
    </div>
  </div>
);

VetTecAdditionalInformation.propTypes = {
  institution: PropTypes.object,
  showModal: PropTypes.func,
};

export default VetTecAdditionalInformation;
