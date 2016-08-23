var app = angular.module("AngularReal", []);
app.filter('real', function() {
    return function(number) {
        if (isNaN(number)) {
            console.error("Erro ao formatar valor para moeda real. O valor passado pode não ser um número.");
            return number;
        } else {
            if (number == undefined || number == null)
                return 'R$0,00';
            var strNumber = number.toString();
            var parts = strNumber.split(".");
            if (parts.length == 1)
                parts.push("00");
            else if (parts.length == 2) {
                if (parts[1].length == 0)
                    parts[1] += "00"
                else if (parts[1].length < 2)
                    parts[1] += "0"
                else if (parts[1].length > 2)
                    parts[1] = parts[1].splice(2, parts[1].length - 2)
            }
            var max = parts[0].length;
            for (var i = 0; i < max && parts[0].split('')[0] == "0"; i++) {
                parts[0] = parts[0].replace("0","");
            }
            var result = [];
            var integerPart = parts[0].split('');
            if (integerPart.length > 3) {
                var cont = integerPart.length - (Math.trunc(integerPart.length / 3) * 3);
                for (var i = 0; i < integerPart.length; i++) {
                    if (cont == 0) {
                        result.push('.');
                        cont = 3;
                    }
                    result.push(integerPart[i]);
                    cont--;
                }
                if (result[0] == ".")
                    result.splice(0, 1);
                result = result.toString().split(",").join("");
            } else result = parts[0];
            result = result == "" ? "0" : result;
            return 'R$' + result + "," + parts[1];
        }
    }
});
