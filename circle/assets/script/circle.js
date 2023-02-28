
        $( "#CircleForm" ).validate({

        });
        
        function displayCircle() {
            // if the form is valid, then make the calculations
            if ($("#CircleForm").valid()) {
        
                // clear out any old calculation
                
                 document.getElementById("diameter").innerHTML = "";
                 document.getElementById("circumference").innerHTML = "";
                 document.getElementById("area").innerHTML = "";

                 var radius; // string representation of the radius
                 var radiusfp; // floating point value of radius
                 var diameter;  // floating point diameter
                 var circumference;  // floating point circumference
                 var area;  // floating point area
                 var result; // displayable result

                 // read in the legs as a string
                 radius = document.getElementById("radius").value;
                 
                 

                 // Convert numbers from strings to Floating Point
                 radiusfp = parseFloat(radius); 

                 // calculate the diameter
                 diameter = calcDiameter(radius);
                document.getElementById("diameter").innerHTML = diameter.toString()
                  
                circumference = calcCircumference (radius);
                document.getElementById("circumference").innerHTML = circumference.toString()
                 
                  area= calcArea (radius);
                  document.getElementById("area").innerHTML = area.toString() 
            }
        }

          function calcDiameter (radius)
          // returns the diameter
          // 2 times the radius
          {
              return 2 * radius;
          }

          function calcCircumference (radius)
          {
            return 2 * radius * Math.PI;

          }

          function calcArea (radius)
          {
            return Math.PI * (radius * radius);
          }
          
          function clearForm()
        {
            document.getElementById("radius").value = "";
            document.getElementById("radiuserror").innerHTML = "";
            document.getElementById("diameter").value = "";
            document.getElementById("circumference").innerHTML = "";
            document.getElementById("area").innerHTML = "";
            document.getElementById("hypotenuse").innerHTML = "";
        }
        