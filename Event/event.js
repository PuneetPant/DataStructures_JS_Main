// let grandParent = document.querySelector(".grandParent");
// let parent1 = document.querySelector(".parent");
// let child = document.querySelector(".child");

document.querySelector(".grandParent").addEventListener('click', () => {
  console.log('GrandParent Clicked!');
})

document.querySelector(".parent").addEventListener('click', (e) => {
  // e.stopPropagation();
  console.log('Parent Clicked!');
})

document.querySelector(".child").addEventListener('click', (e) => {
  // e.stopPropagation();
  // e.preventDefault();
  console.log('Child Clicked!');
})

// Get the element, add a click listener...
document.getElementById("parent-list").addEventListener("click", function (e) {
  // e.target is the clicked element!
  // If it was a list item
  if (e.target && e.target.nodeName == "LI") {
    // List item found!  Output the ID!
    // console.log(e.target.classList)
    console.log("List item ", e.target.id.replace("post-", ""), " was clicked!");
  }
});