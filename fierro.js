(function() {
   var pariente = function() { };
   
   pariente.arre = function() { return 'Arre!'; }
   pariente.fierro = function() { return 'Fierro pariente!'; };
   pariente.ceroMiedo = function() { return 'Cero miedo mi compa!'; };
   pariente.noLoHaga = function() { return 'No lo  haga compa'; };
   
   if (typeof module !== 'undefined' && module.exports) {
       module.exports = pariente;
   } else if(typeof define === 'function' && define.amd) {
       define(pariente);
   } else if(window) {
       window.pariente = pariente;
   }
}());
