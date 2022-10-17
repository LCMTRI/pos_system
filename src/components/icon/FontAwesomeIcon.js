import "./FontAwesomeIcon.css"

export default function FAIcon({name=""}) {
  return (
    <div className="icon-container">
        <i className={"category-icon " + name} aria-hidden="true"/>
    </div>
  )
}