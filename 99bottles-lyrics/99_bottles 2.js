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