import recordEvent from 'platform/monitoring/record-event';
import _ from 'lodash';

export default {
  currentlyUsedBenefits: formData => {
    const selectedBenefits = _.get(formData, 'view:benefit', {});
    Object.keys(selectedBenefits).forEach(function(key) {
      if (selectedBenefits[key]) {
        recordEvent({
          event: 'edu-form-change',
          'edu-form-field':
            'Which benefit have you used or are you currently using?',
          'edu-form-value': selectedBenefits[key],
          'edu-form-action': 'clicked',
        });
      }
    });
  },
  ineligibilityAlert: data => {
    const {
      isChapter33,
      isEnrolledStem,
      isPursuingTeachingCert,
      benefitLeft,
    } = data;
    const enrolledStemAndTeaching = isEnrolledStem || isPursuingTeachingCert;
    const benefitLeftCheck = benefitLeft !== 'moreThanSixMonths';
    recordEvent({
      event: 'edu-stem-scholarship-ineligibility-alert',
      'edu-eligibility-criteria-post911-met': isChapter33,
      'edu-eligibility-criteria-stem-or-teaching-met': enrolledStemAndTeaching,
      'edu-eligibility-criteria-used-all-benefits-met': benefitLeftCheck,
      'edu-eligibilty-criteria-months-remaining-for-use': benefitLeft,
    });
  },
  exitApplication: () => {
    recordEvent({
      event: 'cta-primary-button-click',
    });
  },
};
