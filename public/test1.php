<?php
    function cats($n){
        if($n > 1 && $n < 100) {
            $print = "";
            for ($i=0; $i < $n; $i++) {
                $print .= str_repeat("#", $i + 1);
                $print .= "<br>";
            }
            return $print;
        } else {
            return "por favor introduce un numero en este rango";
        }
    }

    function pair($numbers){
        $n = $numbers[0];
        $length = $numbers[1];
        array_shift($numbers);
        array_shift($numbers);

        if (count($numbers) === $length) {
            foreach ($numbers as $value) {
                $numberToFind = $n - $value;
                $isInArray = in_array($numberToFind, $numbers);
                if ($isInArray) return 1;
            }
            return 0;
        } else {
            return "la cantidad de elementos del array con concuerda con el segundo elemento del array recibido";
        }
    }

    function figurasAmount($figs){
        $squares = 0;
        $rectangles = 0;
        $other = 0;

        foreach ($figs as $fig) {
            foreach ($fig as $side) {
                if ($side > 2000 || $side < -2000 || !is_int($side)) {
                    return "las longuitudes introducidas deben estar en  este rango -2000 <= X < = 2000 y deben ser numero entero";
                }
            }

            [$a, $b, $c, $d] = $fig;

            switch (true) {
                case ($a === $b && $b === $c && $c === $d):
                    $squares++;
                    break;

                case ($a === $c && $b === $d):
                    $rectangles++;
                    break;

                default:
                    $other++;
                    break;
            }
        }
        return "Cuadrados: $squares, Rectangulos: $rectangles, Otras Figuras: $other";
    }

    $numeros = array(66,10,18,11,21,28,31,38,40,55,60,62);
    $otherNumbers = array(48,10,18,11,21,28,31,38,40,55,60,62);
    $figuras = array(
        array(36,30,36,30),
        array(15,15,15,15),
        array(46,96,90,100),
        array(86,86,86,86),
        array(100,200,100,200),
        array(-100,200,-100,200),
    );

    // echo cats(5);
    // echo pair($numeros);
    // echo pair($otherNumbers);
    // echo figurasAmount($figuras);
?>
