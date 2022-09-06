console.log('promot added');
// alert('ki khobor dada?')
const showAlart = () => {
    const num = Math.random()*10;
    console.log(num);
    if( num < 5){
        alert('Dada kmn aso???')
    }
}

const askSomething = () => {
    const decession = confirm('Are you commig to the picnic?')
    console.log(decession)
    if( decession === true){
        alert('500 tk bkash koro');
    }
    else{
        console.log('Dure jaiya Morek');
    }
}

const getUserInfo = () => {
    const name = prompt('Tell Us About Yourself')
    console.log(name);
    if( !!name){
        console.log('Welcome to here', name)
    }
}