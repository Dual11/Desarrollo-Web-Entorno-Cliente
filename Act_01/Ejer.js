

    var ask = "CUANTO ES 5 + 5 ? ";
        var num1 = 5;
        var num2 = 5;
        var result = "SABES SUMAR ";

        //Espacios en blanco JS
        var   a = 1;
        
        function sum(){
            //alert(ask);
            //alert(num1 + num2);
            //alert(result);
            //alert(a);
        }
        sum();


        // --- TEMA 2 ---
        /*
        Ejer 1

        let entero = 1257;
        alert ("Numero entero " + entero );

        let decimal = 135.7;
        alert("Numero decimal" + decimal);

        let cientifico = 135e7;
        alert("Numero cientifico " + cientifico);
        
        let octal = O1357;
        alert("Numero octal " + octal);

        let hexa = 0x1357;
        alert("Numero hexadecimal " + hexa);
        */

        /*
        Ejer 2

        let nombre = "alex";
        let edad = 26;
        let apellido = "Tobar";
        let año = 1998;

        let all = nombre + edad + apellido + año;
        alert("Todo junto " + all);
        alert ( "Nombre y apellido " + "\n" + nombre + "\n" + apellido);
        let sumaAge = (edad + año);
        
        alert("Suma de edad y año " + sumaAge);
        */

        /*
        Ejer 3
        
        var opt = (10 == 10);
        alert("La operación 10 == 10 → " + opt);
        

        var opt = (10 === 10);
        alert("La operación 10 === 10 → " + opt);

        var opt = (10 === 10.0);
        alert("La operación 10 === 10.0 → " + opt);

        var opt = ("Laura" == "laura");
        alert('La operación "Laura" == "laura" → ' + opt);

        var opt = ("Laura" > "laura");
        alert('La operación "Laura" > "laura" → ' + opt);

        var opt = ("Laura" < "laura");
        alert('La operación "Laura" < "laura" → ' + opt);

        var opt = ("123" == 123);
        alert('La operación "123" == 123 → ' + opt);

        var opt = ("123" === 123);
        alert('La operación "123" === 123 → ' + opt);

        var opt = (parseInt("123") === 123);
        alert('La operación parseInt("123") === 123 → ' + opt);
         */

        
        /*
        Ejer 4
         */

        function option(){

            const input = document.getElementById('edad').value;

            if(isNaN(input)){

                alert("Numero negativo");

            }
            else if(input >= 0 && input <= 12){

                alert("0-12 --> Niño");

            }else if(input >= 13 && input <= 26){

                
                alert("13-26 --> Joven");

            }else if(input >= 26 && input <= 60){

                alert("26-60 --> Adulto")
            }
            else{
                alert(">60 Jubilado ");
            }
        }


        /*
        Ejer 5
        no se porque no puedo llamarlo desde aqui
         */
        let media = false;

        for(let hora = 9; hora <= 21; hora++){

            if(!media){

            document.write(hora + "00");
            media = true;

            }
            else{
                document.write(hora + "30");
                media = false;
            }
            

            if(hora === 21 && media === true){
                break;
            }

        }


        /*
        Ejer 6
        para los minutos
         */

        for(let hora = 9; hora <= 21; hora++){

            for(let min = 0; min <= 60;min + 5){

                document.write(hora + ":" + min + "<br>");
            }

            if(hora === 21){
                break
            }
            
        }

        /*
        Ejer 8
         */

        var ans_name;
        var ans_apellido;

        do{
            ans = prompt("Quien fue el presidente de la Democracia");

            if(ans_name === "Adolfo" || ans_apellido == "Suarez"){

                alert("Haz fallado ")

            }
        }while(ans_name != "Adolfo" && ans_apellido != "Suarez");
            document.write("donde")


        
        
        

        

