const app = new Vue({
    el: "#app",
    data:{
        PiPaTi:['tijera','piedra','papel'],
        mensaje: '',
        contador: 0
    },
    methods: {
        tijera: function(){
           let getIdOp = this.PiPaTi[Math.floor(Math.random()*this.PiPaTi.length)];
           console.log(getIdOp)
           if(getIdOp === 'piedra' && this.contador >= 0)
            {  
                this.mensaje = 'El oponente esta seleccionando'
                setTimeout(() => {
                    this.mensaje = "Perdiste porque tu oponente eligio piedra jiji"
                    this.contador--
                  }, 2000);             
            }
            else if(getIdOp === 'tijera' && this.contador >= 0)
            {
                this.mensaje = 'El oponente esta seleccionando'
                setTimeout(() => {
                    this.mensaje = "Le ganaste a tu oponente, FELICIDADES!"
                    this.contador++
                  }, 2000);        
            }
            else if(this.contador >= 0){
                this.mensaje = 'El oponente esta seleccionando'
                setTimeout(() => {
                    this.mensaje = "Fue un empate, ambos eligieron tijera"
                  }, 2000);             
            }
            else{
                this.mensaje = 'Reinicia la pagina para volver a jugar'
            }
        },
         papel: function(){
            let getIdOp = this.PiPaTi[Math.floor(Math.random()*this.PiPaTi.length)];
            console.log(getIdOp)
            this.mensaje = ' '
            if(getIdOp === 'tijera' && this.contador >= 0)
            {  
                this.mensaje = 'El oponente esta seleccionando'
                setTimeout(() => {
                    this.mensaje = "Perdiste porque tu oponente eligio tijera jiji"
                    this.contador--
                  }, 2000);             
            }
            else if(getIdOp === 'piedra' && this.contador >= 0)
            {
                this.mensaje = 'El oponente esta seleccionando'
                setTimeout(() => {
                    this.mensaje = "Le ganaste a tu oponente, FELICIDADES!"
                    this.contador++
                  }, 2000);        
            }
            else if(this.contador >= 0){
                this.mensaje = 'El oponente esta seleccionando'
                setTimeout(() => {
                    this.mensaje = "Fue un empate, ambos eligieron papel"
                  }, 2000);             
            }
            else{
                this.mensaje = 'Reinicia la pagina para volver a jugar'
            }
        },
        piedra: function(){
            let getIdOp = this.PiPaTi[Math.floor(Math.random()*this.PiPaTi.length)];
            console.log(getIdOp)
            if(getIdOp === 'papel' && this.contador >= 0)
            {  
                this.mensaje = 'El oponente esta seleccionando'
                setTimeout(() => {
                    this.mensaje = "Perdiste porque tu oponente eligio papel jiji"
                    this.contador--
                  }, 2000);             
            }
            else if(getIdOp === 'tijera' && this.contador >= 0 )
            {
                this.mensaje = 'El oponente esta seleccionando'
                setTimeout(() => {
                    this.mensaje = "Le ganaste a tu oponente, FELICIDADES!"
                    this.contador++
                  }, 2000);        
            }
            else if(this.contador >= 0){
                this.mensaje = 'El oponente esta seleccionando'
                setTimeout(() => {
                    this.mensaje = "Fue un empate, ambos eligieron piedra"
                  }, 2000);             
            }
            else{
                this.mensaje = 'Reinicia la pagina para volver a jugar'
            }
        },
    },
    mounted () {
        this.papel()
      }
})