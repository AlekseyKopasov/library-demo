function formHandler(evt: Event): void {
  const target = evt.target as HTMLElement;
  const parent = target.closest('[data-search-toggle]') as HTMLElement;
  const id = parent?.dataset.searchToggle;
  const toggleEl = parent?.querySelector('.search-form__dropdown');

  if (!id || !toggleEl) {
    return;
  }

  const activeToggle = document.querySelector('.search-form__dropdown.is-open');
  const activeContent = document.querySelector('.search-form__dropdown-content.is-active');
  activeToggle?.classList.remove('is-open');
  activeContent?.classList.remove('is-active');

  const dropdown = document.querySelector(`[data-search-content="${id}"]`) as HTMLElement;
  dropdown.classList.add('is-active');

  toggleEl.classList.toggle('is-open');

  if (activeToggle === toggleEl) {
    activeToggle.classList.remove('is-open');
    activeContent?.classList.remove('is-active');
  }
}

function formResetHandler(): void {
  const activeToggle = document.querySelector('.search-form__dropdown.is-open');
  const activeContent = document.querySelector('.search-form__dropdown-content.is-active');

  if (activeToggle) {
    activeToggle.classList.remove('is-open');
  }

  if (activeContent) {
    activeContent.classList.remove('is-active');
  }
}

const searchForm = document.querySelector('.search-form');

export const initSearchDropdowns = () => {
  if (!searchForm) {
    return;
  }

  searchForm.addEventListener('click', formHandler);
  searchForm.addEventListener('reset', formResetHandler);
};
