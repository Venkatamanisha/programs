const name=document.getElementById(name);
const reg=document.getElementById(reg);
const pass=document.getElementById(pass);
const branch=document.getElementById(selid);
const coll=document.getElementById(colid);
const gend=document.getElementById(gend);
const hob=document.getElementById(hob);
if(name.value===''){
    alert('please enter name');
    name.focus();
    return false
}
if(reg.value===''){
    alert('please enter rollno');
    name.focus();
    return false
}
if(pass.value===''){
    alert('please enter password');
    name.focus();
    return false
}
if(branch.value===''){
    alert('please enter branch');
    name.focus();
    return false
}
if(coll.value===''){
    alert('please enter college name');
    name.focus();
    return false
}
if(gend.value===''){
    alert('please enter gender');
    name.focus();
    return false
}
if(hob.value===''){
    alert('please enter hoby');
    name.focus();
    return false
}
return true