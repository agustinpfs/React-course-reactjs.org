// code

///////////////////////////////////////////////////////////////


// React.Component:

class ShoppingList extends React.Component {
    render() {
      return (
        <div className="shopping-list">
          <h1>Lista de compras para {this.props.name}</h1>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
          </ul>
        </div>
      );
    }
  }
  
  // Uso de ejemplo: <ShoppingList name="Mark" />


//   Here, ShoppingList is a React component class, or React component type. A component takes in parameters, 
//   called props (short for “properties”), and returns a hierarchy of views to display via the render method.


