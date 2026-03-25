export default function FooterLogo() {

    const logoColor = "green";

    return (
        <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 320" width="100px">
  <text x="100" y="45" font-family="Rockwell, 'Courier New', Courier, serif" font-size="26" font-weight="900" text-anchor="middle" fill={logoColor} letter-spacing="3">LITTLE</text>

  <polyline points="65,65 170,65 170,200" fill="none" stroke={logoColor} stroke-width="4" stroke-linecap="square" />
  <polyline points="135,245 30,245 30,110" fill="none" stroke={logoColor} stroke-width="4" stroke-linecap="square" />

  <path d="M 90 95
           C 60 110, 55 160, 75 190
           C 90 210, 110 225, 115 220
           C 135 180, 130 140, 115 125
           C 125 125, 135 120, 135 110
           C 125 100, 110 105, 100 105
           C 95 105, 95 95, 90 95 Z" 
        fill={logoColor} />

  <text x="100" y="285" font-family="Rockwell, 'Courier New', Courier, serif" font-size="26" font-weight="900" text-anchor="middle" fill={logoColor} letter-spacing="3">LEMON</text>
</svg>
</>
    )
}