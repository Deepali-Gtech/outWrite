const newFormHandler = async (event) => {
    event.preventDefault();
    // alert("here2")
    const prompt_id = document.querySelector('#prompt-id').value.trim();
    const body = document.querySelector('#newcomment').value.trim();
  
    if (prompt_id && body) {
      const response = await fetch('/api/comments/', {
        method: 'POST',
        body: JSON.stringify({ prompt_id, body }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to create comment');
      }
    }
  };
  
  document
    .querySelector('.new-project-form')
    .addEventListener('submit', newFormHandler);

  
  
  