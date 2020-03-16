import React from 'react';

export default Filter;

function Filter({ view, limit, order, search, setView, setSearch, setOrder, setLimit }) {
  return (
    <div className="uk-margin-medium-bottom uk-flex">
      <form className="uk-search uk-search-default uk-width-medium uk-margin-remove uk-margin-right">
        <span data-uk-search-icon />
        <span
          className="uk-search-icon uk-search-icon-flip"
          data-uk-spinner="ratio: 0.6"
        />
        <input
          className="uk-search-input"
          type="search"
          placeholder="Search..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </form>
      <select 
        className="uk-select uk-width-small uk-margin-auto-left" 
        value={order}
        onChange={e => setOrder(e.target.value)}
      >
        <option value="asc">ASC</option>
        <option value="desc">DESC</option>
      </select>
      <select 
        className="uk-select uk-width-small uk-margin-left" 
        value={limit}
        onChange={e => setLimit(e.target.value)}
      >
        <option value={6}>6</option>
        <option value={12}>12</option>
        <option value={24}>24</option>
      </select>
      <div className="uk-button-group uk-margin-left">
        <button 
          type="button" 
          onClick={() => setView("grid")} 
          className={`uk-button uk-button-default ${view === "grid" ? "uk-active" : ""}`}
        >
          <span data-uk-icon="icon:  grid" />
        </button>
        <button 
          type="button" 
          onClick={() => setView("list")} 
          className={`uk-button uk-button-default ${view === "list" ? "uk-active" : ""}`}
        >
          <span data-uk-icon="icon:  list" />
        </button>
      </div>
    </div>
  );
}
