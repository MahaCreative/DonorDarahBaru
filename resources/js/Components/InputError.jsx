export default function InputError({ message, className = "", ...props }) {
    return message ? (
        <p
            {...props}
            className={"text-[8pt] md:text-sm text-red-600 " + className}
        >
            {message}
        </p>
    ) : null;
}
