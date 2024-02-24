export function Post(props) {

    // const {author, content} = props

    return (
        <>
            <strong>{props.author}</strong>
            <p>{props.content}</p>
        </>
    )
}