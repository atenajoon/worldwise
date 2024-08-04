import styles from './CityItem.module.css';

function CityItem(city, key) {
  return (
    <li className={styles.cityItem} key={key}>
      <span>{city.emoji}</span>
      <span>{city.cityName}</span>
    </li>
  );
}

export default CityItem;
