
import PropTypes from 'prop-types';
import styles from "./Filter.module.css";

const Filter = ({ options = [] }) => {
  return (
    <ul className={styles.filter}>
      {options.map(({ id, title }) => (
        <li className={styles.filterItem} key={id}>
          <label className={styles.filterLabel} htmlFor={id}>
            {title}
          </label>
          <input
            className={styles.filterInput}
            name="filter"
            value={id}
            type="checkbox"
            id={id}
          />
        </li>
      ))}
    </ul>
  );
};

Filter.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};
export default Filter;
