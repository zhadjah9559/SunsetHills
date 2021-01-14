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
    //create an array variable that will act as a stack that will keep track of the tallest building
    let buildingsArray = [building1, building2, building3,building4,building5]

    


}



function displayResults(){

}