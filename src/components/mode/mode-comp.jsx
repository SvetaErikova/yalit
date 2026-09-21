export const Mode = () =>{
  return (
    <div className={'mode'}>
      <button
        className={'button button-filled button-accent js-mode-toggle'}
        type="button"
        data-body-class="dark-mode"
      >
        Dark mode
      </button>
      <button
        className={'button button-filled button-accent js-mode-toggle'}
        type="button"
        data-body-class="brand-green"
      >
        Brand mode
      </button>
    </div>
  )
}
