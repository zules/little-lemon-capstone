export default function FooterLogo() {

    const logoColor = "white";

    return (
        <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 320" width="200px">
  <text x="100" y="45" fontFamily="Rockwell, 'Courier New', Courier, serif" fontSize="26" fontWeight="900" textAnchor="middle" fill={logoColor} letterSpacing="3">LITTLE</text>

  <polyline points="65,65 170,65 170,200" fill="none" stroke={logoColor} strokeWidth="4" strokeLinecap="square" />
  <polyline points="135,245 30,245 30,110" fill="none" stroke={logoColor} strokeWidth="4" strokeLinecap="square" />

  <path d="M 90 95
           C 60 110, 55 160, 75 190
           C 90 210, 110 225, 115 220
           C 135 180, 130 140, 115 125
           C 125 125, 135 120, 135 110
           C 125 100, 110 105, 100 105
           C 95 105, 95 95, 90 95 Z" 
        fill={logoColor} />

  <text x="100" y="285" fontFamily="Rockwell, 'Courier New', Courier, serif" fontSize="26" fontWeight="900" textAnchor="middle" fill={logoColor} letterSpacing="3">LEMON</text>
</svg>
</>
    )
}