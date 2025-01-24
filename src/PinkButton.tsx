export const PinkButton = ({text, style = ''}:any) => {
    return (
     <button className={`bg-PrimaryColor p-1 rounded-lg w-full h-full ${style}`}>
  {text} 
     </button>
     )
  }