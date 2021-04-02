const newFormHandler = async (event) => {
    event.preventDefault();
    
    const id = document.querySelector('#prompt-id').value.trim();
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
  
    if (title && content ) {
      const response = await fetch('/api/prompts/' + id, {
        method: 'PUT',
        body: JSON.stringify({ title: title, description: content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update story. Got response status: ' + response.status);
      }
    }
  };
  
  
  document
    .querySelector('.new-project-form')
    .addEventListener('submit', newFormHandler);
  