const initialstate = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

export const reducer = (state = initialstate, action) =>{
    switch(action.type){
        case("REMOVE_FEATURE"):
            return{...state,
            features: state.features.filter(feat=>{
                if(action.payload.id !== feat.id){
                    return feat
                }
            }),
            additionalPrice: state.additionalPrice - action.payload.price
            }
        case("ADD_FEATURE"):
            return{...state,
                additionalPrice: state.additionalPrice + action.payload.price,
                features: [...state.features, action.payload],
                additionalFeatures: state.additionalFeatures.filter(feat=>{
                    if(action.payload.id !== feat.id){
                        return feat
                    }
                })
            }
        default: return{...state}
    }
}