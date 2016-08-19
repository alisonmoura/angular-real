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
            for (var i = parts[0].split('').length, j = 0; i >= 0; i--, j++) {
                if (j % 4 == 0 && j > 0) {
                    var numberArr = parts[0].split('');
                    numberArr.splice(i + 1, 0, ".");
                    numberArr = numberArr.toString().split(",").join("");
                    parts[0] = numberArr;
                }
            }
            return 'R$' + parts[0] + "," + parts[1];
        }
    }
});
