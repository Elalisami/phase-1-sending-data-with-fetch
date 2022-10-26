// Add your code here

const body = document.querySelector("body");

function submitData(userName, userEmail) {
  const data = {
    name: userName,
    email: userEmail,
  };

  const object = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  };

  return fetch("http://localhost:3000/users", object)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      const div = document.createElement("div");
      div.innerHTML = "ID: " + object.id;
      body.append(div);
    })
    .catch(function (error) {
      const divError = document.createElement("div");
      divError.innerHTML = "Unauthorized Access";
      body.append(divError);
    });
}

submitData(hel, "eg");