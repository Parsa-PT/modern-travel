import Image from "next/image"

type ButtonProps ={
    type : 'button' | 'submit',
    title : string,
    icon? :string,
    variant : string,
}

const Button = ({title , icon , variant , type} : ButtonProps) => {
  return (
    <div>
      <button className={`${variant} flexCenter gap-3 rounded-full`} type={type}>
        {icon &&  <Image src={icon} width={24} height={24} alt="icon"/>}
       
        <label className=" bold-16 whitespace-nowrap">{title}</label>
      </button>
    </div>
  )
}

export default Button
