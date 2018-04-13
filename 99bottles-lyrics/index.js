console.log('Sing along 99 bootles of beer !');
const totalNoOfbeers = 100;
var noOfBeers = totalNoOfbeers;
var result = '';

while(noOfBeers > 0){
    noOfBeers--;
    var beerword = `${noOfBeers-1}`;
    if(noOfBeers == 1){
        beerword = 'no more';
    }
    console.log(noOfBeers);
    if(noOfBeers >= 1 && beerword != 'no more'){
        var lyricsLine = `${noOfBeers} bottles of beer on the wall, ${noOfBeers} bottles of beer.<br>
        Take one down and pass it around, ${beerword} bottles of beer on the wall.<br>`
    }
    console.log(lyricsLine);
    result = result + lyricsLine;
}
noOfBeers = totalNoOfbeers;
result = result + `No more bottles of beer on the wall, no more bottles of beer.<br>
Go to the store and buy some more, ${noOfBeers - 1} bottles of beer on the wall.<br>`
console.log(result);
document.getElementById('mylyrics').innerHTML = result;


var v = 99;

var x =  `<br> ${v} bottles of beer on the wall, ${v} bottles of beer. <br>`;

for(i=v-1;i>=0;i--){
    
    if (i==0){
        var j = "no more";
    }else{
        j=i
    }
    
    var s = "s"
    
    if(i==1){s = ""}

    x += `Take one down and pass it around, ${j} bottle${s} of beer on the wall.<br><br> ${j} bottle${s} on the wall, ${j} bottle${s} of beer.<br>`;

}

x +=  `Go to the store and buy some more, ${v} bottles of beer on the wall.<br>`

document.getElementById('mylyrics').innerHTML = x;