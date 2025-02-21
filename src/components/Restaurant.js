const Restaurant = (props) => {
  return (
    <div>
      <h2>{props.restaurant.name}</h2>
      <ul>
        <li>{props.restaurant.address}</li>
        <li>{props.restaurant.phone}</li>
        <li>{props.restaurant.cuisine}</li>
        <li>{props.restaurant.rating}</li>
      </ul>

      <ul>
        <li>Hours:</li>
        <li>Monday: {props.restaurant.hours.monday}</li>
        <li>Tuesday: {props.restaurant.hours.tuesday}</li>
        <li>Wednesday: {props.restaurant.hours.wednesday}</li>
        <li>Thursday: {props.restaurant.hours.thursday}</li>
        <li>Friday: {props.restaurant.hours.friday}</li>
        <li>Saturday: {props.restaurant.hours.saturday}</li>
        <li>Sunday: {props.restaurant.hours.sunday}</li>
      </ul>

      <ul>
        <li>Menu:</li>
        <li>
          {props.restaurant.menu[0].item} - ${props.restaurant.menu[0].price}
        </li>
        <li>
          {props.restaurant.menu[1].item} - ${props.restaurant.menu[1].price}
        </li>
        <li>
          {props.restaurant.menu[2].item} - ${props.restaurant.menu[2].price}
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
