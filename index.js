document.addEventListener("DOMContentLoaded", function () {
  const submit_btn = document.getElementById("save_btn");
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  let user_records = new Array();

  // function to Save the data to the local storage
  function saveData() {
    user_records = JSON.parse(localStorage.getItem("users"))
      ? JSON.parse(localStorage.getItem("users"))
      : [];
    if (name.value == "" || email.value == "" || password.value == "") {
      alert("Please fill all the fields");
      return;
    } else {
      if (
        user_records.some((user) => {
          return user.email == email.value;
        })
      ) {
        alert("Duplicate Data found");
      } else {
        user_records.push({
          name: name.value,
          email: email.value,
          password: password.value,
        });
        console.log("hello3");
        console.log(user_records);
        localStorage.setItem("users", JSON.stringify(user_records));
        alert("Data saved successfully");
        return true;
      }
    }
  }

  submit_btn.addEventListener("click", saveData);
});
