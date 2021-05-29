/* This function changes the header by showing the person has
 * successfully login to the system
 */
function updateHeader(name,pwd)
{
    // check password
    secret = pwd.value;
    user = name.value;

    if(pwdOK(user, secret))
    {
	    pwd.value="";
      //  window.location.replace("account.html");


        // prepare new H1 tag
	    h1Text = document.createTextNode(user + " has successfully logged in");

        // remove existing H1
	    target = document.getElementById("h1ID1");
      target.removeChild(target.firstChild);
	    target.style.color = "white";
	    target.style.fontStyle = "italic";

      target2 = document.getElementById("loginForm");
      target2.style.visibility = "hidden";

        // add new H1 tag to the webpage & reset input field
        target.appendChild(h1Text);
        name.value ="";
    }

    pwd.value="";
}

function pwdOK(user, secret)
{
    if(secret.length<3)
    {
        alert("password needs 3 characters or more");
        return false;
    }
    else
    {
        var key = user + "_password";
        var storePwd = localStorage.getItem(key);
        if(secret != storePwd)
        {
            alert("password incorrect");
            return false;
        }
    }
    return true;
}
