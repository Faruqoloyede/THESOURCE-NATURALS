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

// Form.addEventListener("click", (e)=>{
//     e.preventDefault();
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "thesourcenaturals@gmail.com",
//         Password : "@Ayanfemi1",
//         To : 'opeyemiayandokun180@gmail.com',
//         From : document.getElementById("email"),
//         Subject : "This is the subject",
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );
// });

// function sendEmail(){
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "thesourcenaturals@gmail.com",
//         Password : "@Ayanfemi1",
//         To : 'opeyemiayandokun180@gmail.com',
//         From : document.getElementById("email"),
//         Subject : "This is the subject",
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );
// }