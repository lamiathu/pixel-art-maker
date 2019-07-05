

const $tableElement = $('#pixelCanvas');
const $inputHeight = $('#inputHeight');
const $inputWidth = $('#inputWidth');
const $colorPicker = $('#colorPicker');

$('#sizePicker').submit( event => {
    event.preventDefault();

    let wideness = $inputWidth.val();
    let height = $inputHeight.val();

    $tableElement.html(''); // clear
    
// calling the functions
    makeGrid(height, wideness);
    addCellClickListener();
});
//this function bulids the grid according to the size the user entered
function makeGrid(height, wideness) {
    for(let i = 0; i < height; i++) {
        $tableElement.append('<tr></tr>');
    };

    for(let j = 0; j< wideness; j++) {
        $('tr').append('<td></td>');
    };
};
 // Add click event to grid cells
function addCellClickListener() {
    $('td').click( event => {
        let color = $colorPicker.val();
        $(event.currentTarget).css("background-color", color)
    });
};
