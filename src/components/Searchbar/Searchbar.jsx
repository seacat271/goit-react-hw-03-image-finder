import { SearchbarBox, SearchForm, SearchFormButton, ButtonLabel, SearchFormInput } from "./Searchbar.styled";

const Searchbar = ({onSearchSubmit}) => {

  return (
    <SearchbarBox>
      <SearchForm
      onSubmit={onSearchSubmit}>
        <SearchFormButton 
        type="submit" 
        >
          <ButtonLabel>Search</ButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          class="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="query"
        />
      </SearchForm>
    </SearchbarBox>
  );
};
export default Searchbar;
