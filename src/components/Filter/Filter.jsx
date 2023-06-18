import PropTypes from 'prop-types';
import {
  FilterWrapper,
  FilterLabel,
  FilterInput,
  SearchIcon,
} from './Filter.styled';
import sprite from '../../img/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { updateFilter } from 'redux/filterSlice';

const searchIcon = `${sprite}#icon-search`;

export const Filter = ({ onChange }) => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilter = ({ currentTarget: { value } }) => {
    dispatch(updateFilter(value));
  };

  return (
    <FilterWrapper>
      <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        onChange={handleFilter}
        value={filter}
        name="filter"
        placeholder="Search"
        id="filter"
      />
      <SearchIcon width="32" height="32">
        <use href={searchIcon}></use>
      </SearchIcon>
    </FilterWrapper>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
};
