document.addEventListener('DOMContentLoaded', () => {

  var color_form = document.getElementById("color-form")
  let canvas = document.getElementById("canvas")
  let context = canvas.getContext('2d')
  const palette = document.querySelector('#palette')
  const brushWidth = document.querySelector('#brush-width')
  const eraser = document.querySelector('#eraser')
  let eraseOn = false

  paper.install(window);
  window.onload = function() {
    paper.setup(canvas);
    // Create a simple drawing tool:
    var tool = new Tool();
    let path = new Path();
    let color = black;
    let strokeWidth = 1
    path.strokeColor = color
    brushWidth.innerText = path.strokeWidth

    // Define a mousedown and mousedrag handler

    tool.onMouseDown = function (event) {
      path = new Path();
      path.strokeColor = color
      path.strokeWidth = strokeWidth

      // path.strokeColor = 'black';
      path.add(event.point);

      console.log(path)
    }
    tool.onMouseDrag = function (event) {
      path.add(event.point);
    }

    tool.onMouseUp = function () {
      path = null
    }

    palette.addEventListener('click', (e) => {
      if (e.target.className === "color"){
        color = e.target.id
        path.strokeColor = color
        console.log(path)
      }
    })

    eraser.addEventListener('click', () => {
      strokeWidth = 5;
      color = "white";
      eraserOn = true
      brushWidth.innerText = strokeWidth
    })
    

    // color_form.addEventListener('submit', (event) => {
    //   let selected_color = document.getElementById("selected-color")
    //   event.preventDefault();
    //   path.strokeColor = selected_color.value
    // })

    let increase_width_button = document.getElementById("increase-width-button")
    increase_width_button.addEventListener('click', () => {
      strokeWidth++
      brushWidth.innerText = strokeWidth
    })

    let decrease_width_button = document.getElementById("decrease-width-button")
    decrease_width_button.addEventListener('click',() => {
      strokeWidth--
      brushWidth.innerText = strokeWidth
    })
  }
})
