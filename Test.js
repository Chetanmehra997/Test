function inVowel(vo){
    vo=vo.toUppercase();
    return(vo=='A' || vo=='E'  || vo=='I' ||vo== 'O' ||vo== 'U');
}

function contVowel(ste){
    let cont=0;
    for (let i = 0; i<ste.length; i++)

    if(inVowel(ste(i)))
    ++cont;
};
function shotArr(arr,n){
    let vs =[];

    for (let i=0; i<n; i++){
        vs.push([contVowel(arr(i)),arr(i)]);
    }
    vs.sort(); 


    for (let i=0; i<vs.length; i++)
    document.write(vs(i)(i)+ " ");
}

let arr =["ONE"];
let n=arr.length;
shotArr=(arr,n);
