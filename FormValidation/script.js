/**
 * Created by saketmohan on 7/16/15.
 */


function formfill() {

    var username = document.myform.username;
    var umsex = document.myform.msex;
    var ufsex = document.myform.fsex;

    if(allLetters(username))
    {
        if(validsex(umsex,ufsex))
        {
        }
    }
 return false;
}
function allLetters(username)
{
    var letters = /^[A-Za-z]+$/;
    if(username.value.match(letters))
    {
        return true;
    }
    else
    {
        alert('Username must contain alphabet characters only');
        username.focus();
        return false;
    }
}

function validsex(umsex,ufsex)
{
    x=0;

    if(umsex.checked)
    {
        x++;
    } if(ufsex.checked)
{
    x++;
}
    if(x==0)
    {
        alert('Select Male/Female');
        umsex.focus();
        return false;
    }
    else
    {
        alert('Form Succesfully Submitted');
        window.location.reload()
        return true;
    }
}


