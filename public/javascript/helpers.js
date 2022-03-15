const fetchData = (path, method, data) =>
  fetch(path, {
    method: method,
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
