// the javascript for the portfolio

let tablinks = document.getElementsByClassName("tab-links"); /*2nd, the completion of the onclick events for tablinks and contents */
let tabcontents = document.getElementsByClassName("tab-contents");/*3rd,  */

function opentab(tabname){ /*4th, here, we defined the opentab attribute we added in our html code*/
    for(tablink of tablinks){
        tablink.classList.remove("active-link"); /*5th, it will remove the active class name once click */
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");/*6th, here, once clicks, it displays the color */
    document.getElementById(tabname).classList.add("active-tab");/*7th, here, once click on skills, edu, exp, it displays their conntents */
}


// the nav links for sidemenu
let sidemeu = document.getElementById("sidemenu");/*getting the ID name from html file */

function openmenu(){ /* adding the functions we added in the icon*/
    sidemeu.style.right = "0"; /*whenever the right is "0" it will be visible */
}
function closemenu(){
    sidemeu.style.right = "-200px" /* if its close menu, it will be '-200'*/
}


// google sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbyi_w8iDq7JrNtwR-f4MAxECmm23QYnf2kg8w477yPBJtCcQBX5-aS3Xg0USAxvkz0Tng/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})