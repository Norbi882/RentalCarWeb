const cars = [{
        model: 'AUDI A4',
        power: '190 KM',
        engine: 'Benzyna 2.0L',
        gearbox: 'Automatyczna',
        price: '219 zł/dzień',
    },
    {
        model: 'AUDI A8',
        power: '286 KM',
        engine: 'Diesel 3.0L',
        gearbox: 'Automatyczna',
        price: '799 zł/dzień',
    },
    {
        model: 'AUDI RS3',
        power: '367 KM',
        engine: 'Benzyna 2.5L',
        gearbox: 'Automatyczna',
        price: '549 zł/dzień',
    },
    {
        model: 'AUDI RS6',
        power: '605 KM',
        engine: 'Benzyna 4.0L',
        gearbox: 'Automatyczna',
        price: '1199 zł/dzień',
    },
    {
        model: 'BMW M2',
        power: '370 KM',
        engine: 'Benzyna 3.0L',
        gearbox: 'Automatyczna',
        price: '499 zł/dzień',
    },
    {
        model: 'BMW M3',
        power: '450 KM',
        engine: 'Benzyna 3.0L',
        gearbox: 'Automatyczna',
        price: '699 zł/dzień',
    },
    {
        model: 'BMW M4',
        power: '431 KM',
        engine: 'Benzyna 3.0L',
        gearbox: 'Automatyczna',
        price: '499 zł/dzień',
    },
    {
        model: 'BMW X5',
        power: '340 KM',
        engine: 'Benzyna 3.0L',
        gearbox: 'Automatyczna',
        price: '599 zł/dzień',
    },
    {
        model: 'BMW I8',
        power: '362 KM',
        engine: 'Hybryda 1.5L',
        gearbox: 'Automatyczna',
        price: '1199 zł/dzień',
    },
    {
        model: 'MERCEDES A200',
        power: '163 KM',
        engine: 'Benzyna 1.4L',
        gearbox: 'Automatyczna',
        price: '199 zł/dzień',
    },
    {
        model: 'MERCEDES A35 AMG',
        power: '306 KM',
        engine: 'Benzyna 2.0L',
        gearbox: 'Automatyczna',
        price: '449 zł/dzień',
    },
    {
        model: 'MERCEDES GT 43 AMG',
        power: '367 KM',
        engine: 'Benzyna 3.0L',
        gearbox: 'Automatyczna',
        price: '999 zł/dzień',
    },
    {
        model: 'MERCEDES C 63S AMG COUPE',
        power: '510 KM',
        engine: 'Benzyna 4.0L',
        gearbox: 'Automatyczna',
        price: '999 zł/dzień',
    },
    {
        model: 'MERCEDES E63S AMG',
        power: '612 KM',
        engine: 'Benzyna 4.0L',
        gearbox: 'Automatyczna',
        price: '1199 zł/dzień',
    },
    {
        model: 'PORSCHE BOXSTER 718',
        power: '300 KM',
        engine: 'Benzyna 2.0L',
        gearbox: 'Automatyczna',
        price: '599 zł/dzień',
    },
    {
        model: 'PORSCHE CAYMAN S',
        power: '325 KM',
        engine: 'Benzyna 3.4L',
        gearbox: 'Automatyczna',
        price: '499 zł/dzień',
    },
    {
        model: 'PORSCHE MACAN',
        power: '245 KM',
        engine: 'Benzyna 2.0L',
        gearbox: 'Automatyczna',
        price: '399 zł/dzień',
    },
    {
        model: 'PORSCHE PANAMERA 4S',
        power: '440 KM',
        engine: 'Benzyna 3.0L',
        gearbox: 'Automatyczna',
        price: '999 zł/dzień',
    },
    {
        model: 'FORD MUSTANG GT',
        power: '450 KM',
        engine: 'Benzyna 5.0L',
        gearbox: 'Automatyczna',
        price: '449 zł/dzień',
    },
    {
        model: 'LAMBORGHINI HURACAN',
        power: '640 KM',
        engine: 'Benzyna 5.2L',
        gearbox: 'Automatyczna',
        price: '3499 zł/dzień',
    },
    {
        model: 'MCLAREN 600 LT',
        power: '600 KM',
        engine: 'Benzyna 3.8L',
        gearbox: 'Automatyczna',
        price: '3499 zł/dzień',
    },
    {
        model: 'MINI CLUBMAN SD',
        power: '190 KM',
        engine: 'Benzyna 2.0L',
        gearbox: 'Automatyczna',
        price: '249 zł/dzień',
    },
    {
        model: 'NISSAN GTR',
        power: '570 KM',
        engine: 'Benzyna 3.8L',
        gearbox: 'Automatyczna',
        price: '1229 zł/dzień',
    },
    {
        model: 'VOLKSWAGEN TOUAREG V6',
        power: '286 KM',
        engine: 'Diesel 3.0L V6',
        gearbox: 'Automatyczna',
        price: '349 zł/dzień',
    }
];

var headers = [
    'Moc',
    'Silnik',
    'Skrzynia biegów'
];

var modelsOnPage = [
    'AUDI',
    'BMW',
    'MERCEDES',
    'PORSCHE'
];

function displayTable(id, carCategory) {
    carCategory = carCategory.toUpperCase();

    var models = cars.filter((car) => {
        if (carCategory === '!!!') {
            var exist = false;
            for (i = 0; i < modelsOnPage.length; i++) {
                if (car.model.search(modelsOnPage[i]) != -1)
                    exist = true;
            }
            if (exist == false)
                return car;
        } else {
            if (car.model.search(carCategory) != -1) {
                return car;
            }
        }
    });
    var content = '';
    if (models.length != 0) {
        content += `<table>`;
        for (i = 0; i < models.length; i++) {
            content += `<tr><th rowspan="2">${models[i].model}</th>`;
            for (j = 0; j < headers.length; j++)
                content += `<td>${headers[j]}</td>`;
            content += `<th rowspan="2">${models[i].price}</th></tr>`;

            content += `<tr>`;
            content += `<td>${models[i].power}</td>`;
            content += `<td>${models[i].engine}</td>`;
            content += `<td>${models[i].gearbox}</td>`;
            content += `</tr>`;
        }
        content += `</table>`;
    } else {
        content = 'Brak wyszukań';
    }
    document.getElementById(id).innerHTML = content;
}