export const Button = ({ children }: { children?: React.ReactNode }) => (
  <button type="button" onClick={() => alert('hello')}>
    {children}
  </button>
)
