document.addEventListener('click', event => {
    if (event.target.dataset.type === 'remove') {
        const id = event.target.dataset.id

        remove(id).then(() => {
            event.target.closest('li').remove()
        })
    }
    if (event.target.dataset.type === 'refactor') {
        const id = event.target.dataset.id

        refactor(id ).then(() => {
            event.target.closest('li').refactor()
        })
    }
})


async function remove(id) {
    await fetch(`/${id}`, {method: 'DELETE'})
}
async function refactor (id){
    await prompt(`/${id}`, {method: 'EDIT'})
}