function NewDiv(container,gridValue) {
    for (let i=gridValue; i > 0; i--) {
        for (let j = gridValue; j > 0; j--) {
            const div = document.createElement('div');
            container.appendChild(div);
        }
        
    }
}