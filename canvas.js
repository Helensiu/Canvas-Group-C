    // JavaScript code for drawing on the canvas and handling functionality
    let canvasReal = document.getElementById('canvas-real');
    let ctxReal = canvasReal.getContext('2d');
    let canvasDraft = document.getElementById('canvas-draft');
    let ctxDraft = canvasDraft.getContext('2d');


    // Add event listeners for mouse actions
    let isDrawing = false;
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    context.fillRect(100, 0, 100, 200)

    