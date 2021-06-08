// Add your code here
let formData = {
  name: "Steve",
  email: "steve@steve.com"
};

  const formInfo = { 
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }, 
    body: JSON.stringify(formData)};
 
 

  function submitData() {
  return fetch("http://localhost:3000/users", formInfo)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      console.log(object);
    })
    .catch(function(error) {
      alert("Bad things! Ragnarők!");
      console.log(error.message);
    });
  }
