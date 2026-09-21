let validity_messages = {}
if (  typeof ERROR_MESSAGES === 'undefined' || ERROR_MESSAGES === null ){
    validity_messages = {
        FORM_ERROR_DEFAULT_FIELD: "Данное поле не заполнено или заполнено неверно",
        FORM_ERROR_MISSING_FIELD: "Не существует поля такого типа",
        FORM_ERROR_FILE_TO_LARGE: "Файл слишком большой",
        FORM_ERROR_FILE_INVALID_FORMAT: "Недопустимый формат файла",
        FORM_ERROR_REQUIRED_FIELD: "Данное поле обязательно к заполнению",
        FORM_ERROR_WRONG_FIELD_DATA: "Проверьте правильность заполнения поля"
    }
} else {
    validity_messages = {...ERROR_MESSAGES}
}

/* Input Type File */

function returnFileSize(number) {
    if (number < 1024) {
        return `${number} bytes`;
    } else if (number >= 1024 && number < 1048576) {
        return `${(number / 1024).toFixed(1)} KB`;
    } else if (number >= 1048576) {
        return `${(number / 1048576).toFixed(1)} MB`;
    }
}

let validateFileType = (file, type_f) => {
    return type_f.includes(file.type);
}

let removeFileFromFileList = (input, index) => {
    const dt = new DataTransfer()
    const { files } = input

    for (let i = 0; i < files.length; i++) {
        const file = files[i]
        if (index !== i)
            dt.items.add(file)
    }

    input.files = dt.files
}

let makeFileList = (input, dataTransfer_files) => {
    input.files = dataTransfer_files
}

let checkFileInput = ( file_input, files_transfered ) => {
    let parent_container = file_input.closest('.form--input')
    let file_output_wrapper = parent_container.querySelector('.form--input_file--items')
    let input_max_size = parseInt(file_input.dataset.maxsize)
    let valid_file_types = file_input.accept.split(',')
    file_input.files = files_transfered
    let files = Array.from(files_transfered)

    files.forEach(f => {
        let file_output = document.createElement('div')
        file_output.classList.add('form--input_file--items_loaded')
        let file_name = document.createElement('p')
        file_output.appendChild(file_name)
        file_name.textContent = f.name ;
        file_output_wrapper.appendChild(file_output)

        /* Удаление файлов */
        let delete_file_button = document.createElement('div')
        delete_file_button.classList.add('form--input_file--items_delete')

        delete_file_button.addEventListener('click', (e)=>{
            e.stopPropagation()
            file_output.remove()
            removeFileFromFileList(file_input, files.indexOf(f))
        })

        file_output.appendChild(delete_file_button)

        setTimeout(()=>{
            file_output.classList.add('loaded')
            let error_message = document.createElement('p')
            error_message.classList.add('form--input_file--items_hint')
            file_output.appendChild(error_message)

            /* Валидация размера файлов */
            if ( f.size > input_max_size){
                file_output.classList.add('error')
                error_message.textContent = validity_messages.FORM_ERROR_FILE_TO_LARGE
            } else if ( !validateFileType(f, valid_file_types) ) {
                file_output.classList.add('error')
                error_message.textContent = validity_messages.FORM_ERROR_FILE_INVALID_FORMAT
            } else if ( f.size <= input_max_size && validateFileType(f, valid_file_types)){
                file_output.classList.remove('error')
                error_message.textContent =  returnFileSize(f.size)
            }

        }, 1200)

    })

}

let activateFileInput = (block) =>{
    let file_inputs = block.querySelectorAll('.js-input_file')

    file_inputs.forEach(i => {
        i.addEventListener("dragenter", (e)=> {
            e.preventDefault()
        })
        i.addEventListener("dragover", (e)=> {
            e.preventDefault()
        })
        i.addEventListener("dragleave", (e)=> {
            e.preventDefault()
        })
        i.addEventListener("drop", (e)=> {
            e.preventDefault()
            checkFileInput( i, e.dataTransfer.files )
        })
        i.addEventListener("change", ()=> {
            checkFileInput( i, i.files )
        })
    })
}
activateFileInput(document)
