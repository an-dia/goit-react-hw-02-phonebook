import PropTypes from 'prop-types';
import shortid from 'shortid';
import s from './Filter.module.css';

const filterInputId = shortid.generate();
const Filter = ({ name, onChange }) => (
  <div className={s.filterWrapper}>
    <label className={s.label} htmlFor={filterInputId}>
      Find contacts by name
    </label>
    <input className={s.input} type="text" value={name} onChange={onChange} id={filterInputId} />
  </div>
);

Filter.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
