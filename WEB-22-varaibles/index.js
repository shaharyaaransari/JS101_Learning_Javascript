let name = ["gullu","Batman","spiderman","john snow","tyron"];
let count=0;
for(let i=0;i<=name.length-1;i++){
  for(j=0;j<=name[i].length-1;j++){
    if(name[i][j]=="B"||name[i][j]=="u"){
      count++;
      
    }
  }
  
}
console.log(count);