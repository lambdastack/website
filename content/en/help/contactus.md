---
title: Contact us
Description: >
  Contact LambdaStack
weight: 1
type: legals
hide_feedback: true
---

## Contact Us

<script src="https://www.google.com/recaptcha/api.js" async defer></script>

<div id="formcontactusty" hidden>
  <p class="text-center ">Thank you for reaching out!</p>
</div>

<div id="formcontactus">
  <form id="contactus" action="https://f5jpj0vi39.execute-api.us-east-1.amazonaws.com/lsio-contactus">
    <div class="form-group">
      <label for="emailID">Email address</label>
      <input id="emailID" name="emailID" type="email" autofocus="true" class="form-control" placeholder="name@example.com" required>
    </div>
    <div class="form-group">
      <label for="messageID">Message</label>
      <textarea class="form-control" id="messageID" name="messageID" rows="2" required></textarea>
    </div>
    <div class="g-recaptcha" data-callback="recaptchaCallback" data-sitekey="6Le-r6QdAAAAAPKGLSIOh77ZEuJ1bDgohpbj91ty"></div>
    <button id="submitButton" type="submit" class="btn btn-primary mb-2" disabled>Send</button> <!-- onclick="onSubmit(event)"-->
  </form>
</div>

<script>

async function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const url = form.action;

  const formData = new FormData(form);

  const plainFormData = Object.fromEntries(formData.entries());
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
    document.getElementById("formcontactus").setAttribute("hidden", "");
    document.getElementById("formcontactusty").removeAttribute("hidden");
  }).catch(function (error) {
    console.error(error);
    alert('Contact us - ' + error);
  })
}

const contactus = document.getElementById('contactus');
contactus.addEventListener("submit", handleFormSubmit);

function recaptchaCallback() {
  document.getElementById("submitButton").removeAttribute("disabled");
}
</script>
