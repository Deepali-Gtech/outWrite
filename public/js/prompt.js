const newFormHandler = async (event) => {
    event.preventDefault();
    
      const response = await fetch('https://quotes15.p.rapidapi.com/quotes/random/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-rapidapi-key': '2c0c4fc78amsh2da7164325059e7p108519jsn0d3ac9dc0c8c',
          'x-rapidapi-host': 'quotes15.p.rapidapi.com',
          'useQueryString': 'true'
        },
      });

      //const json = await response.json();
      if (response.ok) {
        let json = await response.json();
        document.querySelector('#content').value = json.content;
      } else {
        alert('Failed to open');
      }
    
  };
  
  document
    .querySelector('.random-quote')
    .addEventListener('click', newFormHandler);
  
  