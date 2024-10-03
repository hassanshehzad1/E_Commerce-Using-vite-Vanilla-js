export const showToast = (buttonType, id) => {
  if (buttonType.target.className === "show") {
    let desc = document.querySelector("#desc");
    desc.innerHTML = `Product ${id} has been added`;
  } else {
    let desc = document.querySelector("#desc");
    desc.innerHTML = `Product ${id} has been removed`;
  }
  let x = document.getElementById("toast");
  x.className = "show";

  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 5000);
};
