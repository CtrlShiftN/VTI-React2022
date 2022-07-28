export default function Input(props) {
    return (
        <div className="form-outline mb-4">
            <label className="form-label" for={props.id}>{props.labelName}</label>
            <input type={props.type} id={props.id} className={props.className} placeholder={props.placeholder} ></input>
        </div>
    )
}