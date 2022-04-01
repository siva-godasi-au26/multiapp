const button = document.getElementById('button')
const addquestion = document.getElementById('addquestion')

button.addEventListener('click',question)

function question(){
    const box = document.createElement('div')
    box.className='box'
    const div1 = document.createElement('div')
    const question = document.createElement('label')
    question.innerText = 'Question:'
    const questiontextarea = document.createElement('textarea')
    questiontextarea.placeholder = 'Any question here'
    div1.appendChild(question)
    div1.appendChild(questiontextarea)
    box.appendChild(div1)

    const div2 = document.createElement('div')
    const answer = document.createElement('label')
    answer.innerText = 'Answer:'
    const answertextarea = document.createElement('textarea')
    answertextarea.placeholder = 'Any answer here'
    div2.appendChild(answer)
    div2.appendChild(answertextarea)
    box.appendChild(div2)

    const ptag = document.createElement('p')
    const savebutton = document.createElement('button')
    savebutton.className = 'mainsave'
    savebutton.innerText='Save'
    ptag.appendChild(savebutton)

    const deletebutton = document.createElement('button')
    deletebutton.className='maindelete'
    deletebutton.innerHTML = 'Delete'
    ptag.appendChild(deletebutton)

    box.append(ptag)
    addquestion.appendChild(box)

    const header = document.createElement('header')
    header.className = 'header'

    savebutton.addEventListener('click',adddata)
    function adddata(){
        if(questiontextarea.value == '' && answertextarea.value==''){
            alert('before press the save button please enter question and answer')
        }else{
            const box2 = document.createElement('div')
            box2.className='box2'
            div3 =  document.createElement('div')
            div3.className='question'
            div3.innerHTML= questiontextarea.value
            showbutton = document.createElement('button')
            showbutton.className = 'showbutton'
            showbutton.innerHTML = 'show/Hide Answer'
            div4 =  document.createElement('div')
            div4.innerHTML = ''
            box2.appendChild(div3)
            box2.appendChild(showbutton)
            box2.appendChild(div4)

            const section = document.createElement('section')
            const editbutton = document.createElement('button')
            editbutton.className = 'edit'
            editbutton.innerText='Edit'
            section.appendChild(editbutton)
            box2.appendChild(section)

            const deletebutton2 = document.createElement('button')
            deletebutton2.className = 'subdelete'
            deletebutton2.innerText='Delete'
            section.appendChild(deletebutton2)
            box2.appendChild(section)
            header.appendChild(box2)
            addquestion.appendChild(header)


            x = questiontextarea.value
            y =answertextarea.value
            questiontextarea.value = ""
            answertextarea.value=""

            showbutton.addEventListener('click',showdata)
            function showdata(){
                div4.innerHTML = y
                showbutton.addEventListener('click',showdatas)
                function showdatas(){
                    div4.innerHTML = ' '
                    showbutton.addEventListener('click',showdatas)
                    function showdatas(){
                        div4.innerHTML = y
                        showbutton.addEventListener('click',showdatas)
                        function showdatas(){
                            div4.innerHTML = y
                        }
                    }
                }
            }
            

            deletebutton2.addEventListener('click',deletedata)
            function deletedata(){
                box2.remove()
            }

            editbutton.addEventListener('click',editdata)
            function editdata(){
                box2.remove()
                questiontextarea.value = x
                answertextarea.value = y

            }
        }
    }

    deletebutton.addEventListener('click',deletedata)
        function deletedata(){
            box.remove()
        }
}