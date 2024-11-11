document.body.append(document.createElement('textarea'))
document.body.append(document.createElement('div'))
document.body.append(document.createElement('button'))



document.querySelector('button').addEventListener('click', function () {
    const text = document.querySelector('textarea').value
    // console.log(text);
    const textArray = text.split('\n')
    // console.log(textArray);
    const additedArray = []
    for (const el of textArray) {
        if (el.length > 1) {
            const elTrimSplit = el.trim().toLowerCase().split('_')
            console.log(elTrimSplit[0] + elTrimSplit[1][0].toUpperCase() + elTrimSplit[1].slice[1]);
        }

    }

})
