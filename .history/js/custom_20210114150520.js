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

    //Loop starts at one because it will be the loop that is compared to all the 
    //previous buildings that are infront of it  
    for (let currentBuilding = 1; currentBuilding < buildingsArray.length; currentBuilding++) {

        //will be kept false UNTIL you find the tallest building
        //once tallest building is found, it will be switched to true
        let tallestBuilding = false

        //this loop starts 
        for (let previousBuilding = 0; previousBuilding < array.length; previousBuilding++) {
            const element = array[previousBuilding];
            
        }


        
    }

    


}



function displayResults(){

    //since the sunset is in the west, no mattter what, the first building (located in the west)
    //will always see the sunset
    let results = ["Building 1 will see the sunset"]


}