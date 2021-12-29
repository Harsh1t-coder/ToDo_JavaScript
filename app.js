let input = prompt("What would like to do")
let todo = ['sad']
while(input !== 'quit')
{
    input = prompt("What would like to do")
    if(input =='new'){
        let input_item = prompt('Enter the task')
        todo.push(input_item)
        console.log(input_item)
    }
    else if(input =='list'){
        let sum =0
        console.log('************')
        for(let x of todo)
        {
            sum+=1
            console.log(`${sum}: ${x}`)
        }
    }
    else if(input =='delete'){
        let item_index = prompt("Enter the task number you want to remove");
        item_index-=1
        parseInt(item_index)
        if(!Number.isNaN(item_index)){
            const delx = todo.splice(item_index,1)
            console.log(`Deleted task is ${delx}`)
        }
        else{
            console.log('Index is invalid')
        }
    }
    
}
console.log("You quit the app!")