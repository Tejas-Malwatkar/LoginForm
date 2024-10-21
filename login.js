document.addEventListener("DOMContentLoaded", function () {
  const submit_btn = document.getElementById("save_btn");

  function loginUser() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users"))
      ? JSON.parse(localStorage.getItem("users"))
      : [];
    console.log(user_records);
    if (
      user_records.some((user) => {
        return user.email === email && user.password === password;
      })
    ) {
      alert("Login successful");
      let current_user = user_records.filter((user) => {
        return user.email == email && user.password === password;
      })[0];

      localStorage.setItem("name", current_user.name);
      localStorage.setItem("email", current_user.email);
      window.location.href = "profile.html";
    } else {
      alert("Login failed");
    }
  }

  submit_btn.addEventListener("click", loginUser);
});
