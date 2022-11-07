var index = 0;
function readmorep21()
{
    var div = document.getElementById("readmorep21")
    index++;
    if(index==1)
    {
        document.getElementById("hide1").style.display ="block";
        div.innerHTML = 'Read Less';
    }
    if(index==2)
    {
        document.getElementById("hide1").style.display ="none";
        div.innerHTML = 'Read More';
        index=0;
    }
}
function readmorep22()
{
    var div = document.getElementById("readmorep22")
    index++;
    if(index==1)
    {
        document.getElementById("hide2").style.display ="block";
        div.innerHTML = 'Read Less';
    }
    if(index==2)
    {
        document.getElementById("hide2").style.display ="none";
        div.innerHTML = 'Read More';
        index=0;
    }
}