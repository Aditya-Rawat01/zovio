type buttonProps = {
    className: string,
    sectionId: string,
    name: string,
    children?:React.ReactElement
}

export const Button = ({sectionId, className, name, children}:buttonProps)=>{
    return <button
    className={className}
  onClick={() =>
    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: "smooth" })
  }
>
  {name}
  {children}
</button>
}



