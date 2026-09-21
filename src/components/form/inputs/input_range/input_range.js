
/* Input Type Range  */
let activateRangeInputs = ( block ) => {
    let range_inputs = block.querySelectorAll('.range')

    range_inputs.forEach( (range, index) => {

        let input_start = range.querySelector('input[data-range-start]')
        let input_end = range.querySelector('input[data-range-end]')

        input_start.id = 'range_start_id_' + index
        input_start.nextElementSibling.setAttribute('for', input_start.id)
        input_end.id = 'range_end_id_' + index
        input_end.nextElementSibling.setAttribute('for', input_end.id)


        range.style.setProperty(`--a`, +input_start.value)
        range.style.setProperty(`--b`, +input_end.value)
        range.style.setProperty(`--min`, +input_end.min)
        range.style.setProperty(`--max`, +input_end.max)


        input_end.addEventListener('input', (e)=>{
            if ( input_end.valueAsNumber < input_start.valueAsNumber ){
                input_end.value = input_start.value
            }
            range.style.setProperty(`--b`, +input_end.value)
        })

        input_start.addEventListener('input', (e)=>{
            if ( input_start.valueAsNumber > input_end.valueAsNumber ){
                input_start.value = input_end.value
            }
            range.style.setProperty(`--a`, +input_start.value)
        })

    })

}