export const reducer = (state,action) => {
       switch(action.type){
         case "ADD_PRODUCTS":
                return {...state,products:action.payload}
         case "ADD_CATEGORIES":
                return {...state,categories:action.payload}       
       }
}
