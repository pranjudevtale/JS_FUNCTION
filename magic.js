
function get(m){
    var i=0;
    var v=15;
    while (i<(m.length)){
        var col=0;
        var sum=0;
  
        while (col<m.length){
            sum=sum+m[i][col]
            col+=1
    
        i++
        }
    }
    console.log(sum)

    var j=0;
    while (j<(m.length)){
        var row=0;
        var sum1=0;
        while (row<(m.length)){
            sum1=sum1+m[row][j]
            row+=1
    
        j++  
        }
    }
    console.log(sum1)

    var x=m[0][0]+m[1][1]+m[2][2]
    var z=m[0][2]+m[1][1]+m[2][0]
    if (x==v){
        console.log("it is digona:-",x)
        if (z==v){
        
            console.log("diagonal:-",v)
            if (sum==sum1 && sum1==x && x==z){
                console.log("it is magic square")
            }
            else{
                console.log("it is not magic square")
            }
        
        }
        else{
            console.log("it is not diagonal")
        }
    }
    else{
        console.log("it is not dig")
    }
}
get( [
    [8, 3, 4],
    [1, 5, 9],
    [6, 7, 2]
])
