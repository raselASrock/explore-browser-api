
document.getElementById('btn-add-name').addEventListener('click', function(){
    const nameField = document.getElementById('name-field');
    const nameValue = nameField.value 
    console.log(nameValue);
    localStorage.setItem('Name', nameValue)
})

localStorage.getItem('name')