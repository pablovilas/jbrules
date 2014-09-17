JBRules
=====

## What is JBRules?

JBRules is a simple forward chaining Business Rules Engine (BRE)

## JSON Rules 

JBRules uses JSON rules. Rules consist of a descriptive name, one or more conditions and one or more consequences.
JBRules allows for very expressive rules, take for example the following:

    {
      "name": "Say hello to Pablo",
      "condition": 
        function(name) {
          return name == "Pablo";
        }
      ,
      "consequence": 
        function(name) {
          console.log("Hello " + name);
        }
    }

Provided the following fact, the rule would output "Hello Pablo" to the console:

    {
      "name": "Pablo",
      "email": "pablovilas89@gmail.com"
    }

## Credits

The rules syntax used in this module is based on the node module [jools](https://github.com/tdegrunt/jools) but the rule engine logic was been written from scrath
