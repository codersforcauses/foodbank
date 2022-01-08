export interface HamburgerProps {
  small?: boolean
}

const Hamburger = ({ small }: HamburgerProps) => {
  const fillDiv = small
    ? {
        width: '20px',
        height: '3px',
        backgroundColor: '#fff',
        margin: '4px 0'
      }
    : {
        width: '25px',
        height: '3px',
        backgroundColor: '#fff',
        margin: '4px 0'
      }
  return (
    <div className={small ? '' : 'mx-2 mt-1'}>
      <div style={fillDiv}></div>
      <div style={fillDiv}></div>
      <div style={fillDiv}></div>
    </div>
  )
}

export default Hamburger
