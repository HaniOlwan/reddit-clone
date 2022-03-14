const fetchData = (path, method, data) =>
  fetch('api/v1/signup', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
