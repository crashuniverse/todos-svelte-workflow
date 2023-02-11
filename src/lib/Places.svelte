<script>
  let places = [
    'Goa, India',
    'Bali, Indonesia',
    'Ho Chi Minh, Vietnam',
  ];
  let place = undefined;
  const handleClick = () => {
    places = places.concat(place);
    place = undefined;
  }
  const handleClickRemove = (place) => {
    const filteredPlaces = places.filter(i => i !== place);
    places = filteredPlaces;
  }
</script>

<div>
  <ul>
    {#each places as place}
      <li>
        {place}
        <button on:click={() => handleClickRemove(place)} class=unstyled>&#10006;</button>
      </li>
    {/each}
  </ul>
</div>

<div class="places">
  <div><label for=place>Enter a new place</label></div>
  <input name=place id=place bind:value={place} />
  <button on:click={handleClick} disabled={place === undefined}>Add</button>
</div>

<style>
  li, .places {
    text-align: left;
  }
  input {
    padding: 0.5em;
  }
  button.unstyled {
    padding: 0.2em 0.3em;
  }
</style>