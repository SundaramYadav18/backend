//const math=require('./calculator.js');//->CJS;
//import  {add,subtract} from './calculator.js';//->ESM;
import *as math from './calculator.js';
console.log(math.add(2,3));
console.log(math.subtract(5,3));