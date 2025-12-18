// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */
// Task 1
export function Size(width = 80, height = 60) {
  this.width = width
  this.height = height
}
Size.prototype.resize = function(newWidth, newHeight) {
  this.width = newWidth
  this.height = newHeight
}

// Task 2
export function Position(x = 0, y = 0) {
  this.x = x
  this.y = y
}

Position.prototype.move = function(newX, newY) {
  this.x = newX
  this.y = newY
}

// Task 3
export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600)
    this.size = new Size()
    this.position = new Position()
  }

  resize(size) {
    let width = Math.max(1, size.width)
    let height = Math.max(1, size.height)
    const maxWidth = this.screenSize.width - this.position.x
    const maxHeight = this.screenSize.height - this.position.y
    width = Math.min(maxWidth, width)
    height = Math.min(maxHeight, height)
    this.size.width = width
    this.size.height = height
  }

  move(position) {
    let x = Math.max(0, position.x)
    let y = Math.max(0, position.y)
    const maxX = this.screenSize.width - this.size.width
    const maxY = this.screenSize.height - this.size.height
    x = Math.min(x, maxX)
    y = Math.min(y, maxY)
    this.position.x = x
    this.position.y = y
  }
}

export function changeWindow(programWindow) {
  programWindow.resize(new Size(400, 300))
  programWindow.move(new Position(100, 150))
  return programWindow
}