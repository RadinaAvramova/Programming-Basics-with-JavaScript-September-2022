function changeBureau(input) {
    let bitcoin = Number(input.shift());
    let yuan = Number(input.shift());
    let comission = Number(input.shift());

    comission = comission * 0.01

    let alleuro = (yuan * 0.15 * 1.76 + bitcoin * 1168) / 1.95
    let charge = alleuro * comission
    let result = alleuro - charge
    console.log(result.toFixed(2))
}

changeBureau(["1","5","5"]);
