---
title: Newsletter
Description: >
  Email signup for the LambdaStack newsletter
weight: 5
type: legals
hide_feedback: true
draft: true
---

<div id="container">
  <div id="thankyou" hidden>
    <p class="text-center ">Thank you for signing up!</p>
  </div>

  <div id="formID">
    <form id="form" action="#">
      <input type="hidden" name="fID" id="fID" value="1000"/>
      <input type="hidden" name="fName" id="fName" value="LambdaStack"/>
      <input type="hidden" name="fLabel" id="fLabel" value="Newsletter"/>
      <div class="form-group">
        <label id="emaillabel" for="email" hidden>Email address</label>
        <input id="email" name="email" type="email" autofocus="true" class="form-control" placeholder="name@example.com" required>
      </div>
      <button id="submitButton" type="submit" class="btn btn-primary mb-2">Signup</button>
    </form>
  </div>
</div>

<script>
  async function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const url = form.action;

    const formData = new FormData(form);

    const plainFormData = Object.fromEntries(formData.entries());

    fLabel = plainFormData['fLabel']
    fName = plainFormData['fName']

    const formDataJsonString = JSON.stringify(plainFormData);

    await fetch(url, {
      method: "POST",
      mode: "no-cors",
      headers: new Headers({
        "Content-Type": "application/json; charset=UTF-8",
        "Accept": "application/json; charset=UTF-8",
        "Access-Control-Allow-Origin": "*"
      }),
      body: formDataJsonString
    }).then(function (response) {
      return response.text;
    }).then(function (data) {
      document.getElementById("formID").setAttribute("hidden", "");
      document.getElementById("thankyou").removeAttribute("hidden");
    }).catch(function (error) {
      console.error(error);
      alert('Email signup - ' + error);
    })
  }

  const formelement = document.getElementById('form');
  formelement.addEventListener("submit", handleFormSubmit);
</script>
