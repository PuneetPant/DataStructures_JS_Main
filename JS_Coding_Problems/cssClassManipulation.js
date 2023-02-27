/**
 * @param {string} selector
 * @return {{toggleClass: Function, addClass: Function, removeClass: Function}}
 */
 export default function $(selector) {
  const element = document.querySelector(selector);
  return {
    /**
     * @param {string} className
     * @param {boolean} state
     * @return {Object|void}
     */
    toggleClass: function (className, state) {
      if (element == null) {
        return undefined;
      }
      console.log("toggle: ",element, className, state);
      let appliedClassesArr = element.className.trim().split(" ");
      appliedClassesArr = appliedClassesArr.filter(ele => {
        return ele != "";
      })
      let classNameArr = className.trim().split(" ");
      classNameArr = classNameArr.filter(ele => {
        return ele != "";
      })
      console.log("appliedClassesArr: ", appliedClassesArr)
      console.log("classNameArr: ", classNameArr);
      element.className = "";
      if(state === undefined){
        for(let val of classNameArr){
          if(!appliedClassesArr.includes(val)){
            appliedClassesArr.push(val);
          } else{
            const index = appliedClassesArr.indexOf(val);
            appliedClassesArr.splice(index, 1);
          }
        }
        
      } else if(state == true){
        for(let val of classNameArr){
          if(!appliedClassesArr.includes(val)){
            appliedClassesArr.push(val);
          } 
        }
      } else{
        for(let val of classNameArr){
          if(appliedClassesArr.includes(val)){
            const index = appliedClassesArr.indexOf(val);
            appliedClassesArr.splice(index, 1);
          }
        }
      }
      element.className = appliedClassesArr.join(" ");
      console.log("element", element)
      return this;
    },
    /**
     * @param {string} className
     * @return {Object}
     */
    addClass: function (className) {
      this.toggleClass(className, true);
      return this;
    },
    /**
     * @param {string} className
     * @return {Object}
     */
    removeClass: function (className) {
      this.toggleClass(className, true);
      return this;
    },
  };
}