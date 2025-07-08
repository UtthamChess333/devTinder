console.log("Started");

function fun(i) {
    setTimeout(() => {
        console.log(i);
    },2);
}

for(let i=20;i>=1;i--) {
    fun(i);
}
