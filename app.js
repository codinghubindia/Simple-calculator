function cal(p)
{
    document.getElementById('dis').value += p;
}

function c()
{
    try{
    q = document.getElementById('dis').value;
    r = eval(q);
    document.getElementById('dis').value = r;
    }
    catch(x){
       alert("an error occured :",x);
       document.getElementById('dis').value = '';
    }
}   