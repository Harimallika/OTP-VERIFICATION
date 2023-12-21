const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");

// console.log(inputs, button)

inputs.forEach((inputs, index1) => {
    inputs.addEventListener("keyup" , (e)=>{
        const currentInput = inputs,
        nextInput = inputs.nextElementSibling,
        prevInput = inputs.previousElementSibling;

        if(currentInput.value.length >1){
            currentInput.value= "";
            return;
        }
        if(nextInput && nextInput.hasAttribute("disabled") && currentInput.value!== ""){
            nextInput.removeAttribute("disabled");
            nextInput.focus();
        }
        if(e.key === "Backspace"){
            inputs.forEach((input , index2) => {

                if(index1 <= index2 && prevInput){
                    input.setAttribute("disabled", true);
                    currentInput.value = "";
                    prevInput.focus();
                }
            })
        }

        if(inputs[0].disabled && !inputs[3].value !== ""){
            button.classList.add("active");
            return;
        }
        button.classList.remove("active");
    });
});

window.addEventListener("load", () => inputs[0].focus());