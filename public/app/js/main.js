import Human from '/human';
import Humans from '/humans';

class Application {

  constructor () {
    $("h1").html("E6 rocks!")

    var bob = new Human({id: 1, firstName:'Bob', lastName:'Morane'});
    var john = new Human({id: 2, firstName:'John', lastName:'Doe'});

    var humans = new Humans();

    humans.add(bob);
    humans.add(john);

    $("ul").html(humans.models.reduce(function(previous, current) {

      return previous + `
        <li>${current.id} ${current.firstName} ${current.lastName}</li>
      `;
    },""));

  }
}

$(() => {
  new Application();
});