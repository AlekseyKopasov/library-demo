function formHandler(evt: Event): void {
  const target = evt.target as HTMLElement;

  if (target.dataset.searhForm) {
    // const tag = target.dataset.searhForm;
    // const content = document.querySelector(`.search-form__dropdown-content [data-searh-form=${tag}]`);

    // console.log('content :>> ', content);
  }
}

const searchForm = document.querySelector('.search-form');

export const initSearchDropdowns = () => {
  if (!searchForm) {
    return;
  }

  searchForm.addEventListener('click', formHandler)
}
