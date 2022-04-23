export default function Button(props) {
    return (
        <button onClick={props.buttonOnSubmit}>
            {props.buttonTitle}
        </button>
    );
}