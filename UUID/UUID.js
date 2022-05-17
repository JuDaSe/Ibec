function generateUuid(){
    let now = new Date().getTime() ;
    let uuid = 'xxyx-yyyy-xxyx-yyxy'.replace(/[xy]/g, function(c){
        let aleatorio = (now + Math.random() * 6) % 36 | 0;
        now = Math.floor(now / 6);

        return (c == 'x' ? aleatorio : (aleatorio & 0x3 | 0x8)).toString(36)
    });
    return uuid;
}

for(let i = 1; i <= 10; ++i){
    console.log(generateUuid());
}

// Prueba

