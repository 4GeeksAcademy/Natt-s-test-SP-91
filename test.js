//importamos funcion sum
const { sum } = require('./app.js');


//primera prueba
test('mensaje:sum 14 + 9 equal to 23', ()=>{
//suma de los numeros funcion sum
let total=sum(14,9);
//esperamos que la suma sea 23
expect(total).toBe(23);    

});

test('segundo test ******', ()=>{
    let total = sum (-4,4)
    expect(total).toBe(0);   

});

//Pruebas conversion divisas

test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5).toFixed(2)
    const expected = (3.5 * 1.07).toFixed(2)
    expect(dollars).toBe(expected);
});

test('Conversion from USD to JPY', () => {
    const { fromDollarToYen } = require('./app.js');
    const yen = fromDollarToYen(10); 
    const expected = (10 / 1.07) * 156.5; 
    expect(yen).toBeCloseTo(expected, 2); 
});

test('Conversion from JPY to GBP', () => {
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(1565); // Convierte 1565 JPY a GBP
    const expected = (1565 / 156.5) * 0.87; // Resultado esperado
    expect(pounds).toBeCloseTo(expected, 2); // Compara con 2 decimales
});