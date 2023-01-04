function Err () {
    images.createBigImage(`
        # # # . . . . . . .
        # . . . . . . . . .
        # # # . # # . # # .
        # . . . # . . # . .
        # # # . # . . # . .
        `).showImage(0)
    images.createBigImage(`
        # # # . . . . . . .
        # . . . . . . . . .
        # # # . # # . # # .
        # . . . # . . # . .
        # # # . # . . # . .
        `).showImage(1)
    images.createBigImage(`
        # # # . . . . . . .
        # . . . . . . . . .
        # # # . # # . # # .
        # . . . # . . # . .
        # # # . # . . # . .
        `).showImage(2)
    images.createBigImage(`
        # # # . . . . . . .
        # . . . . . . . . .
        # # # . # # . # # .
        # . . . # . . # . .
        # # # . # . . # . .
        `).showImage(3)
    images.createBigImage(`
        # # # . . . . . . .
        # . . . . . . . . .
        # # # . # # . # # .
        # . . . # . . # . .
        # # # . # . . # . .
        `).showImage(4)
    images.createBigImage(`
        . . . . . . . . . .
        . . . . . . . . . .
        # . # # . . . . . .
        . . # . . . . . . .
        . . # . . . . . . .
        `).showImage(0)
    images.createBigImage(`
        . . . . . . . . . .
        . . . . . . . . . .
        # . # # . . . . . .
        . . # . . . . . . .
        . . # . . . . . . .
        `).showImage(1)
    images.createBigImage(`
        . . . . . . . . . .
        . . . . . . . . . .
        # . # # . . . . . .
        . . # . . . . . . .
        . . # . . . . . . .
        `).showImage(2)
    images.createBigImage(`
        . . . . . . . . . .
        . . . . . . . . . .
        # . # # . . . . . .
        . . # . . . . . . .
        . . # . . . . . . .
        `).showImage(3)
    images.createBigImage(`
        . . . . . . . . . .
        . . . . . . . . . .
        # . # # . . . . . .
        . . # . . . . . . .
        . . # . . . . . . .
        `).showImage(4)
    images.createBigImage(`
        . . . . . . . . . .
        . . . . . . . . . .
        # . # # . . . . . .
        . . # . . . . . . .
        . . # . . . . . . .
        `).showImage(5)
}
datalogger.onLogFull(function () {
    basic.showString("Press A button to clear all data.")
})
input.onButtonPressed(Button.A, function () {
    datalogger.deleteLog(datalogger.DeleteType.Full)
})
datalogger.log(datalogger.createCV("E", 0))
Err()
basic.clearScreen()
basic.forever(function () {
	
})
