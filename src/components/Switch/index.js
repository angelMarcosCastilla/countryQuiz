import { Moon } from "./styled"
const Index = ({HandleToggleTheme}) => {
  const buttonStyle = {
    "background" :"none",
    "border" : "none",
    "outline" : "none",
    "cursor" : "pointer",
    "color" : "currentcolor"
  }
  return (
    <button style = {buttonStyle} onClick = {HandleToggleTheme}>
      <Moon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M264 480A232 232 0 0132 248c0-94 54-178.28 137.61-214.67a16 16 0 0121.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200 31.34 0 59.57-5.07 81.61-14.67a16 16 0 0121.06 21.06C442.28 426 358 480 264 480z"></path></Moon>
      Dark mode 
    </button>
  )
}

export default Index
