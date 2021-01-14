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

    //loop over the array 
    for (let i = 0; i < buildingsArray.length; i++) {
        
        
    }

    


}



function displayResults(){

    let results = ["Building 1 will see the sunset"]


}