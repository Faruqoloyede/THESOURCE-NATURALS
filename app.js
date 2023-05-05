const btn = document.querySelector("#menu-btn");
const nav = document.querySelector(".navbar");



btn.addEventListener("click", ()=>{
    btn.classList.toggle("open")
    nav.classList.toggle("show")
});

window.onscroll = ()=>{
    btn.classList.remove("open");
    nav.classList.remove("show");
};


//TESTIMONIAL
const testimonialsContainer = document.querySelector('.testimonial-container')
const testimonial = document.querySelector('.testimonial')
const user = document.querySelector(".user")

const testimonials = [
  {
    text:
      "Overall, I would highly recommend this medical provider to anyone seeking high-quality medical care. They truly went above and beyond to provide exceptional service, and I am grateful to have had the opportunity to receive care from such a wonderful team.",
    name: "_happy client"
  },
  {
    text:
      "I can really feel there's a lot of improvement in my system following your plan along with the treatment I'm taking.",
    name: "_happy client"
  },
  {
    text:
      "Overall, I would highly recommend this medical provider to anyone seeking high-quality medical care. They truly went above and beyond to provide exceptional service, and I am grateful to have had the opportunity to receive care from such a wonderful team.",
    name: "_happy client"
  },
  {
    text:
    "Thanks to the treatment I received, my pain has been significantly reduced, and I am now able to lead a much more active and fulfilling life. I no longer feel limited by my condition and am able to enjoy activities that were once impossible for me.",
    name: "_happy client"
  },
]

let idx = 1

function updateTestimonial() {
  const { text, name} = testimonials[idx]

  testimonial.innerHTML = text
  user.innerHTML = name

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial,  3000)

// updateTestimonial()