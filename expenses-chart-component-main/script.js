const graph = document.querySelectorAll(".num-day");

graph.forEach((numDay) => {
  const amount = numDay.querySelector(".fig");

  numDay.addEventListener("mouseenter", () => {
    amount.style.display = "block";
  });

  numDay.addEventListener("mouseleave", () => {
    amount.style.display = "none";
  });
});
