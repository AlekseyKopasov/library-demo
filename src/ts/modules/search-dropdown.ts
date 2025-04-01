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

  toggleEl.classList.toggle('is-open');
  dropdown.classList.add('is-active');

  if (activeToggle === toggleEl) {
    activeToggle.classList.remove('is-open');
    activeContent?.classList.remove('is-active');
    dropdown.removeEventListener('click', dropdownHandler);
  }

  if (dropdown.classList.contains('is-active')) {
    dropdown.addEventListener('click', dropdownHandler);
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

  document.querySelectorAll('.search-form__dropdown-title').forEach(title => {
    title.textContent = (title as HTMLElement).dataset.title || '';
  });
}

function dropdownHandler(evt: Event): void {
  const target = evt.target as HTMLElement;

  let link = null;

  if (target.classList.contains('search-form__dropdown-link')) {
    link = target;
  }
  if (target.parentElement?.classList.contains('search-form__dropdown-link')) {
    link = target.parentElement;
  }

  if (!link) {
    return;
  }

  const activeToggle = document.querySelector('.search-form__dropdown.is-open');
  const title = activeToggle?.querySelector('.search-form__dropdown-title');

  title!.textContent = link.textContent;
}

const searchForm = document.querySelector('.search-form');

export const initSearchDropdowns = () => {
  if (!searchForm) {
    return;
  }

  searchForm.addEventListener('click', formHandler);
  searchForm.addEventListener('reset', formResetHandler);
};
