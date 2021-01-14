let sunsetOrder = "";

function BeginFunction(){
    //wire up all the data to the building variables
    let building1 = parseInt( document.getElementById("input1").value )
    let building2 = parseInt( document.getElementById("input2").value )
    let building3 = parseInt( document.getElementById("input3").value )
    let building4 = parseInt( document.getElementById("input4").value )
    let building5 = parseInt( document.getElementById("input5").value )

    KeepTrackOfTallest();


    displayResults();
}

function KeepTrackOfTallest(){
    //Put all the buildings into an array
    let buildingsArray = [building1, building2, building3, building4, building5]

    //You will need to use  nested for loops. Nested for loops are how you can properly
    //compare elements inside of an array with eachother.

    //Loop starts at one because it will be the loop that is compared to all the 
    //previous buildings that are infront of it  
    for (let currentBuilding = 1; currentBuilding < buildingsArray.length; currentBuilding++) {

        //will be kept false UNTIL you find the tallest building
        //once tallest building is found, it will be switched to true
        let tallestBuilding = false

        //this loop starts at one because it will need to stay before the position of the 
        //current building. It needs to stay before current building to properly compare
        //which building is taller. That is why the middle condition is 
        // previousBuilding < currentBuilding
        for (let previousBuilding = 0; previousBuilding < currentBuilding; previousBuilding++) {
            
            //if any of the previous building are taller than the building that is currently being compared with,
            //then change the bool to true  
            if(buildingsArray[previousBuilding] >= buildingsArray[currentBuilding]){
                tallest = true;
                break;
            }else
                continue;
               
        }        
    }
    
    //
    if(tallestBuilding == false)
        sunsetOrder.push("")
    else
        sunsetOrder.push("")
    
    results = sunsetOrder.join("");
    document.getElementById("results").innerHTML = `${results}`;
}



function displayResults(){

    //since the sunset is in the west, no mattter what, the first building (located in the west)
    //will always see the sunset
    let results = ["Building 1 will see the sunset"]



}


function JasonsFunction(){
    let maxHeight;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }
}