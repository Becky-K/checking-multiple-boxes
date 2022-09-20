const checkboxes = document.querySelectorAll("input");


let lastChecked;
let inBetween = false;


const handleCheck = function(e){
    //check if they had the shift key down
    //AND check they are checking it
    if (e.shiftKey && this.checked) {
        //loop over every checkbox
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if(checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.group("Starting to check them inbetween")
            }

            if(inBetween) {
                checkbox.checked = true;
            }
        });

    }
    console.log(e);
    lastChecked = this;
};

checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck));