// From Underscore.js
function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function showLoader(show, form) {
  let loaderContainer = form.querySelector(".loader-container");
  if (!!!loaderContainer) {
    loaderContainer = document.createElement("div");
    loaderContainer.className = "loader-container";
    const loader = document.createElement("div");
    loader.className = "loader";
    loaderContainer.append(loader);
    form.append(loaderContainer);
  }
  loaderContainer.className = show
    ? "loader-container"
    : "hidden loader-container";
}

function showError(text, form, container) {
  let error = container.querySelector("span.collectingemail_error");
  if (!!!error) {
    error = document.createElement("span");
    form.after(error);
  }
  if (text.length) {
    error.textContent = text;
    error.className = "collectingemail_error";
  } else {
    error.textContent = "";
    error.className = "hidden error collectingemail_error";
  }
}

function setIsLoading(loading, form) {
  const submitInput = form.querySelector("input[type='submit']");
  const emailInput = form.querySelector("input.email");
  if (loading) {
    submitInput.className = "hidden";
    submitInput.disabled = true;
    emailInput.disabled = true;
    showLoader(true, form);
  } else {
    submitInput.className = "";
    submitInput.disabled = false;
    emailInput.disabled = false;
    showLoader(false, form);
  }
}

function isEmailValid(email) {
  const EMAIL_REGEX =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email.length >= 3 && EMAIL_REGEX.test(email);
}

const submit = debounce(async function (form, formData, container) {
  setIsLoading(true, form);
  formData.append("email_address_check", "");
  formData.append("locale", "en");
  // Sendinblue.come
  const response = await fetch(
    "https://b499a3de.sibforms.com/serve/MUIEABug0gc3DxW9vUKNKyCGu4-aFJcCyZ02eAHjK72qfTXRzo8tZCqlD6wsS2yBWZmgeOFY_Mfx--6EFxWHzSyYt6aNngbGRfvyxBTBjftvDCtwSsqP7ZUYujZLYed6L0tX3EbDZfmKw8AKUn-6QmM_g6Y_BExAGp_42lEbk-sHjwupYk-JsJSp_YaKllrxpYzqAcuwpqIEHY4_?isAjax=1",
    {
      method: "POST",
      body: formData,
    }
  );

  setIsLoading(false, form);
  if (response.ok) {
    form.className = "success";
    const emailInput = form.querySelector("input.email");
    emailInput.disabled = true;
    const submitInput = form.querySelector("input[type='submit']");
    submitInput.disabled = true;
    submitInput.value = "OK";
  } else {
    form.className = "error";
    showError("Please try again", form, container);
    setTimeout(() => {
      if (!form.className.includes("success")) {
        form.className = "";
        showError("", form, container);
      }
    }, 2000);
  }
}, 200);

function collectingEmail(containerId) {
  const container = document.getElementById(containerId);
  container
    .querySelector("#collectingemail")
    .addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const form = container.querySelector("#collectingemail");
      if (isEmailValid(formData.get("EMAIL"))) {
        submit(form, formData, container);
      } else {
        showError("Please enter a valid email", form, container);
        setTimeout(() => showError("", form, container), 5000);
      }
    });
}

window.onload = () => collectingEmail("collectingemail_container");
window.collectingEmail = collectingEmail;
