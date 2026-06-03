let n1=67
let n2=89
let n3=45

acendente(n1,n2,n3)

function acendente(n1,n2,n3){
    if(n1<n2 && n1<n3){
        console.log(n1)
        if(n2<n3){
            console.log(n2)
            console.log(n3)
        }
        else{
            console.log(n3)
            console.log(n2)
        }   
    }
    else if(n2<n1 && n2<n3){
        console.log(n2) 
        if(n1<n3){
            console.log(n1)
            console.log(n3)
        }
    }
    else{
        console.log(n3)
        if(n1<n2){
            console.log(n1)
            console.log(n2)
        }
        else{
            console.log(n2)
            console.log(n1)
        }
    }       
}