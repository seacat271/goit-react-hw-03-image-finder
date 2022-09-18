const Searchbar = ({onSearchSubmit}) => {

  return (
    <header class="searchbar">
      <form class="form"
      onSubmit={onSearchSubmit}>
        <button 
        type="submit" 
        class="button" 
        >
          <span class="button-label">Search</span>
        </button>

        <input
          class="input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
          name="query"
        />
      </form>
    </header>
  );
};
export default Searchbar;
