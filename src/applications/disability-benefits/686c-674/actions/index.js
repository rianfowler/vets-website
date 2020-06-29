import recordEvent from 'platform/monitoring/record-event';
import { getData, isServerError, isClientError } from '../util';

export const VERIFY_VA_FILE_NUMBER_STARTED = 'VERIFY_VA_FILE_NUMBER_STARTED';
export const VERIFY_VA_FILE_NUMBER_SUCCEEDED =
  'VERIFY_VA_FILE_NUMBER_SUCCEEDED';
export const VERIFY_VA_FILE_NUMBER_FAILED = 'VERIFY_VA_FILE_NUMBER_FAILED';

// VA file number is required to create a valid entry in BGS.
async function getVaFileNumber() {
  return getData('/profile/valid_va_file_number');
}

export const verifyVaFileNumber = () => async dispatch => {
  dispatch({ type: VERIFY_VA_FILE_NUMBER_STARTED, response: true });
  const response = await getVaFileNumber();
  if (response.errors) {
    // TODO: fire off analytics event when endpoint is wired up.
    //   const errCode = res.errors[0].code;
    //   isServerError(errCode) ? recordEvent({}) : recordEvent({})
    recordEvent({
      event: 'disability-file-number-gate-failed',
      'error-key': `${response.errors[0].code}_error_description`,
    });
    dispatch({ type: VERIFY_VA_FILE_NUMBER_FAILED, response });
  } else {
    recordEvent({
      event: 'disability-file-number-gate-successful',
    });
    dispatch({ type: VERIFY_VA_FILE_NUMBER_SUCCEEDED, response });
  }
};
