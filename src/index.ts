import * as Realm from 'realm';

const CarSchema = {
  name: 'Car',
  properties: {
    make:  'string',
    model: 'string',
    miles: {type: 'int', default: 0},
  }
};

let realm = new Realm({schema: [CarSchema]});

realm.write(() => {
  let car = realm.create('Car', {
    make: 'Honda',
    model: 'Civic',
    miles: 750,
  });
  car.miles = 1500;
});


