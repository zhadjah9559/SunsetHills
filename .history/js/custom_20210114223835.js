let sunsetOrder = ["Building 1 will always view the sunset!"];

function BeginFunction(){
    //wire up all the data to the building variables
    let building1 = parseInt( document.getElementById("input1").value )
    let building2 = parseInt( document.getElementById("input2").value )
    let building3 = parseInt( document.getElementById("input3").value )
    let building4 = parseInt( document.getElementById("input4").value )
    let building5 = parseInt( document.getElementById("input5").value )

    //const buildings = document.querySelectorAll(".form-control").forEach( building =>{
      //  return [ .form-control].map()
        
        
       
    //})

     //Put all the buildings into an array
     let buildingsArray = [building1, building2, building3, building4, building5]

    //User Input validation
    if(building1 == null || building2 == null || building3 == null || building4 == null || 
       building5 == null){
        document.getElementById("results").innerHTML = `You must input numbers for all buildings`
    }else{

        



    } 
       


  
    


    
   
}

// function KeepTrackOfTallest(){

    
// }




function JasonsFunction(){
    let maxHeight = buildingsArray[0]
    let viewOrder = new Array()
    viewOrder.push(building1)

    //if the current building is larger than the largest previous building, then add it to array
    //Determine maximum number algorithm
    for (let i = 1; i < array.length; i++) {
        if(buildingsArray[i] > maxheight){
            maxHeight = buildingsArray[i]
            viewOrder.push(maxheight)
        }
        document.getElementById("results").innerText =  `The ascending array is [ ${ascendingarray.join(",")}]`
    }
}

function clear(){
    buildings.querySelectorAll("")
}