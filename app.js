const millimeter = document.getElementById('millimeter')
const centimeter = document.getElementById('centimeter')
const meter = document.getElementById('meter')
const kilometer = document.getElementById('kilometer')
const mile = document.getElementById('mile')
const yard = document.getElementById('yard')
const feet = document.getElementById('feet')
const inch = document.getElementById('inch')

const emptyAllfields = () => {
    millimeter.value = centimeter.value = meter.value = kilometer.value = mile.value = yard.value = feet.value = inch.value = ""
}

millimeter.addEventListener('input', function () {
    inputvalue = millimeter.value
    if (inputvalue === "") {
        emptyAllfields()
    } else {
        centimeter.value = this.inputvalue / 10
        meter.value = inputvalue / 1000
        kilometer.value = inputvalue / Math.pow(10, 6)
        mile.value = imputvalue / Math.pow(1.609, 6)
        yard.value = inputvalue / 914
        feet.value = inputvalue / 305
        inch.value = inputvalue / 25.4
    }

})
centimeter.addEventListener('input', function () {
    inputvalue = centimeter.value
    if (inputvalue === "") {
        emptyAllfields()
    } else {
        millimeter.value = inputvalue * 10
        meter.value = inputvalue / 100
        kilometer.value = inputvalue / Math.pow(10, 5)
        mile.value = inputvalue / 160934
        yard.value = inputvalue / 91.44
        feet.value = inputvalue / 30.48
        inch.value = inputvalue / 2.54

    }
})

meter.addEventListener('input', function () {
    inputvalue = meter.value
    if (inputvalue === "") {
        emptyAllfields()
    } else {
        millimeter.value = inputvalue * 1000
        centimeter.value = inputvalue * 100
        kilometer.value = inputvalue / 1000
        mile.value = inputvalue / 1609
        yard.value = inputvalue * 1.094
        feet.value = inputvalue * 3.281
        inch.value = inputvalue * 39.37

    }
})

kilometer.addEventListener('input', function () {
    inputvalue = kilometer.value
    if (inputvalue === '') {
        emptyAllfields()
    } else {
        millimeter.value = inputvalue * Math.pow(10, 6)
        centimeter.value = inputvalue * Math.pow(10, 5)
        meter.value = inputvalue * 1000
        mile.value = inputvalue / 1.609
        yard.value = inputvalue * 1093.61
        feet.value = inputvalue * 3280.84
        inch.value = inputvalue * 39370
    }
})
mile.addEventListener('input', function () {
    inputvalue = mile.value
    if (inputvalue === '') {
        emptyAllfields()
    } else {
        millimeter.value = inputvalue * Math.pow(1.609, 6)
        centimeter.value = inputvalue * 160934.4
        meter.value = inputvalue * 1609.344
        kilometer.value = inputvalue * 1.609344
        yard.value = inputvalue * 1760
        feet.value = inputvalue * 5280
        inch.value = inputvalue * 633
    }
})

yard.addEventListener('input', function () {
    inputvalue = yard.value
    if (inputvalue === '') {
        emptyAllfields()
    } else {
        millimeter.value = inputvalue * 914.4
        centimeter.value = inputvalue * 91.44
        meter.value = inputvalue / 1.094
        kilometer.value = inputvalue / 1094
        mile.value = inputvalue / 1760
        feet.value = inputvalue * 3
        inch.value = inputvalue * 36
    }
})
feet.addEventListener('input', function () {
    inputvalue = feet.value
    if (inputvalue === '') {
        emptyAllfields()
    } else {
        millimeter.value = inputvalue * 304.8
        centimeter.value = inputvalue * 30.48
        meter.value = inputvalue / 3.281
        kilometer.value = inputvalue / 3281
        mile.value = inputvalue / 5280
        yard.value = inputvalue * 3
        inch.value = inputvalue * 12
    }
})
inch.addEventListener('input', function () {
    inputvalue = inch.value
    if (inputvalue === '') {
        emptyAllfields()
    } else {
        millimeter.value = inputvalue * 25.4
        centimeter.value = inputvalue * 2.54
        meter.value = inputvalue / 39.37
        kilometer.value = inputvalue / 39370
        mile.value = inputvalue / 63360
        yard.value = inputvalue * 36
        feet.value = inputvalue * 12
    }
})