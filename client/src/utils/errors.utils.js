const getServerError = (err) => {
  let value = '';

  if (typeof err?.response?.data === 'string') {
    value = err.response.data;
  } else if (typeof err?.response?.data === 'object') {
    if (err.response.data?.message) {
      if (typeof err.response.data.message === 'string') {
        value = err.response.data.message;
      } else if (Array.isArray(err.response.data.message) && err.response.data.message.length) {
        value = err.response.data.message[0];
      }
    }
  } else if (typeof err?.message === 'string') {
    value = err.message;
  }

  return value;
};

const getServerErrorFromBlobResponse = async (err) => {
  let value = '';

  if (typeof err?.response?.data === 'string') {
    value = err.response.data;
  } else if (typeof err?.response?.data === 'object') {
    let newError = await err.response.data.text();
    newError = JSON.parse(newError);
    if (typeof newError === 'string') {
      value = newError;
    } else if (Array.isArray(newError) && newError.length) {
      value = newError[0];
    }
  } else if (typeof err?.message === 'string') {
    value = err.message;
  }

  return value;
};

export { getServerError, getServerErrorFromBlobResponse };
