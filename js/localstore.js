(function(){

  let myName = document.getElementById("my-name"); 
  let getName = document.getElementById("get-name");
  let userName = document.getElementById("user-name"); 
  let nameStored = localStorage.name;
  let btn = document.getElementById("clear-storage");
  
  let mySurname = document.getElementById("my-surname");
  let surname = document.getElementById("surname"); 
  let surnameStored = localStorage.surname;
  console.log(`Name on page load: ${nameStored}`);
  console.log(`Surname on page load: ${surnameStored}`);
  
  if(nameStored) {
    // If there's a name in localStorage, use it:
    myName.innerHTML = `again ${nameStored}`;
    mySurname.innerHTML = ` ${surnameStored}`;
    console.log(`Name stored is: ${nameStored}`);
    console.log(`Surname stored is: ${surnameStored}`);
  }
  else {
    // There's no name in localStorage:
    myName.innerHTML = "stranger";
    console.log(`No name stored`);
  }

  function PerformGreeting() {
    if(userName.value === "") {
      alert("Please enter a name");
      userName.focus();
    }
    if(surname.value === "") {
      alert("Please enter a surname");
      surname.focus();
    }
    // Get the name the user entered:
    nameStored = userName.value;
    surnameStored = surname.value;
    // Show the name in "my-name":
    myName.innerHTML = nameStored;
    mySurname.innerHTML = surnameStored;
    // Put the name into localStorage:
    localStorage.name = nameStored;
    localStorage.surname = surnameStored;
    console.log(`New name stored: ${nameStored}`);
    console.log(`New surname stored: ${surnameStored}`);
    return false;
  }

  // Listens for a form submit action: 
  if (typeof event === "undefined") {
    getName.onsubmit = PerformGreeting; // for Firefox
  }
  else {
    getName.addEventListener("submit", PerformGreeting);
    event.preventDefault();
  }
    
  function ClearStorage(){
    localStorage.clear();
  }

  btn.addEventListener("click",ClearStorage);

}());
