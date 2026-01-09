/**
 * Field function for: Unresolved 🅾️
 * Field name: Unresolved 🅾️
 * Field ID: 654245fac9a762197e96cea2
 */

interface Dependencies {
  Alt contact in auto reply: string;
  Computer returned: string;
  Credit Card Canceled: string;
  Email turned off: string;
  Hailer profile removed: string;
  Other company property returned: string;
}

export function unresolved__ea2(dep: Dependencies): any {
let output = '';
let iteration = 0;
const array =  [];

Object.values(dep).forEach(value => {
    if (value){
        if (value.toString().includes('🅾️') && !value.toString().includes('Unresolved')){
            iteration += 1;
        }
    }
    

})


return iteration;
}