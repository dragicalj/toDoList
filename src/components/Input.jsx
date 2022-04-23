export default function Input(props) {
    return (
        <input 
            type={props.fieldType} 
            placeholder={props.fieldPlaceholder} 
            onChange={props.fieldOnChange}
        />
    );
}