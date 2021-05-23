/* This functions checks if the two entered passwords are the same. If so, 
 * it is stored in localStorage under the key that concatenates the name & "_password".
 * For example, if name is "John", then the key is "John_password".
 * The name and passwords are reset to empty string once successful.
 */
function updatePassword(name,pwd1,pwd2)
{
    // check password
    secret1 = pwd1.value;
    secret2 = pwd2.value;
    
    if(pwdOK(secret1, secret2))
    {   
        // store user name and password
        var key = name.value + "_password";
        localStorage.setItem(key, secret1);

        name.value ="";
        
        return true;
    }
    
    pwd1.value="";
    pwd2.value="";
    return false;
}


/* This function checks whether
 * - the entered password has at least 3 characters AND
 * - the two strings entered are the same. If so,
 * it will return true if it is OK.
 */
function pwdOK(secret1, secret2)
{
    if(secret1.length<3)
    {
        alert("password needs 3 characters or more");
        return false;
    }
    else
    if((secret1!=secret2))
    {
        alert("password not the same");
        return false;
    }
    return true;
}