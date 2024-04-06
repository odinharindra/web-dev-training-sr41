console.log("JS Components - Accordion");

const accordionTogglers = document.querySelectorAll(".__toggler");
console.log({ accordionTogglers });

Array.from(accordionTogglers).forEach((toggler) => {
  toggler.addEventListener("click", (event) => {
    console.log("Toggler clicked", event);
    toggleAccordionBody(event.target.dataset.accTarget);
  });
});

function toggleAccordionBody(selector) {
  const accBody = document.querySelector(`[data-acc-name="${selector}"]`);
  accBody.classList.toggle("show");
}
